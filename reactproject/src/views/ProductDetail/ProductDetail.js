import React, {useState, useEffect} from "react";
import API from "../../const/api";
import {Button, Carousel, Col, Dropdown, Image, Row} from "react-bootstrap";
import '../../App.css';
import Bread from "../../components/Bread/Bread";



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
            <Bread className='product-detail-bg'/>

            <div className='container-fluid'>
                <Row>
                    <Col xs={12} lg={5} md={{offset: 1}}>
                        <h2>{item.title}</h2>
                        <Image src={item.image} alt={""} fluid />
                    </Col>
                    <Col xs={12} lg={5} md={{offset: 1}}>
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
                    </Col>
                </Row>
                <Row>
                    <div className='container-fluid w-25'>
                        <Carousel className='mt-5 carousel mb-5'>
                            <Carousel.Item>
                                <img
                                    className="d-inline-block w-100"
                                    src={item.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-inline-block w-100"
                                src={item.image}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-inline-block w-100"
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
