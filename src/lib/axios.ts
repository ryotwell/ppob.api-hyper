import Axios from 'axios'
import { DIGIFLAZZ_URL } from '../config'

export const axios = Axios.create({
    baseURL: DIGIFLAZZ_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

export default axios