import React from 'react'

type Props = {
    onAddText: (string) => void
}

type State = {
    text: string
}

export default class TodoAdd extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <span>
                <input type="text" value={this.state.text} onChange={(e) => {
                    this.setState({text: e.target.value});
                }}/>
                <button type="button" onClick={(e) => {
                    this.props.onAddText(this.state.text);
                    this.setState({text: ''});
                    e.stopPropagation();
                }}>+</button>
            </span>
        )
    }
}