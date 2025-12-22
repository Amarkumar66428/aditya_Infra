import api from "../utils/axios";

const weatherService = {
    getWeather: async (city, lat, lon) => {
        const params = {
            city, lat, lon, days: 5, units: 'metric'
        }

        const response = await api.get(`/weather`, { params });
        return response.data;
    }
}

export default weatherService;