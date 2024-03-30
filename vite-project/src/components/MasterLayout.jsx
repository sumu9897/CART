import React from 'react';
import AppNavBar from "./AppNavBar.jsx";

const MasterLayout = (props) => {
    return (
        <div>
            <AppNavBar/>

            {props.children}
            
        </div>
    );
};

export default MasterLayout;