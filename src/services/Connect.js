import axios from "axios";

class Connect { 

    async login(body) {
        // const resp = await fetch("http://127.0.0.1:8000/api/login/", {
        const resp = await fetch("http://127.0.0.1:8000/auth/", {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return await resp.json(); 
    }

    signup(data) {
        return axios.post("http://127.0.0.1:8000/api/signup/", data);
    }
}

export default new Connect();