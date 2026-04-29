import notAuthApi from "../../api/NotAuthBaseApi/NotBaseAPi";

export const getTopProductApi = async () =>{
    try {
        const res = await notAuthApi.get("/api/topProducts");
        return res.data;
    } catch (error) {
        console.log("error", error.message);
    }
}