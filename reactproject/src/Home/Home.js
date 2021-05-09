import '../App.css';
import d1 from '../img/d1.jpg';
import {Button} from 'react-bootstrap';

const styles = {
    header: {
        backgroundImage: 'url(/home.jpg)',
        height: '70vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },

    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
}

const Home = () => {
    return(
        <div className="HomeBody">
            <div style={styles.header} className="text-wrap">
                {/*<img src={d1} alt="" className="imgBg img-fluid"/>*/}
                    <div style={styles.content}>
                        <div className="home-banner">
                            <h2 className= "pt-3">Welcome to the Learn Web</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ex nihil obcaecati
                                repudiandae vero! Aliquid ex facilis, illo minima quidem reiciendis? Dignissimos impedit, laudantium natus quis sunt suscipit vitae voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ex nihil obcaecati
                                impedit, laudantium natus quis sunt suscipit vitae voluptas Aliquid ex facilis, illo minima quidem reiciendis? Dignissimos impedit, laudantium natus quis sunt suscipit vitae voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ex nihil obcaecati
                                impedit, laudantium natus quis sunt suscipit vitae voluptas. Aliquid ex facilis, illo minima quidem reiciendis? Dignissimos impedit, laudantium natus quis sunt suscipit vitae voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ex nihil obcaecati
                                impedit, laudantium natus quis sunt suscipit vitae voluptas
                            </p>
                            <Button variant="danger">Learn More</Button>
                        </div>
                    </div>
            </div>

            <div className="container pt-4">
                <h2 className="text-center">LATEST POSTS</h2>
            </div>

        </div>
    );


}
export default Home;