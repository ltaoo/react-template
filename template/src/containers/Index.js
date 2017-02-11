import React, { Component } from 'react' 
import { Link } from 'react-router'

import {observer} from 'mobx-react'

// action
import {fetchBookList} from '../actions'
// container components
import Book from './Book'

@observer
export default class Index extends Component {
  	render() {
        if(this.props.todoList.length === 0) {
            return null
        }
	    return <div>
            <ul>
                {this.props.todoList.todos.map((todo, index) =>
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>  	
    }
}

// 一个纯组件
const TodoView = observer(({todo}) =>
    <li key = {todo.id}>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)
