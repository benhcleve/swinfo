import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import "../../../App";

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px rgba(0, 0, 0, 0.24);
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    margin: 10px
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.5);
    }
  `;
  
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  `;

export default class CardPeople extends Component {
    state = {
        name: "",
    }

    componentDidMount() {
        const {name} = this.props

        this.setState({name})
    }
  render() {
    return (
          <div className="col-md-3 col-sm-6 md-5">
        <Card className="card">
        <h5 className="card-header">{this.state.name}</h5></Card>
      </div>
    )
  }
}
