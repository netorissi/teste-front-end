import React from 'react';
import { Switch, Route } from 'react-router-dom';

// ## --------- ROUTES --------- ## //
import * as routes from './names';

// ## --------- VIEWS --------- ## //
import Home from '../views/home';
import Detail from '../views/detail';
import NotFound404 from '../views/notFound404';

const Routes = () => {
	return(
        <Switch>
            <Route 
            path={routes.HOME} 
            exact 
            component={Home}
            />
            
            <Route 
            path={`${routes.VIDEO_DETAIL}/:videoId`} 
            exact 
            component={Detail}
            />

            <Route 
            path='*' 
            component={NotFound404} 
            />
        </Switch>
	)
}

export default Routes;