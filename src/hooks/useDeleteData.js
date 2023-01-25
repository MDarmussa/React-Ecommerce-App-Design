import baseUrl from "../API/baseURL";

const useDeleteData = async (url, params) => {
     const res = await baseUrl.delete(url, params);
     return res.data
}

export default useDeleteData