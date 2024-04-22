import React, {useState} from 'react';
import Helper from "../utility/Helper.js";
import toast from "react-hot-toast";
import ButtonSpinner from "./ButtonSpinner.jsx";

const LoginForm = () => {

    let [submit,SetSubmit] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        let formData= new FormData(e.target);
        let email = formData.get("email");
        if (Helper.isEmpty(email)){
            toast.error("Email Required !")
        }else{

            SetSubmit(true);
            // API Call
            //SetSubmit(true);
        }


        // alert(formData.get('email'))
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <form onSubmit={onSubmit} className="p-4">
                            <label className="form-label"> Your Email Address</label>
                            <input name="email" type="email" className="form-control mt-2"/>
                            <button disabled={submit} className="btn btn-primary w-100" type="submit">{
                                submit?(<ButtonSpinner/>):("Submit")
                            }
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginForm;