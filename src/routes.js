import Control from './pages/Control';
import Authorization from './pages/Authorization';
import {CONTROL_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from './utils/consts'

export const authRouter = [
    {
        path: CONTROL_ROUTE,
        Component: <Control/>
    },
]

export const publickRouter = [
    {
        path: LOGIN_ROUTE,
        Component: <Authorization/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Authorization/>
    }
]