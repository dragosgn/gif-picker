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
    setTimeout(this.changeGif, 4000);
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
      <Root>
        <Headline>{this.state.title}</Headline>
        <Gif>{this.state.content}</Gif>
      </Root>
    );
  }
}

export default App;
