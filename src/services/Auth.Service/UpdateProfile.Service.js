import authApi from "../../api/AuthBaseApi/AuthBaseApi";

export const updateProfile = async (payload) =>{
    try {
        const res = await authApi.patch("/api/updateProfile",payload);
        return res.data;
    } catch (error) {
        console.log("error", error.message);
    }
}