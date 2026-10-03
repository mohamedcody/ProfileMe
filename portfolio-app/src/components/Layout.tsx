import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CustomCursor } from './ui/CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <div className="mesh-gradient-bg"></div>
      <div className="noise-overlay"></div>
      <CustomCursor />
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
