import React from 'react';
import { Phone, Clock, CheckCircle, Home, Building, Paintbrush, Star, MessageCircle } from 'lucide-react';

export default function PaintingServiceSG() {
  const hdbPrices = [
    { type: 'Studio Apt / 2 Room', price: '$700' },
    { type: '3 Room Flat', price: '$1000' },
    { type: '4 Room Flat', price: '$1400' },
    { type: '5 Room Flat', price: '$1600' }
  ];

  const interiorPrices = [
    { type: 'Intermediate Terrace', price: 'From $2500' },
    { type: 'Corner Terrace', price: 'From $3000' },
    { type: 'Semi Detached', price: 'From $3200' },
    { type: 'Bungalow', price: 'From $4000' }
  ];

  const exteriorPrices = [
    { type: 'Intermediate Terrace', price: 'From $2800' },
    { type: 'Corner Terrace', price: 'From $3200' },
    { type: 'Semi Detached', price: 'From $3500' },
    { type: 'Bungalow', price: 'From $4500' }
  ];

  const addons = [
    { service: 'Door & Frame (per door)', price: '$80' },
    { service: 'Main Gate (per gate)', price: '$120' },
    { service: 'Pipes (per bathroom)', price: '$50' },
    { service: 'Additional Colour', price: '$50' },
    { service: 'Upgrade to Premium Paint (Ceiling)', price: 'from $380' },
    { service: 'Upgrade to Weatherbond Exterior Paint for Balcony', price: 'from $80' },
    { service: 'Painting of Kitchen Walls', price: 'from $150' },
    { service: 'Mould Treatment of Toilet/Bathroom Ceiling', price: 'from $280' },
    { service: 'Paint Peeling Treatment', price: 'from $100' }
  ];

  const features = [
    '10+ Years Working Experience',
    'Waterproofing Specialist',
    'Odour-less Paint Available',
    'Coffee Shop Painting',
    'Free Consultation',
    'Quality Guaranteed'
  ];
  const CallNowButton = () => {

  // 🔹 1️⃣ Conversion fire করার function (return এর আগেই থাকবে)
  const gtagReportConversion = (url) => {
    const callback = () => {
      if (url) {
        window.location.href = url;
      }
    };

    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17894850524/sI02COWnpuwbENz_9tRC',
        event_callback: callback,
      });
    } else {
      // fallback (rare case)
      window.location.href = url;
    }

    return false;
  };

  // 🔹 2️⃣ Button click handler
  const handleCallNowClick = () => {
    gtagReportConversion('tel:+6581713404');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Paintbrush className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-bold">PaintingServiceSG</h1>
            </div>
            <a 
            onClick={CallNowButton}
              href="https://wa.me/6581713404" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero101.jpeg" 
            alt="Professional Painting Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Transform Your Space with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Professional Painting</span>
              </h2>
              <p className="text-xl text-gray-200">
                Singapore's trusted painting experts with 10+ years experience. Available 24/7 for all your painting needs!
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/6581713404" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Get Free Quote
                </a>
                <a 
                  href="tel:6581713404"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg border-2 border-blue-500 hover:bg-blue-50 transition-all"
                >
                  Call Now
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <span className="font-semibold text-white">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="font-semibold text-white">6581713404</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-lg text-gray-800">{feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
<section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
  <div className="container mx-auto px-4">
    <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      Before & After Work
    </h3>

    <div className="grid md:grid-cols-2 gap-10">

      {/* BEFORE WORK */}
      <div>
        <h4 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Before Work
        </h4>

        <div className="grid grid-cols-2 gap-4">
          {["/before1.jpeg", "/before2.jpeg"].map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={img}
                alt="Before painting work"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-3 py-1 rounded">
                Before
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AFTER WORK */}
      <div>
        <h4 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          After Work
        </h4>

        <div className="grid grid-cols-2 gap-4">
          {["/after1.jpeg", "/after2.jpeg"].map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={img}
                alt="After painting work"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <span className="absolute bottom-2 left-2 bg-green-600/80 text-white text-sm px-3 py-1 rounded">
                After
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Transparent Pricing
          </h3>
          <p className="text-center text-gray-600 mb-12">Starting from just $100 for HDB/Condo</p>

          {/* All Pricing Tables Visible */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* HDB / Condo */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl">
              <img 
                src="/condo.jpg" 
                alt="HDB Condo Painting" 
                className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
              />
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-blue-600" />
                <h4 className="text-2xl font-bold text-gray-800">HDB / Condo Package</h4>
              
              </div>
              <p className="text-sm text-gray-600 mb-6">Standard Nippon Vinilex 5000 - One color whole house</p>
              <div className="space-y-4">
                {hdbPrices.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
                    <span className="font-semibold text-gray-700">{item.type}</span>
                    <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6">* Separate charges apply for additional colours and sealer</p>
            </div>

            {/* Interior */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl">
              <img 
                src="/interior.jpg" 
                alt="HDB Condo Painting" 
                className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
              />
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-indigo-600" />
                <h4 className="text-2xl font-bold text-gray-800">Interior Painting</h4>
              </div>
              <p className="text-sm text-gray-600 mb-6">Odour-less Paint</p>
              <div className="space-y-4">
                {interiorPrices.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
                    <span className="font-semibold text-gray-700">{item.type}</span>
                    <span className="text-2xl font-bold text-indigo-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exterior */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-xl">
             <img 
                src="/exterior.jpg" 
                alt="HDB Condo Painting" 
                className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
              />
              <div className="flex items-center gap-3 mb-4">
                <Paintbrush className="w-8 h-8 text-teal-600" />
                <h4 className="text-2xl font-bold text-gray-800">Exterior Painting</h4>
              </div>
              <p className="text-sm text-gray-600 mb-6">Standard Package</p>
              <div className="space-y-4">
                {exteriorPrices.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
                    <span className="font-semibold text-gray-700">{item.type}</span>
                    <span className="text-2xl font-bold text-teal-600">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6">* Free erection of scaffolding, works will be charged separately</p>
            </div>

            {/* Add-ons */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-sky-600" />
                <h4 className="text-2xl font-bold text-gray-800">Additional Services</h4>
              </div>
              <div className="space-y-3 mt-6">
                {addons.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
                    <span className="font-semibold text-gray-700">{item.service}</span>
                    <span className="text-xl font-bold text-sky-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h3>
          <p className="text-xl mb-8 opacity-90">Contact us now for a free consultation and quote!</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://wa.me/6581713404" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp: 6581713404
            </a>
            <a 
              href="tel:6581713404"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}