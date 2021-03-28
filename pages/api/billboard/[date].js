import { apiBase, apiKey } from '../../../lib/billboard';
import { useRouter } from 'next/router';


    


export default async function dateMusic(req, res) {

    const { date } = req.query;
    const content  = await fetch(`${apiBase}&date=${date}`,     {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "billboard-api2.p.rapidapi.com"
	    }
    });
    const json = await content.json();
    console.log(`data: ${date}`);
    res.status(200).json({
        list: json.content
    }); 


}