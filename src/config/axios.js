import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://fbrdmreactmongoose.herokuapp.com//'
    }
)