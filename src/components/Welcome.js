import * as React from 'react';

type Props = {
    name: string
};

export default function Welcome({name}: Props){
    console.debug('Rendering Welcome');
    return (
        <span>Welcome, hep {name}!</span>
    );
}

