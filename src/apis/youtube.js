import axios from 'axios'

const KEY = 'AIzaSyA-X6z_m3NdKPHbbKm7kfCooQnlWXD4Y-0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: "video",
        maxResults: 5,
        key: KEY
    }
})