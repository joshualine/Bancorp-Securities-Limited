import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import DailyReportPage from './pages/groupReportPages/DailyReportPage';
import WeeklyReportPage from './pages/groupReportPages/WeeklyReportPage';
import MonthlyReportPage from './pages/groupReportPages/MonthlyReportPage';
import ContactPage from './pages/ContactPage';
import DailyPriceListPage from './pages/singleReportPages/DailyPriceListPage';
import AdminWelcomePage from './pages/adminPages/AdminWelcomePage';
import PostSummaryPage from './pages/adminPages/PostSummaryPage';
import UploadReportsPage from './pages/adminPages/UploadReportsPage';
import LoginPage from './pages/adminPages/LoginPage';
import EditSummaryPage from './pages/adminPages/EditSummaryPage';
import AnnualReportPage from './pages/groupReportPages/AnnualReportPage';
import DailySummaryPage from './pages/singleReportPages/DailySummaryPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/daily_reports",
    element: <DailyReportPage />,
  },
  {
    path: "/weekly_reports",
    element: <WeeklyReportPage />,
  },
  {
    path: "/monthly_reports",
    element: <MonthlyReportPage />,
  },
  {
    path: "/annual_reports",
    element: <AnnualReportPage />,
  },

  {
    path: "/contact",
    element: <ContactPage />,
  },


  {
    path: "/daily_pricelists",
    element: <DailyPriceListPage />,
  },
  {
    path: "/daily_market_summary",
    element: <DailySummaryPage />,
  },

  {
    path: "/admin_board",
    element: <AdminWelcomePage />,
  },
  {
    path: "/post_summary",
    element: <PostSummaryPage />,
  },
  {
    path: "/edit_summary/:id",
    element: <EditSummaryPage />,
  },
  {
    path: "/upload_reports",
    element: <UploadReportsPage />,
  },
  {
    path: "/admin",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
