
import React from 'react';
// eslint-disable-next-line
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import './App.css';
import Amplify  from 'aws-amplify';
// eslint-disable-next-line
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import AimlClass from './Component/Aiml';
import awsconfig from './aws-exports';
//import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

Amplify.configure(awsconfig);
//Amplify.addPluggable(new AmazonAIPredictionsProvider());


const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);
   

  return authState === AuthState.SignedIn && user ? (
      <div className="App">
	<BrowserRouter>  
	  <Switch>  
            <Route exact path='/' component={AimlClass} />
	  </Switch>  
	</BrowserRouter>  
	<div>Hello, {user.username}</div>
        <AmplifySignOut />
      </div>
    ) : (
      <AmplifyAuthenticator />
  );
}

export default AuthStateApp;
