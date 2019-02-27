import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioDashboardPage from '../components/PortfolioDashboardPage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import PortfolioItem from '../components/PortfolioItem';

const AppRouter = () =>(
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path='/' component={PortfolioDashboardPage} exact={true} />
            <Route path='/portfolio' component={PortfolioPage} exact={true}/>
            <Route path='/portfolio/:id' component={PortfolioItem} />
            <Route path='/contact' component={ContactPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;