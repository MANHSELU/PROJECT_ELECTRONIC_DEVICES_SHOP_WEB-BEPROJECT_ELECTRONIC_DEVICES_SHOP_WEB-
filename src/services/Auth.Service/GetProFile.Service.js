import authApi from "../../api/AuthBaseApi/AuthBaseApi"

export const getProfile = async () =>{
    try {
        const res = await authApi.get("/api/profile")
        return res.data;
    } catch (error) {
        console.log("error", error.message);
    }
}