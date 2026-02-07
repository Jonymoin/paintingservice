import React from 'react';

const WaterproofingService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/painting6.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-800/80"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Waterproofing Service
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-4">
              Rooftop • Terrace • Balcony
            </p>
            <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
              Professional Waterproofing Solutions in Singapore
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border-t-4 border-green-600">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Expert Waterproofing Solutions for Your Property
          </h2>
          
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Protect your property from water damage with our professional waterproofing services. 
              We specialize in comprehensive waterproofing solutions for rooftops, terraces, and balconies 
              across Singapore, ensuring your home remains dry and structurally sound throughout the year.
            </p>
            
            <p>
              Singapore's tropical climate brings heavy rainfall and high humidity, making proper waterproofing 
              essential for every property. Our experienced team uses advanced waterproofing technologies and 
              premium materials to create lasting barriers against water infiltration, preventing leaks, 
              dampness, and costly structural damage.
            </p>
            
            <p>
              We conduct thorough inspections to identify vulnerable areas and potential water entry points. 
              Our customized waterproofing solutions include surface preparation, crack repair, membrane 
              application, and protective coating systems. Whether you're dealing with existing leaks or 
              seeking preventive protection, we deliver reliable results that stand the test of time.
            </p>
            
            <p>
              Our commitment to quality extends beyond application. We provide comprehensive warranties and 
              follow-up inspections to ensure your waterproofing system performs optimally. Trust us to 
              safeguard your investment and maintain your property's integrity for years to come.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="font-bold text-xl mb-2 text-green-800">Rooftop</h3>
              <p className="text-gray-600">Complete roof waterproofing and protection</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border-2 border-teal-200">
              <div className="text-5xl mb-4">🏡</div>
              <h3 className="font-bold text-xl mb-2 text-teal-800">Terrace</h3>
              <p className="text-gray-600">Durable terrace sealing solutions</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border-2 border-emerald-200">
              <div className="text-5xl mb-4">🪟</div>
              <h3 className="font-bold text-xl mb-2 text-emerald-800">Balcony</h3>
              <p className="text-gray-600">Expert balcony waterproofing services</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Our Waterproofing Service?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">Advanced Technology</h4>
                  <p className="text-gray-600">Latest waterproofing materials and techniques</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">Long-Term Protection</h4>
                  <p className="text-gray-600">Durable solutions with comprehensive warranties</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">Expert Team</h4>
                  <p className="text-gray-600">Certified professionals with years of experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">Quality Guarantee</h4>
                  <p className="text-gray-600">100% satisfaction and performance guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gradient-to-b from-green-50 to-emerald-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Waterproofing Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="/painting7.jpg" 
                alt="Rooftop Waterproofing Project" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Rooftop Waterproofing</h3>
                  <p className="text-green-100 mt-2">Complete roof protection system</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="/painting8.jpg" 
                alt="Terrace Waterproofing Project" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Terrace Sealing</h3>
                  <p className="text-teal-100 mt-2">Durable terrace waterproofing</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="/painting9.jpg" 
                alt="Balcony Waterproofing Project" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Balcony Protection</h3>
                  <p className="text-emerald-100 mt-2">Expert balcony waterproofing</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="/painting10.jpg" 
                alt="Complete Waterproofing Solution" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Complete Protection</h3>
                  <p className="text-green-100 mt-2">Full property waterproofing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Protect Your Property Today
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Get expert waterproofing solutions and prevent water damage before it's too late
          </p>
          <a 
            href="https://wa.me/6581713404" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WaterproofingService;