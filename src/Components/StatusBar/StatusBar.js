import React, {Component} from 'react';
import "./StatusBar.css"
import { Avatar } from '@material-ui/core';
import statusimg from "../../images/pp1.png";
import uploadimage from"../../images/statusadd.png"

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state= {
            statusList: []
         }
    }
    componentDidMount(){
        this.getData()
    }
    getData=()=>{
        let data=[
            {
            "username":"csaba_toth",
            "imageURL":"../../images/pp1.png"
        },
        {
            "username":"qew",
            "imageURL":"../../images/pp1.png"
        }
        ,
        {
            "username":"abcsting",
            "imageURL":"../../images/pp1.png"
        }
        ,
        {
            "username":"bv",
            "imageURL":"../../images/pp1.png"
        }
        ,
        {
            "username":"bv",
            "imageURL":"../../images/pp1.png"
        }
        ,
        {
            "username":"bv",
            "imageURL":"../../images/pp1.png"
        }
        ,
        {
            "username":"bv",
            "imageURL":"../../images/pp1.png"
        }
        ,
        {
            "username":"bv",
            "imageURL":"../../images/pp1.png"
        }
        ,
        {
            "username":"bv",
            "imageURL":"../../images/pp1.png"
        }
        
        ]
        this.setState({statusList: data});
    }

    render() {
        return (
            <div>
                <div className="statusbar_container">
                    <img src={uploadimage} className="statusbar_upload" width="55px" height="55px" alt=""/>
                    {
                        this.state.statusList.map((item,index)=>(
                            <div className="status">
                            <Avatar className="statusbar_status" src={statusimg} alt=""/>
                            <div className="statusbar_text">{item.username}</div>
                        </div>
                        ))
                    }
                </div>
            </div>
         );
    }
}

export default StatusBar;