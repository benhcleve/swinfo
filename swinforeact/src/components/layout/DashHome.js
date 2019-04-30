import React, { Component } from "react";

import "../../App.css";
import CardHome from "./CardHome";
import LukeImg from "../Images/LukeImg.jpeg";
import Tattooine from "../Images/Tattooine.jpeg";
import Twilek from "../Images/Twilek.jpg";
import ReturnoftheJedi from "../Images/ReturnoftheJedi.jpeg";
import MilFalcon from "../Images/MilFalcon.jpg";
import ATAT from "../Images/ATAT.jpg";

export default class DashHome extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="row">
          <CardHome name="People" imageUrl={LukeImg} />
          <CardHome name="Species" imageUrl={Twilek} />
          <CardHome name="Films" imageUrl={ReturnoftheJedi} />

          <CardHome name="Planets" imageUrl={Tattooine} />
          <CardHome name="Vehicles" imageUrl={ATAT} />
          <CardHome name="Starships" imageUrl={MilFalcon} />
        </div>
      </div>
    );
  }
}
