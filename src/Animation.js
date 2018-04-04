import React from "react";

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.state = {
      show: true,
      style: {
        fontSize: 60,
        opacity: 0,
        transition: "all 22 ease"
      }
    };
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.mounted) return this.unMountStyle();
    this.setState({
      show: true
    });
    setTimeout(this.mountStyle, 10);
  }

  unMountStyle() {}
}
