import React, { PureComponent } from 'react'
const noop = () => {}

export default class TodoItem extends PureComponent {
    handleCheckboxChange = () => {
        const {
            id,
            onCompeletedChange = noop
        } = this.props
        onCompeletedChange (id)
    }
    render() {
        const {
            completed,
            title
        } = this.props
        return (
            <div>
                <input
                    checked = {completed}
                    onChange = {this.handleCheckboxChange}
                    type = "checkbox"

                />
                
                <span>{title} {completed? "完成":"未完成"}</span>
            </div>
        )
    }
}

// import React, { Component } from 'react'
// const noop = () => {}
// export default class TodoItem extends Component {
//   handleCheckboxChange = () => {
//     // this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)
//     const {
//       onCompeletedChange = noop,
//       id
//     } = this.props
//     onCompeletedChange(id)
//   }
//   render() {
//     const {
//       isCompleted,
//       title
//     } = this.props
//     return (
//       <li>
//         <input
//           checked={isCompleted}
//           onChange={this.handleCheckboxChange}
//           type="checkbox"
//         />
//         <span>{title} {isCompleted ? '已完成' : '未完成'}</span>
//       </li>
//     )
//   }
// }
