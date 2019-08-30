import React from 'react'
import {connect} from 'react-redux';
import Welcome from "./Welcome";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import {ApplicationState, Todo} from '../reducers';
import {addTodo, toggleTodo} from '../actions';


type Props = {
    todoList: Todo[],
    toggleTodo: (number) => void,
    addTodo: (string) => void
};

function TodoControl({todoList, toggleTodo, addTodo}: Props) {
    return (
        <div>
            <Welcome name="The new todo control"/>
            <pre>{JSON.stringify(todoList)}</pre>
            <TodoList todoList={todoList} onTodoClick={toggleTodo}/>
            <TodoAdd onAddText={addTodo}/>
        </div>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        todoList: state.todoList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (index: number) => dispatch(toggleTodo(index)),
        addTodo: (text: string) => dispatch(addTodo(text))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoControl)