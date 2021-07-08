import React, { Component } from "react";
import "./Suggestions.css";
import { Avatar } from '@material-ui/core';
import imageSrc from '../../images/pp1.png'


class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="suggestions_container">
          <div className="suggestions_header">
            <div>Suggestions For You</div>
          </div>
          <div className="suggestions_body">
            <div className="suggestions_friends">
              <Avatar src={imageSrc} className="suggestions_image"/>
              <div className="suggestions_username">Friend 1</div>
            </div>
            <div className="suggestions_friends">
              <Avatar src={imageSrc} className="suggestions_image"/>
              <div className="suggestions_username">Friend 1</div>
            </div>
            <div className="suggestions_friends">
              <Avatar src={imageSrc} className="suggestions_image"/>
              <div className="suggestions_username">Friend 1</div>
            </div>
            <div className="suggestions_friends">
              <Avatar src={imageSrc} className="suggestions_image"/>
              <div className="suggestions_username">Friend 1</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;
