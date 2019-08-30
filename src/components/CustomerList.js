import React from 'react';
import type {ApplicationState, Customer} from "../reducers";
import {connect} from "react-redux";

type Props = {
    customerList: Customer[]
}

class CustomerList extends React.Component<Props> {
    render(){
        return (
            <ul>
                {
                    this.props.customerList.map(user => (
                        <li key={user.id.toString()}>{user.name}</li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => { return {
    customerList: state.entity.customerList
}};

export default connect(mapStateToProps)(CustomerList)