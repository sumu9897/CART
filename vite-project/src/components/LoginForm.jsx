import React from 'react';

const LoginForm = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        let formData= new FormData(e.target);
        alert(formData.get('email'))
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <form onSubmit={onSubmit} className="p-4">
                            <label> Your Email Address</label>
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