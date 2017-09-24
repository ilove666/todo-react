import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import DevTools from '../containers/DevTools';
import RootReducers from '../reducers/RootReducers';

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(RootReducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers/RootReducers', () =>
      store.replaceReducer(require('../reducers/RootReducers').default)
    );
  }

  return store;
}
