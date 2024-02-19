import { configureStore,combineReducers  } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
});
const store = configureStore({  
    reducer: rootReducer,
    devTools: true   
});

export default store;