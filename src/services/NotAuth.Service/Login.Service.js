import notAuthApi from "../../api/NotAuthBaseApi/NotBaseAPi";

export const loginApi = async (payload) =>{
    try {
        const res = await autnotAuthApiApi.post("/api/login",payload);
        return res.data;
    } catch (error) {
        console.log("error", error.message);
    throw error.response?.data?.message || "Không kết nối được server";
    }
}