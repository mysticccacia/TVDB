export {removetv} from "../reducers/tvSlice";
import { loadtv} from "../reducers/tvSlice";
import  axios  from "../components/utils/axios";

export const asyncloadtv = (id)=> async(dispatch,getState)=>{
    try{
        const detail = await axios.get(`/tv/${id}`);
        const externalId = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchProviders = await axios.get(`/tv/${id}/watch/providers`);

        let ultimateDets = {
        detail: detail.data,
        externalId: externalId.data,
        recommendations: recommendations.data.results,
        similar: similar.data.results,
        translations: translations.data.translations.map(t=>t.english_name),
        videos: videos.data.results.find(ele => ele.type ==="Trailer"),
        watchProviders: watchProviders.data.results.IN
        }
   
        dispatch(loadtv(ultimateDets))
    }
    catch(error){
        console.log("Error: ",error);
    }

    
}