import React, {useContext} from 'react';
import {
    Navigate,
    Route, Routes,
} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {FEED_ROUTE} from "../utils/constants";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);

    return (
        <Routes>
            {user.isAuth === true && authRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component/>}/>
            ))}
            {publicRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component/>}/>
            ))}
            <Route path="*" element={<Navigate to={FEED_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;