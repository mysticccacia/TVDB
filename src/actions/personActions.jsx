export {removeperson} from "../reducers/personSlice";
import { loadperson} from "../reducers/personSlice";
import  axios  from "../components/utils/axios";

export const asyncloadperson = (id)=> async(dispatch,getState)=>{
    try{
        const detail = await axios.get(`/person/${id}`);
        const externalId = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);
       
       

        let ultimateDets = {
        detail: detail.data,
        externalId: externalId.data,
        combinedCredits: combinedCredits.data,
        tvCredits: tvCredits.data,
        movieCredits: movieCredits.data
         
        }
        dispatch(loadperson(ultimateDets))
   
    }
    catch(error){
        console.log("Error: ",error);
    }

    
}