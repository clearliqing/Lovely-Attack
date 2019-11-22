import React, { Component } from 'react'
import BlogItems from "./BlogItem"
import {connect }from "react-redux"
import {fetchBlogList} from "../../actions/blog"

 class BLogList extends Component {
     componentDidMount() {
         this.props.fetchBlogList()
     }
     
    
    render() {
        const {
            list,
            isLoading,
            errMsg
        } = this.props
        const hasError = Boolean(errMsg)

        return (
            isLoading ? <div>loading...</div> : (hasError ? <div>{errMsg}</div> :<ul>
                {
                    list.map(item => {
                        return (
                            <BlogItems key= {item.id} {...item}/>
                        )  
                    })
                }
                
            </ul> )
            
        )
    }
}

// store.getState()获取的是对象 store.getState().blog获取的是reducer中return的数据
// 每一步代表的是什么，控制台输出的注意
const mapState= (state) => {
     // 将return内容，注入到组件的props中 是什么 是什么
    return {
        list:state.blog.list,
        isLoading:state.blog.isLoading,
        errMsg:state.blog.errMsg

    }
}
export default connect(mapState,{fetchBlogList})( BLogList)