import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Route } from "react-router-dom";
import Fullscreen from "react-full-screen";

import dino from "./gifs/dino.gif";
import gandalf from "./gifs/gandalf.gif";
import shooting from "./gifs/shooting.gif";
import shrug from "./gifs/shrug.gif";
import space from "./gifs/space.gif";

import { fadeIn } from "react-animations";

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
  animation: ${props => (props.out ? fadeOut : fadeIn)} 1s linear;
  transition: visibility 1s linear;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// const fadeIn = keyframes`
//   from {
//     transform: scale(.25);
//     opacity: 0;
//   }
//
//   to {
//     transform: scale(1);
//     opacity: 1;
//   }
// `;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;

const fader = keyframes`${fadeIn}`;

const StyledImg = styled.img`
  animation: 1s ${fader} linear;
  height: 400px;
`;

const Headline = styled.h1`
  color: white;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  animation: 1s ${fader} linear;
`;

const Button = styled.button`
  padding: 0.25rem;
  margin: 0.5rem;
  border-radius: 2px;
  border-color: transparent;
`;

const gifs = [
  {
    content: space,
    title: "When you write reusable code"
  },
  {
    content: shrug,
    title: "But it works on my local machine.."
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
    title: "Intern deploying to production"
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
                {/* <GifBox>
                  <Headline>{this.state.title}</Headline>
                  {this.state.content && <StyledImg src={this.state.content} />}
                </GifBox> */}
              </Root>
            )}
          />
        </Fullscreen>
      </div>
    );
  }
}

export default App;
