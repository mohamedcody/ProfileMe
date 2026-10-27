import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CyberConstellationCanvas } from './ui/CyberConstellationCanvas';
import { ScrollProgressBar } from './ui/ScrollProgressBar';
import { MobileFloatingAction } from './ui/MobileFloatingAction';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <ScrollProgressBar />
      <div className="mesh-gradient-bg"></div>
      <CyberConstellationCanvas />
      <Navbar />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {children}
      </main>
      <Footer />
      <MobileFloatingAction />
    </div>
  );
};

export default Layout;
