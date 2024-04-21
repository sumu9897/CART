import React, {useEffect} from 'react';
import Helper from "../utility/Helper.js";

const ProductList = () => {

    let [data, setData] = React.useState(null);

    useEffect(() => {
        (async ()=>{
            await CallProductList()
        })()
    }, []);

    const CallProductList=async()=>{
        await axios.get(`${Helper.API_BASE}/product-list`)
    }
    return (
        <div>

        </div>
    );
};

export default ProductList;