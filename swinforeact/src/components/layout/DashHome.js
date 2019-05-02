import React, { Component } from "react";

import "../../App";
import CardHome from "../layout/cards/CardHome";
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
          <CardHome name="People" imageUrl={LukeImg} linkUrl="/people" />
          <CardHome name="Species" imageUrl={Twilek} linkUrl="/species" />
          <CardHome name="Films" imageUrl={ReturnoftheJedi} linkUrl="/films" />
          <CardHome name="Planets" imageUrl={Tattooine} linkUrl="/planets" />
          <CardHome name="Vehicles" imageUrl={ATAT} linkUrl="/vehicles" />
          <CardHome
            name="Starships"
            imageUrl={MilFalcon}
            linkUrl="/starships"
          />
        </div>
      </div>
    );
  }
}
