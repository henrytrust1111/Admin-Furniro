import React from 'react';
import Sidebar from './Sidebar';  // Assuming you have a Sidebar component
import Header from './Header';    // Assuming you have a Header component
// import AddAttribute from './AddAttribute'; // The AddAttribute component we created
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <Header />

        {/* Main dashboard content */}
        <main className="flex-grow p-6">
         <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
