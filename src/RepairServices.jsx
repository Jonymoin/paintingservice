import React from 'react';

const RepairServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/painting11.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/75 to-amber-900/80"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Specialized Repair Services
            </h1>
            <div className="text-lg md:text-xl text-orange-100 max-w-4xl mx-auto space-y-2">
              <p className="font-semibold text-2xl md:text-3xl mb-4">PU Injection • Epoxy Injection • Grouting</p>
              <p className="text-xl">Crack Wall Repair • Leaking Rooftop • Leaking Toilets</p>
            </div>
            <p className="text-lg md:text-xl text-amber-200 max-w-2xl mx-auto mt-6">
              Expert Solutions for All Your Repair Needs in Singapore
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border-t-4 border-orange-600">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Professional Repair & Injection Services
          </h2>
          
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              When it comes to structural repairs and leak prevention, precision and expertise matter. 
              Our specialized repair services in Singapore combine advanced injection technologies with 
              proven repair methods to solve even the most challenging water infiltration and structural 
              issues in your property.
            </p>
            
            <p>
              We offer comprehensive solutions including PU (Polyurethane) injection for active leaks, 
              epoxy injection for structural crack repairs, and grouting injection for void filling and 
              soil stabilization. Each technique is carefully selected based on your specific problem, 
              ensuring optimal results and long-lasting protection.
            </p>
            
            <p>
              Our experienced technicians are equipped with state-of-the-art injection equipment and 
              premium-grade materials. Whether you're dealing with hairline cracks in walls, persistent 
              rooftop leaks, or troublesome toilet leaks, we diagnose the root cause and implement 
              targeted solutions that address the problem at its source rather than just treating symptoms.
            </p>
            
            <p>
              We understand that structural issues and leaks can cause significant stress and property 
              damage. That's why we prioritize quick response times, thorough assessments, and effective 
              repairs that restore your peace of mind. All our work is backed by comprehensive warranties 
              and our commitment to excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all duration-300">
              <div className="text-5xl mb-4">💉</div>
              <h3 className="font-bold text-xl mb-2 text-orange-800">PU Injection</h3>
              <p className="text-gray-600">Polyurethane injection for active water leaks</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-300 hover:border-amber-500 transition-all duration-300">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="font-bold text-xl mb-2 text-amber-800">Epoxy Injection</h3>
              <p className="text-gray-600">Structural repair for cracks and damages</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-300 hover:border-yellow-500 transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-2 text-yellow-800">Grouting Injection</h3>
              <p className="text-gray-600">Void filling and soil stabilization</p>
            </div>
          </div>

          {/* Common Issues We Fix */}
          <div className="mt-12 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 p-8 rounded-xl border-l-4 border-orange-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Common Issues We Solve</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 font-bold text-2xl">🧱</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Crack Wall Repair</h4>
                    <p className="text-gray-600 mt-1">Expert treatment of wall cracks using epoxy and PU injection techniques</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold text-2xl">🏠</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Leaking Rooftop</h4>
                    <p className="text-gray-600 mt-1">Permanent solutions for persistent rooftop water infiltration</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-600 font-bold text-2xl">🚿</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Leaking Toilets</h4>
                    <p className="text-gray-600 mt-1">Complete toilet waterproofing and leak prevention services</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 font-bold text-2xl">💧</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Water Seepage</h4>
                    <p className="text-gray-600 mt-1">Advanced injection methods to stop water penetration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Our Services */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-xl">
              <h4 className="font-bold text-xl text-orange-900 mb-3">Advanced Technology</h4>
              <p className="text-gray-700">We use cutting-edge injection equipment and premium materials for superior results</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-xl">
              <h4 className="font-bold text-xl text-amber-900 mb-3">Expert Diagnosis</h4>
              <p className="text-gray-700">Thorough inspection to identify root causes and implement effective solutions</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-xl">
              <h4 className="font-bold text-xl text-yellow-900 mb-3">Guaranteed Results</h4>
              <p className="text-gray-700">All repairs backed by comprehensive warranties and quality assurance</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-xl">
              <h4 className="font-bold text-xl text-orange-900 mb-3">Fast Response</h4>
              <p className="text-gray-700">Quick service to prevent further damage and minimize disruption</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-b from-amber-50 to-orange-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Repair Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Inspection</h3>
              <p className="text-gray-600">Thorough assessment of the problem area</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Diagnosis</h3>
              <p className="text-gray-600">Identify root cause and best solution</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Treatment</h3>
              <p className="text-gray-600">Apply injection or repair technique</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Verification</h3>
              <p className="text-gray-600">Quality check and warranty provision</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Let Leaks and Cracks Damage Your Property
          </h2>
          <p className="text-xl text-orange-50 mb-8">
            Get expert repair services today and protect your investment
          </p>
          <a 
            href="https://wa.me/6581713404" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepairServices;