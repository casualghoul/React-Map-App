import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles'

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) =>{
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
    

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyB_0sInES3fPdcRDoJ2QJ0f0DYtUX_uO9Y'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e)=> {      
                    console.log(e);
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({sw: e.marginBounds.sw, ne: e.marginBounds.ne});                 
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, i)=>(
                    <div 
                    className={classes.markerContainer} 
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            ) : (
                                <Paper elevation={3} className="classes.paper">
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img 
                                    className={classes.pointer} 
                                    src={place.photo ? place.photo.images.small.url : ''}
                                    alt={place.name}
                                    style={{width: 100, height: 100}}
                                     />
                                     <Rating size="small" value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;