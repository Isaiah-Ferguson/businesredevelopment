import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {

    let ImageOne = require('../assets/GroupPicture1.jpg')
    let ImageTwo = require('../assets/TinaPunch.jpg')
    let ImageThree = require('../assets/GroupPicture2.jpg')
    let ImageFour = require('../assets/TinaArothMe.jpg')
    let ImageFive = require('../assets/AllieChristianSensei.jpg')

  return (
    <div>
    <Carousel>
    
      <Carousel.Item>
        <img className="d-block w-100 caraselIMG" style={{width: '100%', maxHeight: '100vh', backgroundPosition: 'center', objectFit: 'cover'}} src={ImageOne} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 caraselIMG" style={{width: '100%', maxHeight: '100vh', backgroundPosition: 'center', objectFit: 'cover'}} src={ImageTwo} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 caraselIMG" style={{width: '100%', maxHeight: '100vh', backgroundPosition: 'center', objectFit: 'cover'}} src={ImageThree} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 caraselIMG" style={{width: '100%', maxHeight: '100vh', backgroundPosition: 'center', objectFit: 'cover'}} src={ImageFour} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 caraselIMG" style={{width: '100%', maxHeight: '100vh', backgroundPosition: 'center', objectFit: 'cover'}} src={ImageFive} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;