import { ChartBarIcon, CodeBracketIcon, ShareIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              Designing Digital Strategies That Deliver
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Unifying the complexities of media, data, audience insights, and analytics, 
              we empower your brand's potential. At CTA, we blend creativity and performance 
              to craft strategies that transform your business into a growth powerhouse.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
            <img 
              src="/team-collaboration.jpg" 
              alt="Team Collaboration" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Vision</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-lg">
              Empower brands with cutting-edge digital strategies that lead to tangible results. 
              We believe in the power of data-driven decisions combined with creative excellence 
              to shape the future of businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseItems.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {impactStats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Ready to redefine your brand's potential? Let's connect and start your 
            digital transformation journey.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}

const expertiseItems = [
  {
    icon: ChartBarIcon,
    title: "Performance Marketing",
    description: "Strategies designed to maximize your Return on Ad Spend (ROAS)."
  },
  {
    icon: CodeBracketIcon,
    title: "Web Development & Design",
    description: "Building, optimizing, and innovating your online presence."
  },
  {
    icon: ShareIcon,
    title: "Social Media Marketing",
    description: "Crafting engaging campaigns to amplify your reach."
  },
  {
    icon: UserGroupIcon,
    title: "Influencer Marketing",
    description: "Transforming narratives to create meaningful brand connections."
  }
];

const impactStats = [
  {
    value: "5 Cr+",
    label: "Ad Spend Managed"
  },
  {
    value: "15+",
    label: "Core Services"
  },
  {
    value: "14X",
    label: "ROAS on Successful Campaigns"
  }
];