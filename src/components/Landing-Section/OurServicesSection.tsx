import React from 'react';
import Image from 'next/image';

interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  isExpanded?: boolean;
  image?: string;
}

const OurServicesSection = () => {
  const services: ServiceItem[] = [
    {
      id: '01',
      title: 'Setting Processes, Delegating Tasks',
      isExpanded: false,
    },
    {
      id: '02',
      title: 'Dive into Project Management',
      description: 'Navigating the Depths of Project Management: Strategies, Techniques, and Best Practices',
      image: '/path-to-your-project-management-image.jpg',
      isExpanded: true,
    },
    {
      id: '03',
      title: 'Setting Processes, Delegating Tasks',
      isExpanded: false,
    },
    {
      id: '04',
      title: 'Setting Processes, Delegating Tasks',
      isExpanded: false,
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 py-16 bg-white">
      <div className="mb-16">
        <h2 className="text-5xl font-normal mb-6 text-gray-900">
          Services That Add<br />
          <span className="font-medium">Significant Business Value</span>
        </h2>
        <p className="text-gray-600 max-w-2xl">
          Our offerings encompass services that serve as startup mentoring or include consulting, contributing to the enhanced value proposition of your business.
        </p>
      </div>

      <div className="space-y-6">
        {services.map((service) => (
          <div 
            key={service.id}
            className="border-b border-gray-200 pb-6"
          >
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-6">
                <span className="text-sm text-gray-400 font-medium">{service.id}</span>
                <h3 className="text-2xl font-normal text-gray-900">{service.title}</h3>
              </div>
              <button 
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-xl transition-colors
                  ${service.isExpanded ? 'bg-blue-600 text-white border-blue-600' : 'hover:border-gray-400'}`}
              >
                {service.isExpanded ? '−' : '+'}
              </button>
            </div>

            {service.isExpanded && (
              <div className="grid grid-cols-2 gap-12 mt-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
                {service.image && (
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 object-cover"
                      width={640}
                      height={256}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;