import * as React from 'react';
import { useLocation } from 'react-router';

const Navbar = () => {
  const location = useLocation().pathname;
  return (
    <div className="flex h-12 bg-white p-2">
      <span className="text-center text-sm font-semibold text-slate-700 self-center">{location}</span>
    </div>
  );
};
export default Navbar;
