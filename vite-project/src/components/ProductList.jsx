import React, {useEffect} from 'react';
import Helper from "../utility/Helper.js";
import FullScreenLoader from "./FullScreenLoader.jsx";

const ProductList = () => {

    let [data, setData] = React.useState(null);

    useEffect(() => {
        (async ()=>{
            await CallProductList()
        })()
    }, []);

    const CallProductList=async()=>{
        let res= await axios.get(`${Helper.API_BASE}/product-list`)
        let productList=res.data['dats'];
        setData(productList);
    }
    return (
        <div>
            {data===null?(<FullScreenLoader/>):(
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <h1>Hello Class</h1>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductList;