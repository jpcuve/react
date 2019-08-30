import React from 'react';
import type {ApplicationState, Customer} from "../reducers";
import {connect} from "react-redux";

type Props = {
    isFetching: boolean,
    items: Customer[]
}

function CustomerList({isFetching, items}: Props) {
    if (isFetching){
        return (
            <span>Spinning</span>
        )
    } else {
        return (
            <ul>
                {
                    items.map(user => (
                        <li key={user.id.toString()}>{user.name}</li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => { return {
    items: state.customerList.items,
    fetching: state.customerList.isFetching
}};

export default connect(mapStateToProps)(CustomerList)