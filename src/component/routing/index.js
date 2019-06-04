import React from "react";
import { Route,Switch } from "react-router-dom";
import { Home, About, Topics, NotFound } from '../../view';


function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Home" component={Home} />
                <Route path="/about" component={About} />
                <Route path='/topics' component={Topics} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;