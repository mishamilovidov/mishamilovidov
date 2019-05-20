import React from 'react';
import ReactDOM from 'react-dom';
import createReduxStore from './store';
import GAListener from './components/GAListener';
import firebase from 'firebase/app';
import ReactGA from 'react-ga';
import { config } from './services/firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { theme } from './services/theme';
import App from './scenes';

export const rrfConfig = {
  userProfile: 'users',
  // attachAuthIsReady: true,
  useFirestoreForProfile: true
}

// Initialize firebase instance
firebase.initializeApp(config);

// Initialize other services on firebase instance
firebase.auth();
firebase.firestore().settings({});

// Export authRef and provider
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

// Create redux store
const store = createReduxStore();

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const hostname = window.location.hostname;
const isNotLocal = (hostname !== 'localhost') && (hostname !== 'mishamilovidov.construo.us');

if (isNotLocal) ReactGA.initialize('UA-140378950-1');

// render react app
ReactDOM.render(
  <Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<MuiThemeProvider theme={theme}>
				<BrowserRouter>
					<LastLocationProvider>
						{
							isNotLocal
								? <GAListener><Route path='/' component={App} /></GAListener>
								: <Route path='/' component={App} />
						}
					</LastLocationProvider>
				</BrowserRouter>
			</MuiThemeProvider>
		</ReactReduxFirebaseProvider>
  </Provider>
  , document.getElementById('root'));

