// import React from 'react'
// import PropTypes from 'prop-types'

// export default function TodoHeader(props) {
//     console.log(props)
//     return (
//         <div>
            
//             <h1> {props.children}</h1>
//             <h3>{props.desc}</h3>
            
//         </div>
//     )
// }

// TodoHeader.propTypes = {
//     desc: PropTypes.string.isRequired
// }
// TodoHeader.defaultProps = {
//     desc:"如果还有明天"
// }

import React , {useState , useEffect} from "react"
import {render} from "react-dom" 

export default function Counter() {
    const [count, setCount] = useState (0)
    useEffect (() => {
        document.title = "当前数量为${count}"
    })
    return (
        <div>
            <p>当前的数量为{count}</p>
            <button onClick = {() => {setCount (count-1)}}>-</button>
            <span>{count}</span>
            <button onClick = {() => {setCount (count+1)}}>+</button>
        </div>
    )

}

