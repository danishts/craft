// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Layout

// // Pages
// import Dashboard from "./pages/Dashboard/Dashboard";
// import UpholsteryQuotes from "./pages/UpholsteryQuotes/UpholsteryQuotes";
// import QuoteDetails from "./pages/UpholsteryQuotes/QuoteDetails";

// import PillowOrders from "./pages/PillowOrders/PillowOrders";
// import OrderDetails from "./pages/PillowOrders/OrderDetails";

// import Bookings from "./pages/Bookings/Bookings";


// import FabricManagement from "./pages/FabricManagement/FabricManagement";
// import FabricDetails from "./pages/FabricManagement/FabricDetails";

// import OrderTracker from "./pages/OrderTracker/OrderTracker";

// import MainLayout from "./components/layout/mainlayout";
// import BookingDetails from "./pages/Bookings/BookingsDetails";
// import OrderTrackerDetails from "./pages/OrderTracker/TrackDetails";

// function App() {
//   return (
//     <Router>
//       <MainLayout>
//         <Routes>
//           {/* Dashboard */}
//           <Route path="/" element={<Dashboard />} />

//           {/* Upholstery Quotes */}
//           <Route path="/upholstery-quotes" element={<UpholsteryQuotes />} />
//           <Route path="/upholstery-quotes/details" element={<QuoteDetails />} />

//           {/* Pillow Orders */}
//           <Route path="/pillow-orders" element={<PillowOrders />} />
//           <Route path="/pillow-orders/details" element={<OrderDetails />} />

//           {/* Bookings */}
//           <Route path="/bookings" element={<Bookings />} />
//           <Route path="/bookings/details" element={<BookingDetails />} />

//           {/* Fabric Management */}
//           <Route path="/fabric-management" element={<FabricManagement />} />
//           <Route
//             path="/fabric-management/details"
//             element={<FabricDetails />}
//           />

//           {/* Order Tracker */}
//           <Route path="/order-tracker" element={<OrderTracker />} />
//           <Route
//             path="/order-tracker/details"
//             element={<OrderTrackerDetails
//             />}
//           />
//         </Routes>
//       </MainLayout>
//     </Router>
//   );
// }

// export default App;

































// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Layout
// import MainLayout from "./components/layout/mainlayout";

// // Pages
// import Dashboard from "./pages/Dashboard/Dashboard";

// // Upholstery Quotes
// import UpholsteryQuotes from "./pages/UpholsteryQuotes/UpholsteryQuotes";
// import QuoteDetails from "./pages/UpholsteryQuotes/QuoteDetails";

// // Pillow Orders
// import PillowOrders from "./pages/PillowOrders/PillowOrders";
// import OrderDetails from "./pages/PillowOrders/OrderDetails";

// // Bookings
// import Bookings from "./pages/Bookings/Bookings";
// import BookingDetails from "./pages/Bookings/BookingsDetails";

// // Fabric Management
// import FabricManagement from "./pages/FabricManagement/FabricManagement";
// import FabricDetails from "./pages/FabricManagement/FabricDetails";

// // Order Tracker
// import OrderTracker from "./pages/OrderTracker/OrderTracker";
// import OrderTrackerDetails from "./pages/OrderTracker/TrackDetails";

// function App() {
//   return (
//     <Router>
//       <MainLayout>
//         <Routes>
//           {/* Dashboard */}
//           <Route path="/" element={<Dashboard />} />

//           {/* Upholstery Quotes */}
//           <Route path="/upholstery-quotes" element={<UpholsteryQuotes />} />
//           <Route path="/upholstery-quotes/details" element={<QuoteDetails />} />

//           {/* Pillow Orders */}
//           <Route path="/pillow-orders" element={<PillowOrders />} />
//           <Route path="/pillow-orders/details" element={<OrderDetails />} />

//           {/* Bookings */}
//           <Route path="/bookings" element={<Bookings />} />
//           <Route path="/bookings/details" element={<BookingDetails />} />

//           {/* Fabric Management */}
//           <Route path="/fabric-management" element={<FabricManagement />} />
//           <Route
//             path="/fabric-management/details"
//             element={<FabricDetails />}
//           />

//           {/* Order Tracker */}
//           <Route path="/order-tracker" element={<OrderTracker />} />
//           <Route
//             path="/order-tracker/details"
//             element={<OrderTrackerDetails />}
//           />
//         </Routes>
//       </MainLayout>
//     </Router>
//   );
// }

// export default App;






























// login add ha is main

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Layout
// import MainLayout from "./components/layout/mainlayout";

// // Auth Pages
// import Login from "./pages/Auth/Login";

// // Pages
// import Dashboard from "./pages/Dashboard/Dashboard";

// // Upholstery Quotes
// import UpholsteryQuotes from "./pages/UpholsteryQuotes/UpholsteryQuotes";
// import QuoteDetails from "./pages/UpholsteryQuotes/QuoteDetails";

// // Pillow Orders
// import PillowOrders from "./pages/PillowOrders/PillowOrders";
// import OrderDetails from "./pages/PillowOrders/OrderDetails";

// // Bookings
// import Bookings from "./pages/Bookings/Bookings";
// import BookingDetails from "./pages/Bookings/BookingsDetails";

// // Fabric Management
// import FabricManagement from "./pages/FabricManagement/FabricManagement";
// import FabricDetails from "./pages/FabricManagement/FabricDetails";

// // Order Tracker
// import OrderTracker from "./pages/OrderTracker/OrderTracker";
// import OrderTrackerDetails from "./pages/OrderTracker/TrackDetails";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Route */}
//         <Route path="/login" element={<Login />} />

//         {/* Private Routes with MainLayout */}
//         <Route
//           path="/*"
//           element={
//             <MainLayout>
//               <Routes>
//                 {/* Dashboard */}
//                 <Route path="/" element={<Dashboard />} />

//                 {/* Upholstery Quotes */}
//                 <Route
//                   path="/upholstery-quotes"
//                   element={<UpholsteryQuotes />}
//                 />
//                 <Route
//                   path="/upholstery-quotes/details"
//                   element={<QuoteDetails />}
//                 />

//                 {/* Pillow Orders */}
//                 <Route path="/pillow-orders" element={<PillowOrders />} />
//                 <Route
//                   path="/pillow-orders/details"
//                   element={<OrderDetails />}
//                 />

//                 {/* Bookings */}
//                 <Route path="/bookings" element={<Bookings />} />
//                 <Route path="/bookings/details" element={<BookingDetails />} />

//                 {/* Fabric Management */}
//                 <Route
//                   path="/fabric-management"
//                   element={<FabricManagement />}
//                 />
//                 <Route
//                   path="/fabric-management/details"
//                   element={<FabricDetails />}
//                 />

//                 {/* Order Tracker */}
//                 <Route path="/order-tracker" element={<OrderTracker />} />
//                 <Route
//                   path="/order-tracker/details"
//                   element={<OrderTrackerDetails />}
//                 />
//               </Routes>
//             </MainLayout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




//login/ signup add ha


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Layout
// import MainLayout from "./components/layout/mainlayout";

// // Auth Pages
// import Login from "./pages/Auth/Login";
// import Signup from "./pages/Auth/Signup"; // Signup import kiya

// // Pages
// import Dashboard from "./pages/Dashboard/Dashboard";

// // Upholstery Quotes
// import UpholsteryQuotes from "./pages/UpholsteryQuotes/UpholsteryQuotes";
// import QuoteDetails from "./pages/UpholsteryQuotes/QuoteDetails";

// // Pillow Orders
// import PillowOrders from "./pages/PillowOrders/PillowOrders";
// import OrderDetails from "./pages/PillowOrders/OrderDetails";

// // Bookings
// import Bookings from "./pages/Bookings/Bookings";
// import BookingDetails from "./pages/Bookings/BookingsDetails";

// // Fabric Management
// import FabricManagement from "./pages/FabricManagement/FabricManagement";
// import FabricDetails from "./pages/FabricManagement/FabricDetails";

// // Order Tracker
// import OrderTracker from "./pages/OrderTracker/OrderTracker";
// import OrderTrackerDetails from "./pages/OrderTracker/TrackDetails";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Private Routes with MainLayout */}
//         <Route
//           path="/*"
//           element={
//             <MainLayout>
//               <Routes>
//                 {/* Dashboard */}
//                 <Route path="/" element={<Dashboard />} />

//                 {/* Upholstery Quotes */}
//                 <Route
//                   path="/upholstery-quotes"
//                   element={<UpholsteryQuotes />}
//                 />
//                 <Route
//                   path="/upholstery-quotes/details"
//                   element={<QuoteDetails />}
//                 />

//                 {/* Pillow Orders */}
//                 <Route path="/pillow-orders" element={<PillowOrders />} />
//                 <Route
//                   path="/pillow-orders/details"
//                   element={<OrderDetails />}
//                 />

//                 {/* Bookings */}
//                 <Route path="/bookings" element={<Bookings />} />
//                 <Route path="/bookings/details" element={<BookingDetails />} />

//                 {/* Fabric Management */}
//                 <Route
//                   path="/fabric-management"
//                   element={<FabricManagement />}
//                 />
//                 <Route
//                   path="/fabric-management/details"
//                   element={<FabricDetails />}
//                 />

//                 {/* Order Tracker */}
//                 <Route path="/order-tracker" element={<OrderTracker />} />
//                 <Route
//                   path="/order-tracker/details"
//                   element={<OrderTrackerDetails />}
//                 />
//               </Routes>
//             </MainLayout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




















// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Layout
// import MainLayout from "./components/layout/mainlayout";

// // Auth Pages
// import Login from "./pages/Auth/Login";
// import Signup from "./pages/Auth/Signup"; // Signup import kiya

// // Pages
// import Dashboard from "./pages/Dashboard/Dashboard";

// // Upholstery Quotes
// import UpholsteryQuotes from "./pages/UpholsteryQuotes/UpholsteryQuotes";
// import QuoteDetails from "./pages/UpholsteryQuotes/QuoteDetails";

// // Pillow Orders
// import PillowOrders from "./pages/PillowOrders/PillowOrders";
// import OrderDetails from "./pages/PillowOrders/OrderDetails";

// // Bookings
// import Bookings from "./pages/Bookings/Bookings";
// import BookingDetails from "./pages/Bookings/BookingsDetails";

// // Fabric Management
// import FabricManagement from "./pages/FabricManagement/FabricManagement";
// import FabricDetails from "./pages/FabricManagement/FabricDetails";

// // Order Tracker
// import OrderTracker from "./pages/OrderTracker/OrderTracker";
// import OrderTrackerDetails from "./pages/OrderTracker/TrackDetails";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Private Routes with MainLayout */}
//         <Route
//           path="/*"
//           element={
//             <MainLayout>
//               <Routes>
//                 {/* Dashboard */}
//                 <Route path="/" element={<Dashboard />} />

//                 {/* Upholstery Quotes */}
//                 <Route
//                   path="/upholstery-quotes"
//                   element={<UpholsteryQuotes />}
//                 />
//                 <Route
//                   path="/upholstery-quotes/details"
//                   element={<QuoteDetails />}
//                 />

//                 {/* Pillow Orders */}
//                 <Route path="/pillow-orders" element={<PillowOrders />} />
//                 <Route
//                   path="/pillow-orders/details"
//                   element={<OrderDetails />}
//                 />

//                 {/* Bookings */}
//                 <Route path="/bookings" element={<Bookings />} />
//                 <Route path="/bookings/details" element={<BookingDetails />} />

//                 {/* Fabric Management */}
//                 <Route
//                   path="/fabric-management"
//                   element={<FabricManagement />}
//                 />
//                 <Route
//                   path="/fabric-management/details"
//                   element={<FabricDetails />}
//                 />

//                 {/* Order Tracker */}
//                 <Route path="/order-tracker" element={<OrderTracker />} />
//                 <Route
//                   path="/order-tracker/details"
//                   element={<OrderTrackerDetails />}
//                 />
//               </Routes>
//             </MainLayout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

































// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layout
import MainLayout from "./components/layout/mainlayout";

// Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";

import UpholsteryQuotes from "./pages/UpholsteryQuotes/UpholsteryQuotes";
import QuoteDetails from "./pages/UpholsteryQuotes/QuoteDetails";

import PillowOrders from "./pages/PillowOrders/PillowOrders";
import OrderDetails from "./pages/PillowOrders/OrderDetails";

import Bookings from "./pages/Bookings/Bookings";
import BookingDetails from "./pages/Bookings/BookingsDetails";

import FabricManagement from "./pages/FabricManagement/FabricManagement";
import FabricDetails from "./pages/FabricManagement/FabricDetails";

import OrderTracker from "./pages/OrderTracker/OrderTracker";
import OrderTrackerDetails from "./pages/OrderTracker/TrackDetails";
import ForgotPassword from "./pages/Auth/ForgotPassword";

// Simple Private Route component
function PrivateRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  // Simulate authentication state
  // In real app, use context or Redux or API call to check auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Redirect root / to /login or /dashboard based on auth */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Public Routes */}
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
        <Route path="/signup" element={<Signup />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Private Routes */}
        <Route
          path="/*"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <MainLayout>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />

                  <Route
                    path="upholstery-quotes"
                    element={<UpholsteryQuotes />}
                  />
                  <Route
                    path="upholstery-quotes/details"
                    element={<QuoteDetails />}
                  />

                  <Route path="pillow-orders" element={<PillowOrders />} />
                  <Route
                    path="pillow-orders/details"
                    element={<OrderDetails />}
                  />

                  <Route path="bookings" element={<Bookings />} />
                  <Route path="bookings/details" element={<BookingDetails />} />

                  <Route
                    path="fabric-management"
                    element={<FabricManagement />}
                  />
                  <Route
                    path="fabric-management/details"
                    element={<FabricDetails />}
                  />

                  <Route path="order-tracker" element={<OrderTracker />} />
                  <Route
                    path="order-tracker/details"
                    element={<OrderTrackerDetails />}
                  />
                </Routes>
              </MainLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
