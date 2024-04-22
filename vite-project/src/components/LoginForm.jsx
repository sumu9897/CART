import React from 'react';
import Helper from "../utility/Helper.js";
import toast from "react-hot-toast";

const LoginForm = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        let formData= new FormData(e.target);
        let email = formData.get("email");
        if (Helper.isEmpty(email)){
            toast.error("Email Required !")
        }else{
            // API Call
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
                            <button className="btn btn-primary w-100" type="submit">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginForm;