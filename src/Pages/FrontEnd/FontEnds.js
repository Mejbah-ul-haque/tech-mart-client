import React from 'react';
import useDevelopment from '../../hooks/useDevelopment';
import Service from '../Service/Service';

const FontEnds = () => {
  const [development, setDevelopment] = useDevelopment();
  
  return (
    <div className='container mx-auto'>
      
      <h2 className='text-3xl font-bold my-8'>Guidelines of <span className='text-red-500'>Front End</span></h2>
      <ul>
        <li className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            development.slice(1, 5).map(service => <Service
              key={service.id}
              service={service}
              ></Service>)
          }
        </li>
      </ul>
    </div>
  );
};

export default FontEnds;