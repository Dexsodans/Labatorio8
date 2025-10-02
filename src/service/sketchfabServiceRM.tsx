import axios from "axios";
export interface Model {
    id: string
    name: string;
    /* thumbnail: string;
    viewerUrl: string; */
    status: string;
    species: string;
    image: string;
    episode: [];
}

const API_URL = "https://rickandmortyapi.com/api/character/?page=20";

export const fetchModels = async (query: string): Promise<Model[]> => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: query,
                /* type: "models", */
                count: 20
            }
        });
        return response.data.results.map((item: any )=> ({
            id: item.id,
            name: item.name,
            /* thumbnail: item.thumbnails.images[0].url,
            viewerUrl: item.viewerUrl *//*  */
            status: item.status,
            species: item.species,
            image: item.image,
            episode: item.episode

        }))
    } catch (error) {
        console.log("error: ", error)
        return [];
    }
}