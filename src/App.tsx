import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import LandingPage from './scenes/LandingPage';
import ProductsList from './scenes/ProductsList';
import { LANDING_PAGE, getProductsCategoryRoute } from './routes';
import TopBar from './components/TopBar';
import store from './store';

import 'antd/dist/antd.css';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <TopBar />
                <Switch>
                    <Route exact path={LANDING_PAGE}>
                        <LandingPage />
                    </Route>
                    <Route path={getProductsCategoryRoute()}>
                        <ProductsList />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
