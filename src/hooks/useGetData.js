import baseUrl from "../API/baseURL";

//this methos is to bring the data from the server with params
const useGetData = async (url, params) => {
     const res = await baseUrl.get(url, params);
     return res.data
}


//this meethod is to bring data with token
const useGetDataToken = async (url) => {
     const config = {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
     }

     const res = await baseUrl.get(url, config);
     return res.data
}


export { useGetData, useGetDataToken };