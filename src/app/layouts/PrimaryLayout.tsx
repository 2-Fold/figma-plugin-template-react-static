import * as React from 'react';
import Navbar from '../components/Navbar';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <div className="wrapper h-screen bg-slate-100">
      <Navbar />
      <div className="content p-2">{children}</div>
    </div>
  );
};

export default PrimaryLayout;
