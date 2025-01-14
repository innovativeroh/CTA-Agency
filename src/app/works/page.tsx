import ProjectCard from '@/components/ui/ProjectCard'
import React from 'react'

const OurWorks = () => {
    const projects = [
        {
          id: 1,
          title: 'E-commerce Platform',
          description: 'A full-featured online store with cart and checkout functionality.',
          imageUrl: '/placeholder.svg?height=300&width=400',
        },
        {
          id: 2,
          title: 'Social Media Dashboard',
          description: 'Analytics dashboard for tracking social media engagement.',
          imageUrl: '/placeholder.svg?height=300&width=400',
        },
        {
          id: 3,
          title: 'Mobile Banking App',
          description: 'Secure and user-friendly mobile banking application.',
          imageUrl: '/placeholder.svg?height=300&width=400',
        },
        {
          id: 4,
          title: 'Fitness Tracker',
          description: 'Wearable device companion app for tracking fitness goals.',
          imageUrl: '/placeholder.svg?height=300&width=400',
        },
        {
          id: 5,
          title: 'Real Estate Listings',
          description: 'Property search and listing platform for real estate agents.',
          imageUrl: '/placeholder.svg?height=300&width=400',
        },
        {
          id: 6,
          title: 'Task Management Tool',
          description: 'Collaborative project management and task tracking application.',
          imageUrl: '/placeholder.svg?height=300&width=400',
        },
      ]
      
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#BE1E2D] to-[#273043] relative">
            Our Works
            <div className="absolute w-24 h-1 bg-[#BE1E2D] bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></div>
          </h1>
          <p className="text-[#232020] dark:text-[#EDF0DA] text-xl leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions that have transformed businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurWorks