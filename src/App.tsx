import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LandingPage from './scenes/LandingPage';
import ProductsList from './scenes/ProductsList';
import { LANDING_PAGE, getProductsCategoryRoute } from './routes';
import TopBar from './components/TopBar';

import 'antd/dist/antd.css';
import { fetchData } from './utils/api';
import { setData, setIsLoading } from './scenes/ProductsList/store/actions';

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoading(true));
        fetchData().then((data) => {
            const parsedData = data.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {});
            dispatch(setData(parsedData));
            dispatch(setIsLoading(false));
        });
    }, [dispatch]);

    return (
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
    );
};

export default App;
