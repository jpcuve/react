import React from 'react'
import {connect} from 'react-redux';
import Welcome from "./Welcome";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import {ApplicationState, Todo} from '../reducers';
import {addTodo, toggleTodo} from '../actionTypes';


type Props = {
    todos: Todo[],
    toggleTodo: (number) => void,
    addTodo: (string) => void
};

function TodoControl(props: Props) {
    return (
        <div>
            <Welcome name="The new todo control"/>
            <pre>{JSON.stringify(props.todos)}</pre>
            <TodoList todos={props.todos} onTodoClick={props.toggleTodo}/>
            <TodoAdd onAddText={props.addTodo}/>
        </div>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (index: number) => dispatch(toggleTodo(index)),
        addTodo: (text: string) => dispatch(addTodo(text))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoControl)