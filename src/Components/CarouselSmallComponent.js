import Carousel from 'react-bootstrap/Carousel';

export default function CarouselSmallComponent() {


    let ImageOne = require('../assets/CouchIsaiah.jpg')
    let ImageTwo = require('../assets/AllieWinston.jpg')
    let ImageThree = require('../assets/Sammy1.jpg')

  return (
    <div className='CarouselDiv'>
    <Carousel>
      <Carousel.Item >
        <img className="d-block w-60 caraselIMG2 " src={ImageOne} alt="First slide"/>
        <Carousel.Caption >
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-60 caraselIMG2" src={ImageTwo} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-60 caraselIMG2" src={ImageThree} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
