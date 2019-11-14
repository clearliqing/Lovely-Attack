// import React from "react"
// import ReactDom from "react-dom"

// const App = (props) => {
//     return(
//         <div>
//             <h1 title={props.title}>最优框架react{props.title}</h1>
//             <p>欢迎来到{props.title}react</p>
//         </div>
//     )
// }

// ReactDom.render(
//     <App title="911"/>,
//     document.querySelector("#root")
// )


// import React, { Component } from "react"
// import { render } from "react-dom"
// import { read } from "fs"

// class App extends Component {
//     render() {
//        console.log(this.props)
//         return(
//             <div>
//                 <h1 title={this.props.title}>最优框架react</h1>
//                 <p>{this.props.title}欢迎来到react</p>
//             </div>
//             )
//         }   
          
// }

// render(
//     <App title="类组件"/>,
//     document.querySelector("#root")
// )


// import React, { Component } from "react"
// import { render } from "react-dom"
// import "./index.css"
// import classNames from "classnames"
// import styled from "styled-components"

// const Title = styled.h1`
// color:red
// `
// class App extends Component {
//     render () {
//         const style ={color:"red"}
//         return (
//             <div>
//                 <Title>元素的样式</Title>
//                 <ol>
//                     <li style={style}>使用style内联样式创建</li>
//                     <li className="text-red">使用class的方式，写成className</li>
//                     <li className={classNames("text-red","text-size")}>添加不同的classname，使用第三方包classnames</li>
//                     <li>style-components</li>
//                 </ol>
//             </div>
//         )
//     }
// }

// render (
//     <App/>,
//     document.querySelector("#root")
// )


// import React, { Component } from 'react'
// import {render} from "react-dom"

// import App from "./App"

// render(
//     <App />,
//     document.querySelector("#root")
// )

import React from 'react'
import { render } from 'react-dom'

import App from './App'

render(
  <App />,
  document.querySelector('#root')
)



