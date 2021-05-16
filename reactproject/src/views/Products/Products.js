import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Card, Container, Row} from "react-bootstrap";
import API from "../../const/api";
// import useModal from "../../hooks/useModal";

const Products = () => {

    // const [data, fetchData] = useFetchData(`${API}/products`);

    useEffect(() => {
        fetchItems()
            .then(json=>console.log())
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(`${API}/products`);
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
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