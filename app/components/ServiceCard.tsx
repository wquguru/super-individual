import React from 'react';
import { FiClock, FiArrowRight } from 'react-icons/fi';

interface ServiceCardProps {
  title: string;
  hours: number | string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  hours,
  description,
  price,
  features,
  isPopular = false,
}) => {
  return (
    <div className={`relative rounded-2xl p-6 ${
      isPopular 
        ? 'bg-blue-50 border-2 border-blue-500' 
        : 'bg-white border border-gray-200'
    }`}>
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          最受欢迎
        </span>
      )}
      
      <div className="flex items-center gap-2 text-blue-600 mb-4">
        <FiClock className="w-5 h-5" />
        <span className="font-semibold">{hours}小时</span>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="text-3xl font-bold mb-6">
        ¥{price.toLocaleString()}
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
        立即预约
        <FiArrowRight />
      </button>
    </div>
  );
};

export default ServiceCard; 