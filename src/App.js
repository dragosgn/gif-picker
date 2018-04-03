import React, { Component } from "react";

import styled from "styled-components";
import { Route } from "react-router-dom";

const Root = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
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

const GifBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const gifs = [
  {
    content: (
      <iframe
        title="https://giphy.com/embed/13NUOwOLq0NJug"
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
        title="https://giphy.com/embed/nhjqWBnMfF888"
        src="https://giphy.com/embed/nhjqWBnMfF888"
        width="480"
        height="254"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    ),
    title: "When you write reusable code"
  },
  {
    content: (
      <iframe
        src="https://giphy.com/embed/V4sY8JCTxGyaI"
        width="480"
        height="270"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      />
    ),
    title: "When you don't have time for strategic work"
  },
  {
    content: (
      <iframe
        src="https://giphy.com/embed/8abAbOrQ9rvLG"
        width="480"
        height="233"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      />
    ),
    title: "Gandalf was actually more of a QA guy.."
  },
  {
    content: (
      <iframe
        src="https://giphy.com/embed/l41YrdtfokTyKGFu8"
        width="480"
        height="387"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      />
    ),
    title: "Troubleshooting servers after a DEV deployment"
  },
  {
    content: (
      <iframe
        src="https://giphy.com/embed/9umH7yTO8gLYY"
        width="480"
        height="339"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      />
    ),
    title: "Intern hitting production"
  }
];

const Gif = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      title: "",
      index: 0
    };

    this.changeGif = this.changeGif.bind(this);
  }

  componentDidMount() {
    this.changeGif();
  }

  componentDidUpdate() {
    setTimeout(this.changeGif, 6000);
  }

  changeGif() {
    let index = this.state.index < gifs.length - 1 ? this.state.index + 1 : 0;
    console.log(index);
    this.setState({
      content: gifs[this.state.index].content,
      title: gifs[this.state.index].title,
      index: index
    });
  }

  render() {
    return (
      <div>
        {" "}
        <Route
          exact
          path={"/"}
          render={routerProps => (
            <Root routerProps={routerProps}>
              <Headline>{this.state.title}</Headline>
              <Gif>{this.state.content}</Gif>
            </Root>
          )}
        />
      </div>
    );
  }
}

export default App;
