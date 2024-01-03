import { createBrowserRouter } from "react-router-dom";
import HomePage from "../modules/Home/pages";
import SignInPage from "../modules/Auth/pages/SignIn";
import SignUpPage from "../modules/Auth/pages/SignOut";
import RootLayout from "../components/layouts/root";
import ContactPage from "../modules/Contact/pages";
import DashboardLayout from "../components/layouts/dashboard";
import DashboardPage from "../modules/Dashboard/pages";

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/contact", element: <ContactPage /> },
			{ path: "/sign-in", element: <SignInPage /> },
			{ path: "/sign-up", element: <SignUpPage /> },
			{
				element: <DashboardLayout />,
				children: [{ path: "/dashboard", element: <DashboardPage /> }],
			},
		],
	},
]);
