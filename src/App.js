import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Route } from "react-router-dom";
import Fullscreen from "react-full-screen";

import { fadeIn, fadeOut } from "react-animations";

import dino from "./gifs/dino.gif";
import gandalf from "./gifs/gandalf.gif";
import shooting from "./gifs/shooting.gif";
import shrug from "./gifs/shrug.gif";
import space from "./gifs/space.gif";

const Root = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  > span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

const GifBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const faderIn = keyframes`${fadeIn}`;

const faderOut = keyframes`${fadeOut}`;

const Headline = styled.h1`
  color: white;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${faderIn}, ${faderOut};
  animation-duration: 2s, 2s;
`;

const Gif = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: center;
  animation: ${faderIn}, ${faderOut} 3s linear 1;
  height: 400px;
  padding-bottom: 0.5rem;
`;

const Button = styled.button`
  padding: 0.25rem;
  margin: 0.5rem;
  border-radius: 2px;
  border-color: transparent;
`;

const gifs = [
  {
    content: shrug,
    title: "But it worked on my local machine.."
  },
  {
    content: space,
    title: "When you write reusable code"
  },
  {
    content: dino,
    title: "When you don't have time for strategic work"
  },
  {
    content: gandalf,
    title: "Gandalf was actually more of a QA guy.."
  },
  {
    content: shooting,
    title: "Intern hitting production"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      title: "",
      index: 0,
      isFull: false
    };

    this.goFull = this.goFull.bind(this);
    this.changeGif = this.changeGif.bind(this);
  }

  componentDidMount() {
    setInterval(this.changeGif, 6000);
  }

  goFull() {
    this.setState({ isFull: !this.state.isFull });
  }

  changeGif() {
    let index = this.state.index < gifs.length - 1 ? this.state.index + 1 : 0;
    this.setState({
      content: gifs[this.state.index].content,
      title: gifs[this.state.index].title,
      index: index
    });
  }

  render() {
    return (
      <div>
        <Fullscreen enabled={this.state.isFull}>
          <Route
            exact
            path={"/"}
            render={routerProps => (
              <Root routerProps={routerProps}>
                <GifBox>
                  <Headline>{this.state.title}</Headline>
                  <Gif>
                    <img src={this.state.content} height={400} />
                  </Gif>
                  {/* {this.state.isFull ? (
                    ""
                  ) : (
                    <Button onClick={this.goFull}>Switch Fullscreen</Button>
                  )} */}
                </GifBox>
              </Root>
            )}
          />
        </Fullscreen>
      </div>
    );
  }
}

export default App;
