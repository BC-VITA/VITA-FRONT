import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import backGround from '../img/acs.jpg';
import GroupPhoTO from './img/개인.png';
import qwe from './img/asd.png';

function Main() {
  return (
    // <div style={{ margin: '15%', marginTop: '3%' }}>
    //     <Carousel variant="dark">
    //         <Carousel.Item>
    //             <img
    //                 className="d-block w-100"
    //                 src={qwe}
    //                 alt="First slide"
    //             />
    //         </Carousel.Item>
    //         <Carousel.Item>
    //             <img
    //                 className="d-block w-100"
    //                 src={qwe}
    //                 alt="Second slide"
    //             />
    //         </Carousel.Item>
    //         <Carousel.Item>
    //             <img
    //                 className="d-block w-100"
    //                 src={qwe}
    //                 alt="Third slide"
    //             />
    //         </Carousel.Item>
    //     </Carousel>
    // </div>
    <styleDiv>
      <Carousel style={{ marginBottom: '50px' }}>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={backGround} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={backGround} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={backGround} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <styleDonation>
        <styleDiv1>
          <styleDiv2>
            <div>한부모가정 급격증가</div>
            <div>성금 모집현황</div>
            <div>봉사시간 포인트로 기부하는 시스템</div>
          </styleDiv2>
          <styleImg>
            <img className="d-block w-100" src={backGround} alt="First slide" />
          </styleImg>
          <styleDiv3>
            <div>누적 포인트 : 32,400,100원</div>
            <styleDiv4>
              <button>자세히 보기</button>
              <button>기부하러 가기</button>
              <button>봉사하러 가기</button>
            </styleDiv4>
          </styleDiv3>
        </styleDiv1>
      </styleDonation>
    </styleDiv>
  );
}
export default Main;
