import React from 'react';

type Props = {
    children: any[],
    active: boolean,
    onClick: () => void
}

export default function ActiveLink({children, active, onClick}: Props) {
    if (active) {
        return (<span>{children}</span>);
    }
    return (
        <a
            href=""
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >{children}</a>
    );
}