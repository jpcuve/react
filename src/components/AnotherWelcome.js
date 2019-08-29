import * as React from 'react';

type Props = {
    name: string
};

type State = {
    a: string
};

export default class AnotherWelcome extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            a: 'hahaha'
        }
    }

    render() {
        console.debug('Rendering AnotherWelcome');
        return (
            <span>Another Welcome, {this.state.a} {this.props.name}</span>
        )
    }
}
