import axios from 'axios';

export default class UserList {
    static async getUsers (limit = 4, page = 1) {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users/', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return responce;
    }

    static async getUserPosts (id, limit = 3) {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`, {
            params: {
                _limit: limit
            }
        });
        return responce;
    }
}