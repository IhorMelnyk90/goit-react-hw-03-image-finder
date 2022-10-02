import axios from 'axios';

const MY_KEY = '6233847-6e262c1189fcf23cdea715b95';
axios.defaults.baseURL = 'https://pixabay.com/api';

const Api = async (name, page) => {
    const response = await axios.get(
        `?q=${name}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
};

export default Api;

