import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import GroupPhoTO from './img/개인.png';
import qwe from './img/asd.png';

function Main() {
    return (
        <div style={{ margin: '15%', marginTop: '3%' }}>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={qwe}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={qwe}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={qwe}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Main;