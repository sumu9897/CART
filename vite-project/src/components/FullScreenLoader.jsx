import React from 'react';

const FullScreenLoader = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-2 mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default FullScreenLoader;