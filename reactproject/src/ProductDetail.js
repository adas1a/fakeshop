import React, {useState, useEffect} from "react";
import API from "./const/api";
import {Breadcrumb, Button, Carousel, Col, Container, Dropdown, Row} from "react-bootstrap";
import './App.css';
import Bread from "./Bread";



function ProductDetail({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({
        image: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`${API}/products/${match.params.id}`)
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    }

    return (
        <div>
            <Bread className='pd-bg'/>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-12 col-lg-5 offset-md-1'>
                        <img src={item.image} alt={""} className='img-fluid' />
                        <figcaption>{item.title}</figcaption>
                    </div>
                    <div className='col-xs-12 col-lg-5 offset-md-1'>
                        <h3>Price {item.price}$</h3>
                        <h4>Free shipping</h4>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Delivery Option
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Collect</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Kurier</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Paczkomat</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button href="#">Add to cart</Button>
                        <Button href="#">Buy Now</Button>
                    </div>
                </div>
                <Row>
                    <div className='container'>
                        <Carousel className='mt-5'>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item><Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.image}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item><Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.image}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    </div>

                </Row>


            </div>
        </div>




    );
}

export default  ProductDetail;
