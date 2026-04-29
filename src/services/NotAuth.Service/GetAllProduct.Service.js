import notAuthApi from "../../api/NotAuthBaseApi/NotBaseAPi";

export const getAllProductApi = async () =>{
    try {
        const res = await notAuthApi.get("/api/getAllProduct");
        return res.data
    } catch (error) {
        console.log("error", error.message);
    }
}