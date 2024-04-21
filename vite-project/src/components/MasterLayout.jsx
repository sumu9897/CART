import React from 'react';
import AppNavBar from "./AppNavBar.jsx";
import Footer from "./Footer.jsx";

const MasterLayout = (props) => {
    return (
        <div>
            <AppNavBar/>

            {props.children}
            <Footer/>

        </div>
    );
};

export default MasterLayout;