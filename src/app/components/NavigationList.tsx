import * as React from 'react';

const NavigationList = ({listItems}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <div className="bg-white overflow-hidden shadow sm:rounded-lg mt-2 p-2">
      <nav className="space-y-1" aria-label="Sidebar">
        {listItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'flex items-center px-3 py-2 text-sm font-medium rounded-md'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            <span className="truncate">{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
export default NavigationList;
