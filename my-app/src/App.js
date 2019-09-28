import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';
import { Container, Row, Col } from './components/CardContainer';
import { Image } from './components/Image'
import images from './images.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      totalScore: 0,
      clickedImages: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = id => {
    console.log('Clicked this ' + id);
    this.checkClicked(id);
    this.shuffle(images);
  }

  checkClicked = (id) => {
    this.setState(state => {
      const list = state.clickedImages.push(id);
      return { list };
    });

    console.log(this.state.clickedImages);
    this.setState({ score: this.state.score + 1 });
    for (var i = 0; i < this.state.clickedImages.length; i++) {
      if (id === this.state.clickedImages[i]) {
        if (this.state.score > this.state.totalScore) {
          this.setState({ totalScore: this.state.score });
        }
        this.setState({ clickedImages: [] });
        this.setState({ score: 0 });
      }
    }
  }

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  render() {
    return (
      <div className="App">
        <Navbar 
        score={this.state.score} 
        totalScore={this.state.totalScore}/>
        <Jumbotron />
        <Container>
          <Row>
            <Col>
              {images.map((image) =>
                <Image
                  key={image.id}
                  src={image.src}
                  id={image.id}
                  name={image.name}
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
