import React from 'react'
// 函数式组件props从参数中传入
export default function BlogItem(props) {
    return (
        <li>
          {/* props 传入的是上级键值转换而来的对象 */}
            <h1>{props.title}</h1>
            <p>{props.body}</p>
           
        </li>
    )
}
