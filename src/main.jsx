import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginScreen from './modules/Auth/LoginScreen.jsx';
import AuthContextProvider from './contexts/AuthContext.jsx';
import VerifyScreen from './modules/Auth/VerifyScreen.jsx';
import SignupScreen from './modules/Auth/SignupScreen';
// import Dashboard from './modules/Auth/Dashboard';
// import Analysis from './modules/Auth/Analysis';
import DashboardTemplate from './Components/Templates/DashboardTemplate.jsx'; 
import DashboardScreen from './modules/Dashboard/DashboardScreen.jsx';
import AnalyticsScreen from './modules/Analytics/AnalyticsScreen.jsx';
import OffersRequestsScreen from './modules/OffersRequests/OffersRequestsScreen.jsx';
import JobsScreen from './modules/Jobs/JobsScreen.jsx';
import MessagesScreen from './modules/Messages/MessagesScreen.jsx';
import HelpScreen from './modules/Help/HelpScreen.jsx';
import SettingsScreen from './modules/Settings/SettingsScreen.jsx';
import NotificationScreen from './modules/Notifications/NotificationScreen.jsx';
import NotificationList from './modules/Notifications/NotificationList.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardScreen />,
  },
  {
    path: "/login",
    element: (
      <AuthContextProvider>
        <LoginScreen />
      </AuthContextProvider>
    ),
  },
  {
    path: "/verify/:number",
    element: (
      <AuthContextProvider>
        <VerifyScreen />
      </AuthContextProvider>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthContextProvider>
        <SignupScreen />
      </AuthContextProvider>
    ),
  },
  {
    path: "/notification",
    element: <NotificationScreen />,
  },
  {
    path: '/notification/list',
    element: <NotificationList />
  },
  {
    path: "/offers-requests",
    element: <OffersRequestsScreen />,
  },
  {
    path: "/jobs",
    element: <JobsScreen />,
  },
  {
    path: "/messages",
    element: <MessagesScreen />,
  },
  {
    path: "/help",
    element: <HelpScreen />,
  },
  {
    path: "/settings",
    element: <SettingsScreen />,
  },
  {
    path: "*",
    element: <DashboardTemplate>
      <h1>Coming Soon!</h1>
    </DashboardTemplate>
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
