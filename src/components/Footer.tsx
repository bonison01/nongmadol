
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-nongmadol-600">Nongmadol</span>
            </Link>
            <p className="text-gray-600">
              Premium tea products crafted with care from the lush hills of Manipur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-nongmadol-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-nongmadol-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-nongmadol-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-nongmadol-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-nongmadol-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-nongmadol-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-nongmadol-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=black-tea" className="text-gray-600 hover:text-nongmadol-500">
                  Black Tea
                </Link>
              </li>
              <li>
                <Link to="/shop?category=green-tea" className="text-gray-600 hover:text-nongmadol-500">
                  Green Tea
                </Link>
              </li>
              <li>
                <Link to="/shop?category=herbal-tea" className="text-gray-600 hover:text-nongmadol-500">
                  Herbal Tea
                </Link>
              </li>
              <li>
                <Link to="/shop?category=tea-sets" className="text-gray-600 hover:text-nongmadol-500">
                  Tea Sets
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-nongmadol-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Heingang, Manipur, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-nongmadol-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-nongmadol-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">info@nongmadol.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nongmadol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
