import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import PostStore from "./store/PostStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
    <Context.Provider value={{
        user: new UserStore(), post: new PostStore(),
    }}>
        <App/>
    </Context.Provider>
</React.StrictMode>);

