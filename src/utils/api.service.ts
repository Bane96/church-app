import axios, {AxiosResponse} from 'axios'
// const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJhbmU5NiIsImlkIjoxLCJpYXQiOjE3MTE1NzQ0NzMsImV4cCI6MTcyMDIxNDQ3M30.goM9Lobdh3pnrSQd3I7EOni9qXpdwVAwJX3UthYgrW0"
const authToken = JSON.parse(localStorage.getItem('token') ?? '{}');
const defaultOptions = {
    headers: {
        'Content-Type': 'application/json',
        'accept': 'text/html',
        'Authorization': `Bearer ${authToken}`
    },
};
const instance = axios.create(defaultOptions);
axios.interceptors.request.use(config => {
    console.log(authToken)
    if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
});

axios.interceptors.response.use(
    response => response,
    error => {
        const status = error.response ? error.response.status : null;

        if (status === 401) {
            // Handle unauthorized access
            console.log("Unauthorized access");
        } else if (status === 404) {
            // Handle not found errors
            console.log("Post not found");
        } else {
            // Handle other errors
            console.error("An error occurred:", error);
        }

        return Promise.reject(error);
    }
);

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
    get: (url: string, params?: any) => instance.get(url, {params}).then(responseBody).catch(e => {
        throw e;
    }),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody).catch(e => {
        throw e;
    }),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody).catch(e => {
        throw e;
    }),
    delete: (url: string) => instance.delete(url).then(responseBody).catch(e => {
        throw e;
    }),
};
