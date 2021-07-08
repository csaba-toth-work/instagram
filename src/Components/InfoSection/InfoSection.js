import React, {Component} from 'react';
import "./InfoSection.css";
import { Avatar } from '@material-ui/core';
import imageSrc from "../../images/pp1.png"



class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
return (<div>
    <div className="info_container">
        <Avatar src={imageSrc} className="info_image"/>
        <div>
            <div>csaba_toth</div>
            <div>Desctiption</div>
        </div>
    </div>
</div>);
    }
}

export default InfoSection;