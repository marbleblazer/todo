import { Route, Routes } from 'react-router-dom';

import { Home } from 'pages/home';

import { Layout } from '../layout/Layout';

/** Routes */
export function Routing() {
    return (
        <Routes>
            <Route
                path='/'
                element={<Layout />}
            >
                <Route
                    index
                    element={<Home />}
                />
            </Route>
        </Routes>
    );
}
