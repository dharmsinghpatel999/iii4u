import React from "react";
import { Route, Switch } from "react-router-dom";
import { About, Services, Products, NewsEvents, Documents, Comments, NotFound, Home } from '../../view';


const App = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={Home} />
            {/* <Route exact={true} path="/" component={About} />
            <Route exact path="/about" component={About} /> */}
            <Route exact path="/home" component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/documents' component={Documents} />
            <Route path='/newsevents' component={NewsEvents} />
            <Route path='/Comments' component={Comments} />
            <Route path='*' component={NotFound} />
        </Switch>
    );
}

export default App;