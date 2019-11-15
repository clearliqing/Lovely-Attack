import React, { Component } from 'react'

// 方法中返回一类个组件,抛出方法
 const withCopyright = (YourComponent) => {
     return class withCopyright extends Component {
        render() {
            console.log(this.props)
            return (
                <>
                    <YourComponent {...this.props}/>
                    <div>&copy; 2019 &emsp;千锋教育</div>
                </>
            )
        }
    }
 }

export default withCopyright

