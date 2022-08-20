import React from 'react';
import useDevelopment from '../../hooks/useDevelopment';
import Service from './Service';

const Services = () => {
  const [development, setDevelopment] = useDevelopment();
  
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold text-[#939292] my-8'>Services</h1>
      <h2 className='text-3xl font-bold my-8'>Tutorial of <span className='text-red-500'>Development</span></h2>
      <ul>
        <li className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            development.map(service => <Service
              key={service.id}
              service={service}
              ></Service>)
          }
        </li>
      </ul>
    </div>
  );
};

export default Services;