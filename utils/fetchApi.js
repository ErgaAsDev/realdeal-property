import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '590eb9f810msh15fd75e27317c5ep1ab462jsnccb84973ad52' ,
    },
  });
    
  return data;
}