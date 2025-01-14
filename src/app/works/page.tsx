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
    <section className="w-full pt-5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#BE1E2D] to-[#273043]">
            Our Works
          </h1>
          <p className="text-[#232020] dark:text-[#EDF0DA] text-lg">
            Explore our portfolio of successful projects and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="transform hover:scale-105 transition-transform duration-300"
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