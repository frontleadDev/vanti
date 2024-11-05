import axios from "axios";
import { DistritosData } from "../../global/interface";

export const fetchDistritosData = async (): Promise<DistritosData | null> => {
    try{
        const response = await axios.get<DistritosData>(`${process.env.NEXT_PUBLIC_URL_API}/json/distrito.json`)
        return response.data
    }catch(error){
        console.log('Error: '+error)
        return null
    }
}
