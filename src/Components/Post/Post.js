import React, {Component} from 'react';
import "./Post.css"
import { Avatar } from '@material-ui/core';
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";


class Post extends Component {
    constructor(props) {
        super(props);
        this.state= { 
            commentList:[]
        }
    }

    componentDidMount() {
        this.getComments();
    }

    getComments=()=>{ //API backend
        let data = [
            {
                "username": "ASD",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "Comment1"
            },
            {
                "username": "ASD",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "Comment1"
            },
            {
                "username": "ASD",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "Comment1"
            },
        ];
        this.setState({commentList: data});
    }

    render() {
        return (
            <div className="post_container">
                {/* Header */}
                <div className="post_header"></div>
                    <Avatar className="post_image" src={this.state.profileImage} alt=""/>
                    <div className="post_username">{this.state.username}</div>
                {/* Image */}
                <div>
                    <img src={this.props.postImage} width="615px" alt="" />
                </div>

                {/* Analytics */}
                <div>
                    <div style={{"marginLeft":"10px"}}>
                        <img src={love} className="post_reactimage" alt="" />
                        <img src={comment} className="post_reactimage" alt="" />
                        <img src={share} className="post_reactimage" alt="" />
                    </div>
                    <div style={{"fontWeight":"bold","marginLeft":"20px"}}>
                        {this.props.likes} likes
                    </div>
                </div>

                {/* Comment section */}
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            <div className="post_comment">{item.username}: {item.description}</div>
                        ))
                    }
                <input text="text" className="post_commentbox" placeholder="Add a comment..." />
                </div>

            </div>
         );
    }
}

export default Post;