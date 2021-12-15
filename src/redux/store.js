import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import logger from "./middleware/logger";
import monitorReducerEnhancer from "./middleware/enhancer";
import todoReducer from "./todoSlice";

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
    middleware: [logger, ...getDefaultMiddleware()],
    enhancers: [monitorReducerEnhancer],
  });
  //   const middlewares = [logger];
  //   const middlewareEnhancers = applyMiddleware(...middlewares);
  //   const store = createStore(todoReducer, null, composeEnhancers);
  //   console.log(middlewareEnhancers);
  //   const composeEnhancers = composeWithDevTools(...enhancers);
  //   const enhancers = [middlewareEnhancers, monitorReducerEnhancer];
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./todoSlice", () => store.replaceReducer(todoReducer));
  }
  return store;
}
