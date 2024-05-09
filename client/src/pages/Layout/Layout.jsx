import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppHeader from '../Header/AppHeader';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <AppHeader />
        <main className="p-6 bg-gray-200 flex-1"> {/* Adjust bg color and padding */}
          {/* Your main content here */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
