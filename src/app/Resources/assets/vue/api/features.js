import axios from 'axios';

export default {
    features () {
        return axios.get('/api/features')
    }
};