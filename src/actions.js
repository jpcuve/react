export type VisibilityFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';
export type ActionType = 'ADD_TODO' | 'TOGGLE_TODO' | 'SET_VISIBILITY_FILTER' |
    'REQUEST_CUSTOMERS' | 'RECEIVE_CUSTOMERS';

type Action = {
    type: ActionType,
    index?: number,
    text?: string,
    filter?: VisibilityFilter,
    data?: Object
}

export function addTodo(text: string): Action {
    return {type: 'ADD_TODO', text};
}

export function toggleTodo(index: number): Action {
    return {type: 'TOGGLE_TODO', index}
}

export function setVisibilityFilter(filter: VisibilityFilter): Action {
    return {type: 'SET_VISIBILITY_FILTER', filter}
}

export function requestCustomers(): Action {
    return {type: 'REQUEST_CUSTOMERS'}
}

export function receiveCustomers(json: Object): Action {
    return {type: 'RECEIVE_CUSTOMERS', 'data': json, receivedAt: Date.now()}
}

export function fetchCustomers(){
    return function(dispatch){
        dispatch(requestCustomers());
        return fetch(`/data/customers.json`)
            .then(res => {console.log(res); return res.json()}, err => console.log(`Error: ${err}`))
            .then(json => dispatch(receiveCustomers(json)));
    }
}
