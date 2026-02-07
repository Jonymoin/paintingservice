import React from 'react';

const BungalowPainting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/painting15.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 via-indigo-900/75 to-violet-900/80"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Bungalow House Painting
            </h1>
            <div className="text-xl md:text-3xl text-purple-100 max-w-3xl mx-auto mb-4">
              Interior & Exterior Painting
            </div>
            <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto">
              Premium Painting Solutions for Luxury Homes in Singapore
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-purple-600">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Luxury Bungalow Painting Specialists
          </h2>
          
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Transform your bungalow into a masterpiece with our premium painting services. We specialize 
              in both interior and exterior painting for luxury homes across Singapore, delivering exceptional 
              quality and attention to detail that matches the grandeur of your property.
            </p>
            
            <p>
              Bungalow houses require a different level of expertise compared to standard residential properties. 
              Our experienced team understands the unique challenges of painting larger spaces, high ceilings, 
              intricate architectural details, and extensive exterior surfaces. We use premium paints and 
              professional techniques to ensure flawless finishes that enhance your home's beauty and value.
            </p>
            
            <p>
              For interior painting, we offer comprehensive color consultation services to help you create 
              the perfect ambiance in every room. From elegant living areas to cozy bedrooms, we ensure 
              consistent quality throughout your home. Our meticulous preparation process includes surface 
              repair, priming, and multiple coats of premium paint for a smooth, long-lasting finish.
            </p>
            
            <p>
              Our exterior painting services protect your bungalow from Singapore's harsh tropical climate 
              while enhancing its curb appeal. We use weather-resistant, UV-protective paints that maintain 
              their vibrant colors for years. Every project includes thorough surface preparation, crack 
              repair, and protective sealing to ensure durability against rain, humidity, and intense sunlight.
            </p>
            
            <p>
              We pride ourselves on minimal disruption to your lifestyle. Our professional team works 
              efficiently while maintaining the highest standards of cleanliness and respect for your property. 
              All our work is backed by comprehensive warranties and our commitment to your complete satisfaction.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl">
              <div className="text-6xl mb-4">🏡</div>
              <h3 className="font-bold text-2xl mb-3 text-purple-800">Interior Painting</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Living rooms, bedrooms, dining areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Kitchens and bathrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>High ceilings and architectural details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Custom color schemes and finishes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-2xl border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300 hover:shadow-xl">
              <div className="text-6xl mb-4">🏘️</div>
              <h3 className="font-bold text-2xl mb-3 text-indigo-800">Exterior Painting</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Complete facade painting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Weather-resistant protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Roof, gates, and metal surfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>UV-protective and anti-algae coatings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 via-indigo-50 to-violet-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Our Bungalow Painting Service?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3 text-center">👨‍🎨</div>
                <h4 className="font-bold text-gray-800 text-center mb-2">Expert Craftsmen</h4>
                <p className="text-gray-600 text-center">Skilled painters with luxury home experience</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3 text-center">🎨</div>
                <h4 className="font-bold text-gray-800 text-center mb-2">Premium Materials</h4>
                <p className="text-gray-600 text-center">High-quality, eco-friendly paints</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3 text-center">⏱️</div>
                <h4 className="font-bold text-gray-800 text-center mb-2">Timely Completion</h4>
                <p className="text-gray-600 text-center">On-schedule project delivery</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3 text-center">🛡️</div>
                <h4 className="font-bold text-gray-800 text-center mb-2">Quality Guarantee</h4>
                <p className="text-gray-600 text-center">Comprehensive warranty coverage</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3 text-center">🧹</div>
                <h4 className="font-bold text-gray-800 text-center mb-2">Clean & Tidy</h4>
                <p className="text-gray-600 text-center">Meticulous cleanup after completion</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3 text-center">💬</div>
                <h4 className="font-bold text-gray-800 text-center mb-2">Free Consultation</h4>
                <p className="text-gray-600 text-center">Expert color and design advice</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gradient-to-b from-indigo-50 via-purple-50 to-violet-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Bungalow Painting Portfolio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 lg:col-span-2 lg:row-span-2">
              <img 
                src="/painting16.jpg" 
                alt="Luxury Bungalow Exterior Painting" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Luxury Bungalow Exterior</h3>
                  <p className="text-purple-100">Complete facade transformation with premium finishes</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="/painting17.jpg" 
                alt="Bungalow Interior Living Room" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Elegant Living Room</h3>
                  <p className="text-indigo-100 text-sm mt-1">Custom interior design</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="/painting18.jpg" 
                alt="Bungalow Bedroom Painting" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Master Bedroom</h3>
                  <p className="text-violet-100 text-sm mt-1">Sophisticated color palette</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="/painting19.jpg" 
                alt="Bungalow Exterior Details" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Architectural Details</h3>
                  <p className="text-purple-100 text-sm mt-1">Precision finishing work</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 lg:col-span-2">
              <img 
                src="/painting20.jpg" 
                alt="Complete Bungalow Renovation" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Complete Renovation</h3>
                  <p className="text-indigo-100 text-sm mt-1">Full interior and exterior painting transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Painting Process
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-300 via-indigo-300 to-violet-300"></div>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative md:flex md:items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="bg-purple-100 p-6 rounded-xl inline-block">
                  <h3 className="font-bold text-xl text-purple-900 mb-2">1. Consultation & Quote</h3>
                  <p className="text-gray-700">Free site visit and detailed quotation</p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-white"></div>
              <div className="md:w-1/2"></div>
            </div>
            
            {/* Step 2 */}
            <div className="relative md:flex md:items-center">
              <div className="md:w-1/2"></div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-indigo-100 p-6 rounded-xl inline-block">
                  <h3 className="font-bold text-xl text-indigo-900 mb-2">2. Color Selection</h3>
                  <p className="text-gray-700">Expert guidance on color schemes</p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative md:flex md:items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="bg-violet-100 p-6 rounded-xl inline-block">
                  <h3 className="font-bold text-xl text-violet-900 mb-2">3. Surface Preparation</h3>
                  <p className="text-gray-700">Thorough cleaning and repair work</p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-violet-600 rounded-full border-4 border-white"></div>
              <div className="md:w-1/2"></div>
            </div>
            
            {/* Step 4 */}
            <div className="relative md:flex md:items-center">
              <div className="md:w-1/2"></div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-white"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-purple-100 p-6 rounded-xl inline-block">
                  <h3 className="font-bold text-xl text-purple-900 mb-2">4. Professional Painting</h3>
                  <p className="text-gray-700">Multiple coats for perfect finish</p>
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="relative md:flex md:items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="bg-indigo-100 p-6 rounded-xl inline-block">
                  <h3 className="font-bold text-xl text-indigo-900 mb-2">5. Quality Check & Cleanup</h3>
                  <p className="text-gray-700">Final inspection and complete cleanup</p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white"></div>
              <div className="md:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Bungalow?
          </h2>
          <p className="text-xl text-purple-50 mb-8">
            Experience luxury painting services that enhance your home's beauty and value
          </p>
          <a 
            href="https://wa.me/6581713404" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BungalowPainting;