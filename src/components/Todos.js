import React from 'react'
import Welcome from "./Welcome";
import TodoList from "./TodoList";
import {store} from '../index'

export default function Todos() {
    const state: State = store.getState();

    return (
        <div>
            <Welcome name="The new todos page"/>
            <pre>{JSON.stringify(state)}</pre>
            <TodoList todos={state.todos} onTodoClick={(index: number) => console.log(`Todo is clicked: ${index}`)}/>
        </div>
    )
}