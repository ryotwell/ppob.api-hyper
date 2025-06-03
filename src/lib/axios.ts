import Axios from 'axios'

export const axios = Axios.create({
    baseURL: 'https://api.digiflazz.com/v1',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

export default axios