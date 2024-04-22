import React, {useEffect} from 'react';
import axios from "axios";
import Helper from "../utility/Helper.js";
import FullScreenLoader from "./FullScreenLoader.jsx";
import toast from "react-hot-toast";

const ProductList = () => {

    let [data, setData] = React.useState(null);

    useEffect(() => {
        (async ()=>{
            await CallProductList()
        })()
    }, []);

    const CallProductList=async()=>{
        let res= await axios.get(`${Helper.API_BASE}/product-list`)
        let productList=res.data['data'];
        setData(productList);
    }

    const AddToCart= async (id)=>{
        try{
            let res= await axios.get(`${Helper.API_BASE}/create-cart/${id}`,Helper.tokenHeader())
            // debugger;
            if(res.data['msg']==="success"){
                toast.success("Request Completed")

            }else{
                toast.error("Request Fail")

            }
        }catch (e){
            // debugger;
            Helper.Unauthorized(e.response.status)

        }


    }




    return (
        <div>
            {data == null ? (<FullScreenLoader/>) : (
                <div className="container mt-3">
                    <div className="row">
                        {
                            data.map((item, i) => {
                                return (
                                    <div className="col-md-3 p-1">

                                        <div className="card p-3">

                                            <img className="w-100" alt="" src={item['image']}/>

                                            <h5> PRICE: $
                                                {item['discount'] === 0 ? (<span>{item['price']}</span>) : (
                                                    <span><strike>{<span>{item['price']}</span>}</strike> {
                                                        <span>{item['discount_price']}</span>}
                                                </span>
                                                )}
                                            </h5>


                                            <p>{item['title']}</p>
                                            <button onClick={async ()=>{ await AddToCart(item['id'])}} className="btn btn-outline-secondary"> Add to Cart</button>
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