import React, { useState } from 'react';
import { Heart, Shield, Clock, Users, Star, Phone, Mail, MapPin, ChevronDown, Menu, X } from 'lucide-react';

export default function MedicalLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Heart className="w-8 h-8 text-green-500" />,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced diagnostic and treatment options."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response and expert medical attention."
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Family Medicine",
      description: "Complete healthcare solutions for patients of all ages and backgrounds."
    }
  ];

  const features = [
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      title: "24/7 Availability",
      description: "Round-the-clock medical care whenever you need it most."
    },
    {
      icon: <Star className="w-12 h-12 text-green-500" />,
      title: "Expert Specialists",
      description: "Board-certified physicians with years of specialized experience."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and cutting-edge treatments."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-green-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">MediCare+</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-black hover:text-green-500 font-medium transition-colors no-underline text-xl" style={{ textDecoration: 'none' }}>Home</a>
              <a href="#about" className="text-black hover:text-green-500 font-medium transition-colors no-underline text-xl" style={{ textDecoration: 'none' }}>About</a>
              <a href="#services" className="text-black hover:text-green-500 font-medium transition-colors no-underline text-xl" style={{ textDecoration: 'none' }}>Services</a>
              <a href="#contact" className="text-black hover:text-green-500 font-medium transition-colors no-underline text-xl" style={{ textDecoration: 'none' }}>Contact</a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-gray-700 hover:text-green-500 font-medium transition-colors">
                Login
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Register
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-500">Home</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-500">About</a>
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-500">Services</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-500">Contact</a>
                <div className="flex space-x-2 px-3 py-2">
                  <button className="text-gray-700 hover:text-green-500">Login</button>
                  <button className="bg-green-500 text-white px-4 py-1 rounded">Register</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Health, Our
              <span className="text-green-500 block">Priority</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience world-class healthcare with our team of expert physicians and cutting-edge medical technology. Your well-being is our commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transform hover:scale-105 transition-all">
                Book Appointment
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About MediCare+</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a mission to provide accessible, high-quality healthcare to our community, MediCare+ has been serving patients for over two decades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                We believe healthcare should be compassionate, comprehensive, and accessible to everyone. Our dedicated team of medical professionals works tirelessly to ensure every patient receives personalized care tailored to their unique needs.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading healthcare provider in our region, known for excellence in patient care, medical innovation, and community health initiatives.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">50,000+</div>
                  <div className="text-gray-600">Patients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">150+</div>
                  <div className="text-gray-600">Medical Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
                  <div className="text-gray-600">Emergency Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MediCare+?</h2>
            <p className="text-xl text-gray-600">
              Discover what makes us the preferred healthcare choice for thousands of families
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">
              Comprehensive healthcare services designed to meet all your medical needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:bg-green-50 transition-colors group">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-500 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Medical Attention?</h3>
            <p className="text-green-100 mb-6">Our emergency department is open 24/7 with expert medical staff ready to help.</p>
            <button className="bg-white text-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Emergency Services
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Ready to experience exceptional healthcare? Contact us today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-300">Emergency: +1 (555) 911-HELP</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-300">info@medicareplus.com</p>
              <p className="text-gray-300">appointments@medicareplus.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-300">123 Healthcare Boulevard</p>
              <p className="text-gray-300">Medical City, MC 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-green-500 mr-2" />
                <span className="text-2xl font-bold">MediCare+</span>
              </div>
              <p className="text-gray-400 mb-4">
                Providing exceptional healthcare services with compassion and expertise since 1999.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Emergency Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Cardiology</a></li>
                <li><a href="#" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Family Medicine</a></li>
                <li><a href="#" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Pediatrics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Website Creator</h4>
              <div className="text-gray-400 space-y-2">
                <p className="font-medium text-white">Dr. Sarah Johnson</p>
                <p>Chief Technology Officer</p>
                <p>Email: sarah.j@medicareplus.com</p>
                <p>Phone: +1 (555) 987-6543</p>
                <p>LinkedIn: /in/sarah-johnson-md</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MediCare+. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}