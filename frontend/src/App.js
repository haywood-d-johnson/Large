import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import BusinessMain from "./components/BusinessMain";
import BusinessDetail from "./components/BusinessDetail";
import NewBusinessForm from "./components/NewBusinessForm";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
                <Switch>
                    <Route path="/login">
                        <LoginFormPage />
                    </Route>
                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>
                    <Route exact path="/">
                        <BusinessMain />
                    </Route>
                    <Route exact path="/business/new">
                        <NewBusinessForm />
                    </Route>
                    <Route exact path="/business/:businessId">
                        <BusinessDetail />
                    </Route>
                </Switch>
            )}
        </>
    );
}

export default App;
