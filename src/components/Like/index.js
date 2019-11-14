import React, { Component } from 'react'

export default class index extends Component {
    constructor(){
        super()
        this.state={
            isLiked:true
        }
    }
    
    handleLikedClick = () => {
    // this.setState({
    //   isLiked: !this.state.isLiked
    // })
        this.setState((prevState) => {
            return{
                isLiked: !prevState.isLiked
            } 
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.handleLikedClick}>
                {
                    this.state.isLiked ? "喜欢❤️" : "讨厌🖤"
                }
                </span>
            </div>
        )
    }
}
