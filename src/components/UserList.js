import React from 'react';
import type {ApplicationState, User} from "../reducers";
import {connect} from "react-redux";

type Props = {
    userList: User[]
}

class UserList extends React.Component<Props> {
    render(){
        return (
            <ul>
                {
                    this.props.userList.map(user => (
                        <li key={user.id.toString()}>{user.name}</li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => { return {
    userList: state.entity.userList
}};

export default connect(mapStateToProps)(UserList)