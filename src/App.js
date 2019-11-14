import React, { Component, Fragment } from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like

}
    from "./components"
import { getTodos } from "./services"

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            title: "待办事项列表",
            desc: "今日事，今日毕",

            todos: [],
            isLoading: false
        }
    }

    getDate = () => {
        this.setState({
            isLoading: true
        })

        getTodos()
            .then(resp => {
                if (resp.status === 200) {
                    this.setState({
                        todos: resp.data
                    })
                } else {
                    // 错误处理

                }
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.getDate()
    }

    addTodo = (todoTitle) => {
      
        this.setState ({
            todos: this.state.todos.concat ({
                id : Math.random (),
                title : todoTitle,
                completed : false
            })        
        })
    }

    onCompeletedChange = (id) => {
        this.setState((prevState) => {
            return {
                todos: prevState.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo

                })
            }
        })

    }

    

        render() {
            return (
                <Fragment>
                    <TodoHeader/>
                   
                 
                    <TodoInput addTodo={this.addTodo}/>

                    {this.state.isLoading ? <div>isLoading...</div> :
                    <TodoList 
                    todos={this.state.todos}
                    onCompeletedChange = {this.onCompeletedChange}
                    />}
                    <Like/>


                </Fragment>
            )
        }
    }

