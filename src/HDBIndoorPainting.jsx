import React from 'react';

const HDBIndoorPainting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/painting2.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 via-indigo-900/75 to-violet-900/80"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              HDB /Condo Painting
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Professional Painting Services in Singapore
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Transform Your HDB Home with Expert Painting
          </h2>
          
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Welcome to Singapore's premier HDB indoor painting service. We specialize in transforming 
              your HDB flats into beautiful, vibrant living spaces that reflect your personal style and 
              enhance your home's value.
            </p>
            
            <p>
              With years of experience serving homeowners across Singapore, our team of skilled painters 
              delivers exceptional quality and meticulous attention to detail. We understand the unique 
              requirements of HDB homes and use only premium, eco-friendly paints that are safe for your 
              family and the environment.
            </p>
            
            <p>
              Our comprehensive indoor painting services include wall preparation, color consultation, 
              professional application, and thorough cleanup. Whether you're refreshing a single room 
              or repainting your entire flat, we ensure minimal disruption to your daily routine while 
              delivering outstanding results that exceed your expectations.
            </p>
            
            <p>
              We pride ourselves on punctuality, cleanliness, and customer satisfaction. Every project 
              is backed by our quality guarantee, ensuring your complete peace of mind from start to finish.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-bold text-xl mb-2">HDB Specialists</h3>
              <p className="text-gray-600">Expert knowledge of HDB requirements</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-xl mb-2">Premium Paints</h3>
              <p className="text-gray-600">Eco-friendly, long-lasting quality</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-bold text-xl mb-2">Perfect Finish</h3>
              <p className="text-gray-600">Meticulous attention to detail</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Recent Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/painting2.jpg" 
                alt="HDB Painting Project 1" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Living Room Transformation</h3>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/painting3.jpg" 
                alt="HDB Painting Project 2" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Bedroom Makeover</h3>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/painting4.jpg" 
                alt="HDB Painting Project 3" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Kitchen Refresh</h3>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/painting5.jpg" 
                alt="HDB Painting Project 4" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Complete HDB Repaint</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your HDB Home?
          </h2>
          <p className="text-xl text-white mb-8">
            Get a free quote today and experience the difference of professional painting
          </p>
          <a 
            href="https://wa.me/6581713404" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HDBIndoorPainting;