import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://fbrdmongoose.herokuapp.com//'
    }
)