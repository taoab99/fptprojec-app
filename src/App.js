import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import firebase from 'firebase';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
  Redirect
} from "react-router-dom";
import './App.css';
import RootMenu from './component/menu/RootMenu';
import { config } from './firebase/firebaseConfigure';
import { RouteComponent } from './router/Route';
import { singinUser } from './app/SliceReducer/UserLoginSlice';
import Footer from './Footer/Footer';


firebase.initializeApp(config);

function App() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const name = user.displayName || user.email;
        const actions = singinUser(name);
        dispatch(actions);
        const token = await user.getIdToken();
        localStorage.setItem("firebaseToken", JSON.stringify(token));
      }
      else {
        localStorage.setItem("firebaseToken", null);
      }
    })
    return () => {
      unregisterAuthObserver()
    }
  }, [user])
  return (
    <Router>
      <div className="App">
        <RootMenu />
        <div className="sestion">
          <Switch>
            {/* <Redirect from="/" to="/" /> */}
            {
              RouteComponent.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    component={route.main}
                    exact={route.exact}
                  />
                )
              })
            }
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
