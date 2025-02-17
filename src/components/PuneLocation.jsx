import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faClock, faParking } from '@fortawesome/free-solid-svg-icons';

function PuneLocation() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-800 to-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">How to Reach ION Digital Zone</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">IDZ Ramtekdi (1, 2 & 3), Hadapsar, Pune</p>
            <a 
              href="https://g.co/kgs/xUNKu7z" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Quick Info */}
        <section className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Quick Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-600" />
                <p className="font-medium">Nearest Station</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">Hadapsar Railway Station</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faClock} className="text-blue-600" />
                <p className="font-medium">Distance</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">2.5 km from station</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faParking} className="text-blue-600" />
                <p className="font-medium">Parking</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">Available 24/7</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
                <p className="font-medium">Contact</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">+91-20-XXXXXXXX</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Location Details */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Location Details</h2>
            <div className="space-y-4">
              <p><strong>Address:</strong> ION Digital Zone, Ramtekdi Industrial Area, Hadapsar, Pune, Maharashtra</p>
              <p><strong>Landmarks:</strong> Near Magarpatta City</p>
              <p><strong>Pin Code:</strong> 411013</p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-800">Working Hours</h3>
                <p className="text-sm mt-2">Building Access: 24/7</p>
                <p className="text-sm">Reception: Monday to Sunday, 24 hours</p>
              </div>
            </div>
          </section>

          {/* Transport Options */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Transport Options</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-blue-600">By Train</h3>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Nearest Station: Hadapsar Railway Station</li>
                  <li>Auto fare: ₹50-70</li>
                  <li>Distance: 2.5 km</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-600">By Bus</h3>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>PMPML Bus Routes: 65, 77, 82</li>
                  <li>Bus Stop: Ramtekdi (2-minute walk)</li>
                  <li>Fare: ₹20-30</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Additional Information */}
        <section className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-medium text-blue-600">Nearby Landmarks</h3>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Magarpatta City (2 km)</li>
                <li>Amanora Mall (3.5 km)</li>
                <li>Hadapsar Industrial Estate (1 km)</li>
                <li>Seasons Mall (4 km)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-600">Amenities</h3>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>24/7 Security</li>
                <li>Food Court</li>
                <li>ATMs</li>
                <li>Medical Facility</li>
                <li>EV Charging Points</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-600">Contact Information</h3>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Reception: +91-20-XXXXXXXX</li>
                <li>Security: +91-20-XXXXXXXX</li>
                <li>Facility Manager: +91-20-XXXXXXXX</li>
                <li>Emergency: 112</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PuneLocation;