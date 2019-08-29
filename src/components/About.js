import React from 'react'
import {Route, Switch} from 'react-router-dom';

type Props = {
    match: {
        url: string,
        params: {

        }
    }
};

export default function About({match}: Props) {
    console.debug(`URL: ${match.url}, parameters: ${JSON.stringify(match.params)}`);
    return (
        <div>
            <Switch>
                <Route exact path={match.url + "/"} render={() => (<div>About</div>)}/>
                <Route path={match.url + "/products"} render={() => (<div>Products</div>)}/>
                <Route path={match.url + "/contact-us"} render={() => (<div>Contact us</div>)}/>
                <Route render={() => (<div>No match</div>)}/>
            </Switch>
        </div>
    )
}