import notAuthApi from "../../api/NotAuthBaseApi/NotBaseAPi";

export const registerApi = async (payload) =>{
    try {
        const res = await notAuthApi.post("/api/register",payload);
        return res.data;
    } catch (error) {
        console.log("error", error.message);
    throw error.response?.data?.message || "Không kết nối được server";
    }
}