import React from 'react';
import useKids from '../../hooks/useKids';
import Child from './Child';

const Children = () => {
  const [kids, setKids] = useKids();
  return (
    <div className='container mx-auto'>
      <ul>
        <li className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            kids.map(child => <Child
              key={child.id}
              child={child}
              ></Child>)
          }
        </li>
      </ul>
    </div>
  );
};

export default Children;