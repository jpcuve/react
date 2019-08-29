import React from 'react'
import Todo from "./Todo";

type Props = {
    onTodoClick: (number) => void,
    todos: {
        id: number,
        completed: boolean,
        text: string
    }[]
};

export default function TodoList({onTodoClick, todos}: Props) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <Todo key={index} {...todo} onClick={() => onTodoClick(index)}/>
            ))}
        </ul>
    );
}