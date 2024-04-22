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
                        {
                            data.map((item,i)=>{
                                return(
                                    <div className="col-md-3 p-1">

                                        <div className="card p-3">
                                            <img className="w-100" src={item['image']} alt=""/>
                                            <h6>{item['title']}</h6>
                                        </div>
                                    </div>

                                )

                            })
                        }
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductList;