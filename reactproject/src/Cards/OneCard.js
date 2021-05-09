import {Card} from "react-bootstrap";

const OneCard = ({img}) => {
    return(
        <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>Post title</Card.Title>
            <Card.Text>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque, ea explicabo incidunt
                    minima qui sequi sint voluptatibus. Adipisci amet debitis deserunt eveniet fuga hic iusto non quidem
                    vel voluptas?</p>
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Written by Adam</small>
        </Card.Footer>
    </Card>);
}
export default OneCard;