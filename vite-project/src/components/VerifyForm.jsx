import React, {useState} from 'react';
import ButtonSpinner from "./ButtonSpinner.jsx";

import Helper from "../utility/Helper.js";
import toast from "react-hot-toast";
import axios from "axios";

const VerifyForm = () => {

    let [submit,SetSubmit] = useState(false);


    const onSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get("email");
        if (Helper.isEmpty(email)) {
            toast.error("Email Required !")
        } else {

            SetSubmit(true);
            // API Call
            let res = await axios.post(`${Helper.API_BASE}/user-login`, {UserEmail: email})
            SetSubmit(false);
            if (res.data['msg'] === "success") {
                toast.success(res.data['data'])
                sessionStorage.setItem('email', email);
                navigate('/verify')
            } else {
                toast.error("Register Error !")

                SetSubmit(true);
            }


        }
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <form onSubmit={onSubmit} className="p-4">
                            <label className="form-label"> Verification Code</label>
                            <input name="otp" type="text" className="form-control mt-2"/>
                            <button disabled={submit} className="btn btn-primary w-100" type="submit">{
                                submit ? (<ButtonSpinner/>) : ("Submit")
                            }
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VerifyForm;