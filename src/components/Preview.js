import React, { Component } from "react";
import axios from "axios";

import Card from "./Card";

// emoarji.com/preview/region-realm-character (us-kilrogg-xanar)
export class Preview extends Component {
  state = {
    cameraCapture: "http://via.placeholder.com/400x300",

    characterName: "Character Model",
    characterRealm: "",
    characterModel: "http://via.placeholder.com/400x300",
    charAppearance: ""
  };

  getCharacterModel = () => {
    const realm = "Kael'thas";
    const character = "Xanonline";
    const fields = "appearance";
    const render = "http://us.battle.net/static-render/us/";

    axios
      .get(
        `https://us.api.battle.net/wow/character/${realm}/${character}?fields=${fields}&locale=en_US&apikey=${
          process.env.REACT_APP_BATTLE_NET_API_KEY
        }`
      )
      .then(response => {     	
        this.setState({
          characterName: response.data.name,
          characterRealm: `@ ${response.data.realm}`,
          characterModel: `${render}${response.data.thumbnail}`,
          // charAppearance: response.data.appearance
        });
        // console.log(response.data);
      });
  };

  render() {
    const { cameraCapture, characterName, characterRealm, characterModel, charAppearance } = this.state;

    return (
      <div className="container">
        <div className="row">
        	<p className="center"><i className="fa fa-exclamation-triangle" /> This is a temporary preview. It will be deleted after 24 hours. Please log in to save it to your account.</p>
          
          <div className="col s12 m6">
            <Card
              title="Camera Capture"
              image={cameraCapture}
              info={""}
            />
          </div>
          <div className="col s12 m6">
            <Card
              title={<span>{characterName} <small>{characterRealm}</small></span>}
              //onClick={this.getCharacterModel}
              image={characterModel}
              info={charAppearance}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
