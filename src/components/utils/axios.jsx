import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
     headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjNkOWJiMTAyZDE3ZjkzY2Q4NWUwY2M3YzI5ZDIxNSIsIm5iZiI6MTc1MTIwMTM1Ny4yODQ5OTk4LCJzdWIiOiI2ODYxMzY0ZDY0MTk2OTFhZTQ3ZWQ4ZDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.b0iFznvvRaCHvuOYVSzRhCZBg2cubnTs2yXuVaQyPW0'
  }
})

export default instance;