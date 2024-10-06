import Admin from "./pages/Admin";
import {ADMIN_ROUTE, FEED_ROUTE, LOGIN_ROUTE, POST_ROUTE, PROFILE_ROUTE} from "./utils/constants";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Feed from "./pages/Feed";
import PostPage from "./pages/PostPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: FEED_ROUTE,
        Component: Feed
    },
    {
        path: POST_ROUTE + "/:id",
        Component: PostPage
    }
]