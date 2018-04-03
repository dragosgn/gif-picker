import React, { Component } from "react";

import styled from "styled-components";

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
  }
];

const displayGif = gif => {
  for (gif in gifs) {
    return (
      <GifBox>
        <Headline>{gif.title}</Headline>
        <div>{gif.content}</div>
      </GifBox>
    );
  }
};

class App extends Component {
  changeGif() {
    this.setState({
      content: gifs[0].content,
      title: gifs[0].title
    });
  }

  render() {
    return <Root>{this.state.content}</Root>;
  }
}

export default App;
