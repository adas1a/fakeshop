import '../App.css';
import {CardDeck, Card} from 'react-bootstrap';
import OneCard from "./OneCard";

const Cards = () => {
    return(
        <div className="container HomeBody">
                <CardDeck>
                    <OneCard img="/d1.jpg" />
                    <OneCard img="/d1.jpg" />
                    <OneCard img="/d1.jpg" />
                </CardDeck>
        </div>
    );


}
export default Cards;