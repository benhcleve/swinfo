import React, { Component } from "react";
import styled from "styled-components";
import "../../App.css";

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 10px
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.5);
  }
`;

export default class CardHome extends Component {
  state = {
    name: "",
    imageUrl: ""
  };
  componentDidMount() {
    const { name, imageUrl } = this.props;

    this.setState({ name, imageUrl });
  }
  render() {
    return (
      <div className="col-md-4 col-sm-6 md-5">
        <Card className="card">
          <img
            src={this.state.imageUrl}
            className="card-img-top"
            alt="Loading..."
          />
          <h5 className="text-center">{this.state.name}</h5>
        </Card>
      </div>
    );
  }
}
