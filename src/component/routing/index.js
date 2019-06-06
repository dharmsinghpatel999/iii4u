import React from "react";
import { Route, Switch } from "react-router-dom";
import { About, Services, Products, Contacts, Blog, NewsEvents, NotFound } from '../../view';

const App = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/blog' component={Blog} />
            <Route path='/newsevents' component={NewsEvents} />
            <Route path='*' component={NotFound} />
        </Switch>
    );
}

export default App;