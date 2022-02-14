import axios from 'axios';

const getData = async (user_id) => {
    try {
        const { data: user } = await axios.get("https://jsonplaceholder.typicode.com/users/" + user_id)
        const { data: post } = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + user_id)
        return  { user, post }
    } catch (error) {
        console.log(error)
    }
}

export default getData;
