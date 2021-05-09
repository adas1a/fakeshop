import {Breadcrumb} from "react-bootstrap";
import React from 'react';


const Bread = () => {
    return (
        <div >
            <Breadcrumb >
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item >
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Shop
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Product</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

export default Bread;