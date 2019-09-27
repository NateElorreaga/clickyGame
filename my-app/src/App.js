import React,{ Component } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';
import { Container, Row, Col } from './components/CardContainer';
import { Image } from './components/Image'

// import all images
import blackBerryKush from './Images/blackBerryKush.JPG'
import bubbaKush from './Images/bubbaKush.JPG'
import cheese from './Images/cheese.JPG'
import chocolope from './Images/chocolope.JPG'
import godsGift from './Images/godsGift.JPG'
import goldenGoat from './Images/goldenGoat.JPG'
import grapeApe from './Images/grapeApe.JPG'
import lemonHaze from './Images/lemonHaze.JPG'
import mauiWowie from './Images/mauiWowie.JPG'
import pineappleExpress from './Images/pineappleExpress.JPG'
import purpleUrkle from './Images/purpleUrkle.JPG'
import trainWreck from './Images/trainWreck.JPG'


class App extends Component {
  state = {
    score: 0,
    totalScore: 12,
    images: [blackBerryKush,bubbaKush,cheese,chocolope,godsGift,goldenGoat,grapeApe,lemonHaze,mauiWowie,pineappleExpress,purpleUrkle,trainWreck]
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Container>
          <Row>
            <Col>
              {this.state.images.map((image) =>
                <Image
                  src={image}
                  onClick={this.handleClick} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
