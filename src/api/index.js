import axios from 'axios';


export const getPlacesData = async (type, sw, ne) => {
    try{
        //request
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng    
              },
              headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '84f7f131ebmshf695a15e932c817p1686a5jsn10e792607857'
              }
        });
        
        return data;

    } catch(error){
        console.log(error);
    }
    
}