import React, { useState } from 'react';
import { Phone, Clock, CheckCircle, Home, Building, Paintbrush, Star, MessageCircle } from 'lucide-react';

export default function PaintingServiceSG() {
  const [activeTab, setActiveTab] = useState('hdb');

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Paintbrush className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-bold">PaintingServiceSG</h1>
            </div>
            <a 
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
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Transform Your Space with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500"> Professional Painting</span>
              </h2>
              <p className="text-xl text-gray-600">
                Singapore's trusted painting experts with 10+ years experience. Available 24/7 for all your painting needs!
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/6581713404" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Get Free Quote
                </a>
                <a 
                  href="tel:6581713404"
                  className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg border-2 border-orange-500 hover:bg-orange-50 transition-all"
                >
                  Call Now
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <span className="font-semibold text-gray-700">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <span className="font-semibold text-gray-700">6581713404</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/image1.jpg" 
                alt="Professional Painting" 
                className="rounded-3xl shadow-2xl w-full h-96 object-cover transform hover:scale-105 transition-transform duration-300"
              />
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
              <div key={idx} className="bg-gradient-to-br from-orange-100 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CheckCircle className="w-8 h-8 text-orange-500 mb-3" />
                <h4 className="font-bold text-lg text-gray-800">{feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Work Gallery
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[2, 3, 4].map((num) => (
              <div key={num} className="relative overflow-hidden rounded-2xl shadow-xl group">
                <img 
                  src={`/image${num}.jpg`}
                  alt={`Painting project ${num}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Professional Results</p>
                </div>
              </div>
            ))}
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

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab('hdb')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === 'hdb'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Building className="w-5 h-5 inline mr-2" />
              HDB / Condo
            </button>
            <button
              onClick={() => setActiveTab('interior')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === 'interior'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Home className="w-5 h-5 inline mr-2" />
              Interior
            </button>
            <button
              onClick={() => setActiveTab('exterior')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === 'exterior'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Paintbrush className="w-5 h-5 inline mr-2" />
              Exterior
            </button>
            <button
              onClick={() => setActiveTab('addons')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === 'addons'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Star className="w-5 h-5 inline mr-2" />
              Add-ons
            </button>
          </div>

          {/* Pricing Tables */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'hdb' && (
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold mb-2 text-gray-800">HDB / Condo Package</h4>
                <p className="text-sm text-gray-600 mb-6">Standard Nippon Vinilex 5000 - One color whole house</p>
                <div className="space-y-4">
                  {hdbPrices.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
                      <span className="font-semibold text-gray-700">{item.type}</span>
                      <span className="text-2xl font-bold text-orange-500">{item.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-6">* Separate charges apply for additional colours and sealer</p>
              </div>
            )}

            {activeTab === 'interior' && (
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold mb-2 text-gray-800">Interior Painting</h4>
                <p className="text-sm text-gray-600 mb-6">Odour-less Paint</p>
                <div className="space-y-4">
                  {interiorPrices.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
                      <span className="font-semibold text-gray-700">{item.type}</span>
                      <span className="text-2xl font-bold text-purple-500">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'exterior' && (
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold mb-2 text-gray-800">Exterior Painting</h4>
                <p className="text-sm text-gray-600 mb-6">Standard Package</p>
                <div className="space-y-4">
                  {exteriorPrices.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
                      <span className="font-semibold text-gray-700">{item.type}</span>
                      <span className="text-2xl font-bold text-green-500">{item.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-6">* Free erection of scaffolding, works will be charged separately</p>
              </div>
            )}

            {activeTab === 'addons' && (
              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold mb-6 text-gray-800">Additional Services</h4>
                <div className="space-y-3">
                  {addons.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
                      <span className="font-semibold text-gray-700">{item.service}</span>
                      <span className="text-xl font-bold text-pink-500">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h3>
          <p className="text-xl mb-8 opacity-90">Contact us now for a free consultation and quote!</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://wa.me/6581713404" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
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