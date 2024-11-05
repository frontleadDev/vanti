import axios from "axios";
import { Redes } from "../../global/interface";

export const fetchRedes = async (): Promise<Redes | null> => {
    try{
        const response = await axios.get<Redes>(`${process.env.NEXT_PUBLIC_URL_API}/json/redes.json`)
        return response.data
    }catch(error){
        console.log('Error: '+error)
        return null
    }
}
