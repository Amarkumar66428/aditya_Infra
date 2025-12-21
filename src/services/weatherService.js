
const weatherService = {
    getWeather: async (city) => {
        const response = await api.get(`/weather?city=${city}`);
        return response.data;
    }
}

export default weatherService;