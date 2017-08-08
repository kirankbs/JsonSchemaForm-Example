import axios from 'axios';

const get = url => axios.get(url)
const getData = url => {
    var data = []
    get(url).then(response => {
        data = response.data
    })
    return data
}

export default getData;