import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Fullscreen from "react-full-screen";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6

import "./app.css";

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

const Headline = styled.h1`
  color: white;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Gif = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.25rem;
  margin: 0.5rem;
  border-radius: 2px;
  border-color: transparent;
`;

const gifs = [
  {
    content: (
      <iframe
        title="13NUOwOLq0NJug"
        src="https://giphy.com/embed/13NUOwOLq0NJug"
        width="480"
        height="401"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    ),
    title: "But it worked on my local machine.."
  },
  {
    content: (
      <iframe
        title="nhjqWBnMfF888"
        src="https://giphy.com/embed/nhjqWBnMfF888"
        width="480"
        height="254"
        frameBorder="0"
        className="giphy-embed"
        title={Math.random()}
        allowFullScreen
      />
    ),
    title: "When you write reusable code"
  },
  {
    content: (
      <iframe
        title="V4sY8JCTxGyaI"
        src="https://giphy.com/embed/V4sY8JCTxGyaI"
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    ),
    title: "When you don't have time for strategic work"
  },
  {
    content: (
      <iframe
        title="8abAbOrQ9rvLG"
        src="https://giphy.com/embed/8abAbOrQ9rvLG"
        width="480"
        height="233"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    ),
    title: "Gandalf was actually more of a QA guy.."
  },
  {
    content: (
      <iframe
        title="l41YrdtfokTyKGFu8"
        src="https://giphy.com/embed/l41YrdtfokTyKGFu8"
        width="480"
        height="387"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    ),
    title: "Troubleshooting servers after a DEV deployment"
  },
  {
    content: (
      <iframe
        title="9umH7yTO8gLYY"
        src="https://giphy.com/embed/9umH7yTO8gLYY"
        width="480"
        height="339"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    ),
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
                  <ReactCSSTransitionGroup
                    transitionName="transition"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={true}
                    transitionLeave={true}
                  >
                    <Headline>{this.state.title}</Headline>
                    <Gif>{this.state.content}</Gif>
                    {this.state.isFull ? (
                      ""
                    ) : (
                      <Button onClick={this.goFull}>Switch Fullscreen</Button>
                    )}
                  </ReactCSSTransitionGroup>
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
