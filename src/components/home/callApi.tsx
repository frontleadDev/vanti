import axios from "axios";
import { Home } from "../../global/interface";

export const fetchHome = async (): Promise<Home | null> => {
    try{
        const response = await axios.get<Home>(`${process.env.NEXT_PUBLIC_URL_API}/json/home.json`)
        return response.data
    }catch(error){
        console.log('Error: '+error)
        return null
    }
}
