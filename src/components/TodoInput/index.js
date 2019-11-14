import React, { Component,createRef } from 'react'
import PropTypes from "prop-types"

export default class TodoInput extends Component {
    static propsTypes = {
       btnText:PropTypes.string.isRequired
    }
    static defaultProps = {
        btnText:"添加TODO"
    }

    constructor(){
        super()
        this.state={
            inputValue:""
        }

        this.inputDom = createRef()
    }

    handleIputChange = (e) => {
        this.setState({
            inputValue : e.currentTarget.value
        }
        )

    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleAddClick()
        }
    }

    handleAddClick = () => {
        this.props.addTodo (this.state.inputValue)
        this.setState({
            inputValue : ""

        }, () => {
            this.inputDom.current.focus()
        })
    }
    render() {
        return (
            <div>
                <input
                value={this.state.inputValue}
                onChange={this.handleIputChange}
                ref = {this.inputDom}
                onKeyUp = {this.handleKeyUp}

                 /> <button onClick = {this.handleAddClick}>{this.props.btnText} </button>
            </div>
        )
    }
}
