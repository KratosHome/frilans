import React from 'react';
import {Route, Routes} from "react-router";
import { ProviderRouter } from './ProviderRouter';

export const AppRouter = () => {
    return (
        <Routes>
            {ProviderRouter.map((rote: any) => (
                <Route key={rote.path} path={rote.path} element={rote.component} />
            ))}
        </Routes>
    );
};
