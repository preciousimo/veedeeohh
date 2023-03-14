import axios from "axios";

class Connect { 

    async login(body) { 
        const resp = await fetch("http://127.0.0.1:8000/auth/", {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        let data = await resp.json();
        return await resp.json(); 
        console.log(data);
    }

    signup(data) {
        return axios.post("http://127.0.0.1:8000/api/signup/", data);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Connect();