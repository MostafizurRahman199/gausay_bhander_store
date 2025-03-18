import React from 'react';
import { Link } from 'react-router-dom';
import { GiOrangeSlice, GiCarrot, GiMeat } from 'react-icons/gi';

const Category = () => {
  const categories = [
    {
      id: 1,
      name: 'Fruits',
      icon: <GiOrangeSlice className="text-4xl mb-3 text-orange-500 group-hover:text-white transition-colors" />,
      path: '/fruits',
      bgColor: 'bg-orange-100',
      hoverColor: 'hover:bg-orange-500',
    },
    {
      id: 2,
      name: 'Vegetables',
      icon: <GiCarrot className="text-4xl mb-3 text-green-500 group-hover:text-white transition-colors" />,
      path: '/vegetables',
      bgColor: 'bg-green-100',
      hoverColor: 'hover:bg-green-500',
    },
    {
      id: 3,
      name: 'Beef',
      icon: <GiMeat className="text-4xl mb-3 text-red-500 group-hover:text-white transition-colors" />,
      path: '/beef',
      bgColor: 'bg-red-100',
      hoverColor: 'hover:bg-red-500',
    },
  ];

  return (
    <div className="w-10/12  mx-auto px-4 my-20">
      <h2 className="text-3xl font-bold text-center mb-8">Our Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link 
            to={category.path} 
            key={category.id}
            className={`group ${category.bgColor} ${category.hoverColor} rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
          >
            <div className="flex flex-col items-center">
              {category.icon}
              <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;