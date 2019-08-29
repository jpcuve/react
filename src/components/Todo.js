import React from 'react'

type Props = {
    onClick: (SyntheticInputEvent<HTMLButtonElement>) => void,
    completed: boolean,
    text: string
};

export default function Todo({onClick, completed, text}: Props) {
    return (
        <li
            onClick={onClick}
            style={
                {textDecoration: completed ? 'line-through' : 'none'}
            }
        >
            {text}
        </li>
    );
}