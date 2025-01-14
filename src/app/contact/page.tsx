export default function ContactPage() {
    return (
        <main className="min-h-screen px-4 py-28 max-w-7xl mx-auto">
            {/* Header Section */}
        <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Let's <span className="bg-[#BE1E2D] text-white px-3 py-1">Connect</span> and 
                    Grow Together
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    At CTA Agency, we are here to help you achieve groundbreaking success in your marketing endeavors. 
                    Whether you're looking to amplify your brand's reach, improve your online presence, or launch a 
                    new campaign, our team is ready to assist.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Let's Discuss Your Digital Goals</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input 
                                type="text"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input 
                                type="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea 
                                rows={5}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <button className="w-full bg-[#C41E3A] text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors">
                            Submit Query →
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                        <div className="space-y-4">
                            <p className="flex items-center gap-3">
                                <span className="font-semibold">Phone:</span> 
                                +91 7792092027
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="font-semibold">Email:</span> 
                                howdy.cta@gmail.com
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="font-semibold">Website:</span> 
                                www.howdycta.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                        <div className="space-y-2">
                            <p>Monday to Friday: 9:00 AM – 6:00 PM</p>
                            <p>Saturday: 10:00 AM – 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Tailored Solutions: We understand your unique business needs</li>
                            <li>Proven Results: With ROAS as high as 14x</li>
                            <li>Experienced Team: Expertise in performance marketing and more</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                        <p className="flex items-center gap-3">
                            <span className="font-semibold">Instagram:</span>
                            <a href="https://instagram.com/cta.india" className="text-[#C41E3A] hover:underline">
                                @cta.india
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}