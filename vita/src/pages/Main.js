import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import GroupPhoTO from './img/개인.png';
import qwe from './img/asd.png';

function Main() {
    return (
        <div style={{ margin: '15%', marginTop: '0%', backgroundColor: 'red', }}>
            <Carousel indicators indicatorStyle={{ backgroundColor: 'gray', width: '10px', height: '10px', borderRadius: '50%', margin: '0 5px', display: 'inline-block' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={GroupPhoTO}
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
            </Carousel>
        </div>
    );
}
export default Main;