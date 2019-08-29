import React from 'react'
import {connect} from 'react-redux';
import Welcome from "./Welcome";
import TodoList from "./TodoList";
import {ApplicationState, Todo} from '../reducers';
import {toggleTodo} from '../actionTypes';


type Props = {
    todos: Todo[],
    toggleTodo: (number) => void
};

function Todos(props: Props) {
    return (
        <div>
            <Welcome name="The new todos page"/>
            <pre>{JSON.stringify(props.todos)}</pre>
            <TodoList todos={props.todos} onTodoClick={props.toggleTodo}/>
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
        toggleTodo: (index: number) => dispatch(toggleTodo(index))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Todos)