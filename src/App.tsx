import React, { useState } from 'react';
import { Car, Wrench, Fuel, ShoppingCart, Phone, Mail, MapPin, Clock, Star, ChevronDown, Menu, X, CheckCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carMake: '',
    carModel: '',
    service: '',
    date: '',
    time: ''
  });

  const services = [
    {
      icon: <Car className="w-12 h-12" />,
      title: "Oil Change",
      description: "Premium Japanese lubricant oil change with quality guarantee",
      features: ["Synthetic & Conventional Oil", "Oil Filter Replacement", "Multi-point Inspection"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Engine Check",
      description: "Comprehensive engine diagnostics and performance optimization",
      features: ["Computer Diagnostics", "Performance Testing", "Maintenance Recommendations"]
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Full Car Servicing",
      description: "Complete vehicle maintenance and inspection service",
      features: ["Brake Inspection", "Tire Check", "Fluid Top-ups", "Safety Check"]
    },
    {
      icon: <Fuel className="w-12 h-12" />,
      title: "Fuel Station",
      description: "Premium fuel and automotive convenience store",
      features: ["Premium Gasoline", "Diesel Fuel", "Car Accessories", "Snacks & Drinks"]
    }
  ];

  const products = [
    {
      name: "Premium Engine Oil",
      category: "Engine Lubricants",
      description: "High-performance synthetic engine oil for optimal engine protection",
      variants: ["5W-30", "10W-40", "15W-50"],
      features: ["Extended oil life", "Superior engine protection", "Improved fuel economy"],
      price: "From KES 2,500",
      image: "🛢️"
    },
    {
      name: "Transmission Fluid",
      category: "Transmission",
      description: "Automatic and manual transmission fluids for smooth gear operation",
      variants: ["ATF", "MTF", "CVT Fluid"],
      features: ["Smooth shifting", "Heat resistance", "Extended transmission life"],
      price: "From KES 1,800",
      image: "⚙️"
    },
    {
      name: "Brake Fluid",
      category: "Brake System",
      description: "High-quality brake fluid for reliable braking performance",
      variants: ["DOT 3", "DOT 4", "DOT 5.1"],
      features: ["High boiling point", "Moisture resistance", "Reliable braking"],
      price: "From KES 800",
      image: "🛑"
    },
    {
      name: "Power Steering Fluid",
      category: "Steering System",
      description: "Premium power steering fluid for smooth steering operation",
      variants: ["ATF-based", "Synthetic", "Universal"],
      features: ["Smooth steering", "Reduced wear", "Temperature stability"],
      price: "From KES 1,200",
      image: "🎯"
    },
    {
      name: "Coolant/Antifreeze",
      category: "Cooling System",
      description: "Long-life coolant for optimal engine temperature control",
      variants: ["Green", "Red", "Blue", "Orange"],
      features: ["Corrosion protection", "Freeze protection", "Heat transfer"],
      price: "From KES 1,500",
      image: "❄️"
    },
    {
      name: "Gear Oil",
      category: "Differential & Gearbox",
      description: "Heavy-duty gear oil for differentials and manual transmissions",
      variants: ["75W-90", "80W-90", "85W-140"],
      features: ["Extreme pressure protection", "Thermal stability", "Wear protection"],
      price: "From KES 2,200",
      image: "🔧"
    },
    {
      name: "Grease",
      category: "Lubrication",
      description: "Multi-purpose grease for chassis and bearing lubrication",
      variants: ["Lithium-based", "Synthetic", "High-temperature"],
      features: ["Water resistance", "Long-lasting", "Versatile application"],
      price: "From KES 600",
      image: "🧈"
    },
    {
      name: "Fuel Additives",
      category: "Performance",
      description: "Fuel system cleaners and performance enhancers",
      variants: ["Injector cleaner", "Octane booster", "Fuel stabilizer"],
      features: ["Improved performance", "Better fuel economy", "Engine cleaning"],
      price: "From KES 400",
      image: "⚡"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Best oil change service in the area. My car runs smoother than ever with their premium Japanese oil!"
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Professional service and great prices. The online booking made it so convenient."
    },
    {
      name: "Ahmed Ali",
      rating: 5,
      comment: "Excellent customer service and high-quality lubricants. Highly recommended!"
    }
  ];

  const PHONE_NUMBER = "+254724601259";
  const WHATSAPP_LINK = `https://wa.me/254724601259`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hello JapanLube! I would like to book an appointment:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Car: ${formData.carMake} ${formData.carModel}
Service: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Please confirm my appointment. Thank you!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL with your business number
    const whatsappURL = `https://wa.me/254724601259?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div
                className="bg-white border border-gray-200 shadow flex items-center justify-center"
                style={{
                  width: '80px',
                  height: '56px',
                  borderRadius: '999px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white'
                }}
              >
                <img
                  src="/img/japablub-logo.jpeg"
                  alt="JapanLube Logo"
                  className="object-cover"
                  style={{
                    width: '76px',
                    height: '52px',
                    borderRadius: '999px',
                    display: 'block'
                  }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black">JAPANLUBE</h1>
                <p className="text-sm text-gray-600">Premium Lubricant Oil</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Products</button>
              <button onClick={() => scrollToSection('booking')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Book Now</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</button>
            </nav>

            <button 
              onClick={() => scrollToSection('booking')}
              className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              Book Service
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-red-600 font-medium">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-red-600 font-medium">About</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-red-600 font-medium">Services</button>
                <button onClick={() => scrollToSection('products')} className="text-left text-gray-700 hover:text-red-600 font-medium">Products</button>
                <button onClick={() => scrollToSection('booking')} className="text-left text-gray-700 hover:text-red-600 font-medium">Book Now</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-red-600 font-medium">Contact</button>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors w-fit"
                >
                  Book Service
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Japanese
                <span className="block text-white">Lubricant Oil</span>
              </h1>
              <p className="text-xl mb-8 text-red-100">
                Experience superior engine protection with our premium Japanese lubricant oils. 
                Professional service, competitive prices, and unmatched quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Book Your Car Service
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-colors"
                >
                  View Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
                <Car className="w-32 h-32 mx-auto text-white mb-4" />
                <h3 className="text-2xl font-bold text-center mb-2">Professional Service</h3>
                <p className="text-center text-red-100">Expert technicians using premium Japanese lubricants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">About JapanLube</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for premium automotive care and superior Japanese lubricant oils
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Premium Japanese Oil Excellence</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                At JapanLube, we bring you the finest Japanese lubricant technology combined with 
                professional automotive services. Our premium oils are engineered to provide superior 
                engine protection, enhanced performance, and extended engine life.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-black mb-2">Reliability</h4>
                  <p className="text-gray-600 text-sm">Trusted quality you can depend on</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Car className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-black mb-2">Premium Quality</h4>
                  <p className="text-gray-600 text-sm">Japanese engineering excellence</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-black mb-2">Efficiency</h4>
                  <p className="text-gray-600 text-sm">Quick and professional service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-black mb-6">Why Choose JapanLube?</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Authentic Japanese lubricant technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Certified professional technicians</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Competitive pricing with premium quality</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Convenient online booking system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Full-service petrol station and convenience store</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automotive care with premium Japanese lubricants and professional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
            >
              Book Service Now
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a wide range of premium automotive lubricants and products for your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-red-600 mb-4 text-center">
                  {product.image}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="font-bold text-black text-lg">{product.price}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.variants.map((variant, vIdx) => (
                    <span key={vIdx} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      {variant}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {product.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Premium Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality Japanese lubricants and automotive products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{product.image}</div>
                  <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mb-3">
                    {product.category}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-black text-sm mb-2">Available Variants:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.variants.map((variant, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-black text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                        <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <button 
                    onClick={() => scrollToSection('booking')}
                    className="w-full bg-red-600 text-white py-2 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
            >
              Get Quote for Products
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-bold text-black">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Book Your Appointment</h2>
            <p className="text-xl text-gray-600">
              Schedule your car service online and experience the JapanLube difference
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Car Make *</label>
                <input
                  type="text"
                  name="carMake"
                  value={formData.carMake}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="e.g., Toyota, Honda, Maruti"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Car Model *</label>
                <input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="e.g., Camry, City, Swift"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Service Type *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="">Select a service</option>
                  <option value="oil-change">Oil Change</option>
                  <option value="engine-check">Engine Check</option>
                  <option value="full-service">Full Car Servicing</option>
                  <option value="other">Other Service</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Preferred Time *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="">Select time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
                >
                  Book Appointment Now
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                <strong>Note:</strong> We will confirm your appointment within 24 hours via phone or email.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-red-600" />
                  Quick Response
                </span>
                <span className="flex items-center">
                  <Phone className="w-4 h-4 mr-1 text-red-600" />
                  Phone Confirmation
                </span>
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-red-600" />
                  Professional Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Visit our petrol station or get in touch with us</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full p-3">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2">Our Location</h4>
                      <p className="text-gray-700">
                        Eastliegh Nairobi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full p-3">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2">Phone Number</h4>
                      <p className="text-gray-700">
                        {PHONE_NUMBER}<br />
                        WhatsApp: {PHONE_NUMBER}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full p-3">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2">Opening Hours</h4>
                      <p className="text-gray-700">
                        Monday - Saturday: 8:00 AM - 8:00 PM<br />
                        Sunday: 9:00 AM - 6:00 PM<br />
                        Fuel Station: 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full p-3">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2">Email Address</h4>
                      <p className="text-gray-700">
                        info@japanlube.com<br />
                        service@japanlube.com<br />
                        support@japanlube.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-black mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => scrollToSection('booking')}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                  >
                    Book Service Online
                  </button>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
                    className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors block text-center"
                  >
                    Call Now
                  </a>
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full border-2 border-red-600 text-red-600 py-3 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-colors block text-center"
                  >
                    WhatsApp Chat
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-black mb-4">Emergency Service</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Need immediate assistance? Our emergency service is available 24/7 for urgent automotive needs.
                  </p>
                  {/* Emergency number removed as per "use only one number" */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div
                  className="bg-white border border-gray-200 shadow flex items-center justify-center"
                  style={{
                    width: '80px',
                    height: '56px',
                    borderRadius: '999px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white'
                  }}
                >
                  <img
                    src="/img/japablub-logo.jpeg"
                    alt="JapanLube Logo"
                    className="object-cover"
                    style={{
                      width: '76px',
                      height: '52px',
                      borderRadius: '999px',
                      display: 'block'
                    }}
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">JAPANLUBE</h1>
                  <p className="text-gray-400 text-sm">Premium Lubricant Oil</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your trusted partner for premium automotive care and superior Japanese lubricant oils. 
                Experience the difference with professional service and quality products.
              </p>
              <div className="flex space-x-4">
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-red-600 hover:text-red-400">
                  <Phone className="w-6 h-6" />
                </a>
                <a href="mailto:info@japanlube.com" className="text-red-600 hover:text-red-400">
                  <Mail className="w-6 h-6" />
                </a>
                <a href={WHATSAPP_LINK} className="text-red-600 hover:text-red-400">
                  <ShoppingCart className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('booking')} className="hover:text-white transition-colors">Book Appointment</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Oil Change Service</li>
                <li>Engine Diagnostics</li>
                <li>Full Car Servicing</li>
                <li>Fuel Station</li>
                <li>Emergency Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 JapanLube Premium Lubricant Oil. All rights reserved. | 
              <span className="text-red-600"> Book Now and Keep Your Car Running Smoothly!</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;