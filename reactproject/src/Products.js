import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Card, CardColumns, CardDeck, Col, Container, Row} from "react-bootstrap";
import API from "./const/api";

const Products = () => {
    useEffect(() => {
        fetchItems()
            .then(json=>console.log())
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(`${API}/products`
        );
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        // <Container className="container">
        //     <Row>
        //         {items.map(item => (
        //
        //                 <Col className="col-lg-3">
        //                     <CardDeck className="container">
        //                             <Card className="no-gutters card-style">
        //                                 <div className="Parent">
        //                                     <Card.Img variant="top" src={item.image} className="img-style img-fluid" />
        //                                     <Card.Body>
        //                                         <Card.Title>{item.title}</Card.Title>
        //                                         <Card.Text>
        //                                             {item.category}
        //                                         </Card.Text>
        //                                         <Button variant="primary" key={item.id}>
        //                                             <Link to={`/products/${item.id}`}>Check me out</Link>
        //                                         </Button>
        //                                     </Card.Body>
        //                                 </div>
        //                         </Card>
        //                     </CardDeck>
        //                     </Col>
        //         ))}
        //     </Row>
        // </Container>
        // <div className="">
        // {items.map(item => (
        //         <CardDeck className="container">
        //             <Row xs={2} md={4} lg={6}>
        //             <Card >
        //                 <Card.Img variant="top" src="holder.js/100px160" />
        //                 <Card.Body>
        //                     <Card.Title>Card title</Card.Title>
        //                     <Card.Text>
        //                         This is a wider card with supporting text below as a natural lead-in to
        //                         additional content. This content is a little bit longer.
        //                     </Card.Text>
        //                 </Card.Body>
        //                 <Card.Footer>
        //                     <small className="text-muted">Last updated 3 mins ago</small>
        //                 </Card.Footer>
        //             </Card>
        //             </Row>
        //         </CardDeck>
        // ))}
        // </div>
        <Container>
            <Row  className="wrapper1">
            {items.map(item => (
                    <Card style={{ width: '240px' }} className="">
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.category}
                            </Card.Text>
                        </Card.Body>
                        <Button variant="warning" key={item.id}>
                            <Link to={`/products/${item.id}`}>Check me out</Link>
                        </Button>
                    </Card>

                ))}

            </Row>
        </Container>
    );
};

export default Products;