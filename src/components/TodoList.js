import React from 'react'
import Todo from "./Todo";

type Props = {
    onTodoClick: (number) => void,
    todoList: {
        id: number,
        completed: boolean,
        text: string
    }[]
};

export default function TodoList({onTodoClick, todoList}: Props) {
    return (
        <ul>
            {todoList.map((todo, index) => (
                <Todo key={index} {...todo} onClick={() => onTodoClick(index)}/>
            ))}
        </ul>
    );
}