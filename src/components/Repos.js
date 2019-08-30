import React from 'react'
import UserList from "./UserList";

export default class Repos extends React.Component {
    componentDidMount() {
        console.debug(`Repos component did mount`)
    }

    componentWillUnmount() {
        console.debug(`Repos component will unmount`)
    }

    render() {
        console.debug(`Rendering Repos`);
        return (
            <div>Repos</div>
        )
    }
}