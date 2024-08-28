import axios from 'axios'

export const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'cd32db2bf2msh2fb8d0cddf1c269p1cf6d5jsna7cc326d2508',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromApi=async (url)=>{
   const {data}= await axios.get(`${BASE_URL}/${url}`, options);
   return data;
}       