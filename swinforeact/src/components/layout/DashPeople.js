import React, { Component } from "react";
import axios from "axios";

import CardPeople from "./cards/CardPeople";
import DeathStar from "../Images/DeathStar.png";
import "../../App.css";
import { Animated } from "react-animated-css";

export default class DashPeople extends Component {
  state = {
    url: "https://swapi.co/api/people/",
    people: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ people: res.data["results"] });
    console.log(this.state.people.length);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.people ? (
          <div className="row">
            {this.state.people.map(people => (
              <CardPeople key={people.name} name={people.name} />
            ))}
          </div>
        ) : (
          <div>
            <Animated AnimationIn="swing">
              <img alt="" src={DeathStar} />
            </Animated>
            <div>
              <h1>Loading...</h1>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
