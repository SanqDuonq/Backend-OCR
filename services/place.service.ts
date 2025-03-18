import axios from "axios";



class PlaceService {
    private API_KEY = "YOUR_GOOGLE_PLACES_API_KEY";

    async getNearbyPlaces(location: string) {
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=địa+điểm+du+lịch+ở+${location}&key=${this.API_KEY}`;
        try {
            const response = await axios.get(url);
            return response.data.results.map((place: any) => ({
                name: place.name,
                address: place.formatted_address,
            }));
        } catch (error) {
            console.error("Google Places API Error:", error);
            return [];
        }
    }
}

export default new PlaceService();