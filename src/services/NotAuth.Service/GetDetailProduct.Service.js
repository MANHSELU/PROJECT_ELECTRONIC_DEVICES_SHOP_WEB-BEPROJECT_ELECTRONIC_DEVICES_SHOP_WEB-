import notAuthApi from "../../api/NotAuthBaseApi/NotBaseAPi";

export const getDetailProductApi = async (productId) =>{
    try {
        const res = await notAuthApi.get("/api/getDetailProduct",{
            params: {product_id: productId}
        });
        return res.data;
    } catch (error) {
        console.log("error", error.message);
    }
}