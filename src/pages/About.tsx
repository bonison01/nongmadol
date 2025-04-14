
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Award, Users, Shield } from 'lucide-react';
import Newsletter from '@/components/Newsletter';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-nongmadol-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-gray-700 mb-8">
              Nongmadol is more than just a tea brand. We're a passionate team dedicated to bringing the finest tea from the hills of Manipur to tea lovers around the world.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523920290228-4f321a939b4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Tea plantation in Manipur" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2018, Nongmadol began with a simple mission: to share the exceptional teas of Manipur with the world while supporting local communities and sustainable farming practices.
              </p>
              <p className="text-gray-700 mb-4">
                We work directly with small-scale tea farmers in the lush green hills of Manipur, ensuring fair compensation and environmentally responsible cultivation methods.
              </p>
              <p className="text-gray-700 mb-6">
                Every cup of Nongmadol tea tells a story of tradition, craftsmanship, and the unique terroir of Northeast India.
              </p>
              <Button asChild className="bg-nongmadol-500 hover:bg-nongmadol-600">
                <Link to="/shop">Explore Our Teas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-700">
              The principles that guide everything we do at Nongmadol
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nongmadol-100 text-nongmadol-600 mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible farming and packaging practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nongmadol-100 text-nongmadol-600 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We source only the finest tea leaves and maintain rigorous standards at every step.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nongmadol-100 text-nongmadol-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                We support local farmers and their families through fair trade practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nongmadol-100 text-nongmadol-600 mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Authenticity</h3>
              <p className="text-gray-600">
                We preserve traditional tea making techniques while innovating for the future.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-700">
              The passionate individuals behind Nongmadol Tea
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Rahul Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Rahul Singh</h3>
              <p className="text-nongmadol-600 mb-3">Founder & Tea Master</p>
              <p className="text-gray-600 text-sm">
                With over 15 years of experience in the tea industry, Rahul brings his passion and expertise to every blend.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Meena Devi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Meena Devi</h3>
              <p className="text-nongmadol-600 mb-3">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Meena ensures smooth operations from farm to cup, maintaining our high standards of quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/67.jpg" 
                  alt="Akash Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Akash Kumar</h3>
              <p className="text-nongmadol-600 mb-3">Sustainability Director</p>
              <p className="text-gray-600 text-sm">
                Akash leads our environmental initiatives, ensuring responsible farming and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visit Us */}
      <section className="py-16 bg-nongmadol-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Tea Garden</h2>
              <p className="text-gray-700 mb-4">
                Experience the beauty of our tea gardens in Heingang, Manipur. Take a tour of our facilities, learn about tea production, and enjoy tea tasting sessions.
              </p>
              <p className="text-gray-700 mb-6">
                We welcome visitors Monday through Saturday, 9:00 AM to 4:00 PM. 
                Advance booking is recommended for group tours.
              </p>
              <Button asChild className="bg-nongmadol-500 hover:bg-nongmadol-600">
                <Link to="/contact">Contact Us for Tours</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1610563164791-ec773874a440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Nongmadol Tea Garden" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
};

export default About;
