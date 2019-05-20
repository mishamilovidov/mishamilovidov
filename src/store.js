import { applyMiddleware, createStore, combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { reducer as formReducer } from 'redux-form';
import { BlogPostListReducer } from './reducers/BlogPostListReducer';
import { BlogPostReducer } from './reducers/BlogPostReducer';
import thunk from 'redux-thunk';
import 'firebase/firestore';
import 'firebase/auth';

const reducer = combineReducers({
  ...BlogPostListReducer,
  ...BlogPostReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: formReducer
});

const initialState = {}

export default () => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  )
};
