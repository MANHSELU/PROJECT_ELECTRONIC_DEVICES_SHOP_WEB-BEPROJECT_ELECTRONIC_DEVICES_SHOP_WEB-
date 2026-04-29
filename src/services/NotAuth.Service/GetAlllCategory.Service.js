import notAuthApi from "../../api/NotAuthBaseApi/NotBaseAPi";

export const getAllCategoriesApi = async () =>{
    try {
        const res = await notAuthApi.get("/api/categories");
        return res.data;
    } catch (error) {
        console.log("error", error.message);
    }
}