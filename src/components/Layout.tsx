import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Footer } from './Footer';
import SidebarComponent from './SidebarComponent';

const Layout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', height: '100vh', minHeight: '400px' }}>
        <SidebarComponent collapsed={collapsed} setCollapsed={setCollapsed} />

        <main style={{ padding: 10 }}>
          <div>
            <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
              Collapse
            </button>
          </div>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
