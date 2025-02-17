import React from 'react';

function DelhiLocation() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-800 to-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">How to Reach ION Digital Zone - IDZ-1 & IDZ-2, Sarita Vihar, Delhi</h1>
            <a 
              href="https://maps.app.goo.gl/679bZmsGsPFdJHJX8" 
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quick Info */}
          <section className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-600 md:col-span-2">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Quick Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">Nearest Metro</p>
                <p className="text-sm text-gray-600">Sarita Vihar (Violet Line)</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">Distance from Metro</p>
                <p className="text-sm text-gray-600">1.2 km (5-7 min drive)</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">Parking</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">Nearest Landmark</p>
                <p className="text-sm text-gray-600">Apollo Hospital</p>
              </div>
            </div>
          </section>

          {/* Location Details */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Location Details</h2>
            <div className="space-y-4">
              <p><strong>Address:</strong> ION Digital Zone, Sarita Vihar, New Delhi, Delhi</p>
              <p><strong>Landmarks:</strong> Near Apollo Hospital, Jasola</p>
              <p><strong>Pin Code:</strong> 110076</p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-800">Working Hours</h3>
                <p className="text-sm mt-2">Building Access: 24/7</p>
                <p className="text-sm">Reception: Monday to Sunday, 24 hours</p>
              </div>
            </div>
          </section>

          {/* Map Link */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Map Location</h2>
            <div className="space-y-4">
              <a 
                href="https://maps.app.goo.gl/679bZmsGsPFdJHJX8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full text-center"
              >
                Open in Google Maps
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Click the button above to get directions using Google Maps
              </p>
            </div>
          </section>

          {/* Public Transport */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">By Public Transport</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-blue-600">Metro</h3>
                <div className="mt-2 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium">Nearest Metro Station:</p>
                    <p className="text-sm mt-1">Sarita Vihar (Violet Line)</p>
                    <p className="text-xs text-gray-600 mt-1">Connected to Central Secretariat, Kashmere Gate, and Faridabad</p>
                  </div>
                  <div>
                    <p className="font-medium">From metro station:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                      <li>Take auto-rickshaw or e-rickshaw (₹30-40)</li>
                      <li>5-7 minutes drive from station</li>
                      <li>Follow signs to Apollo Hospital</li>
                      <li>Alternative: 15-minute walk via Sarita Vihar Road</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-600">Bus</h3>
                <div className="mt-2">
                  <p>DTC Bus Routes:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>Route 34: Nehru Place to Sarita Vihar</li>
                    <li>Route 47: Kalkaji to Apollo Hospital</li>
                    <li>Route 51: Mathura Road to Sarita Vihar</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">Bus Stop: Apollo Hospital (2-minute walk)</p>
                </div>
              </div>
            </div>
          </section>

          {/* By Car */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">By Car</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-blue-600">From Central Delhi</h3>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Take Mathura Road/NH 2 towards Faridabad</li>
                  <li>Turn right at Apollo Hospital signal</li>
                  <li>ION Digital Zone is visible on the right</li>
                  <li>Approximate time: 30-45 minutes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-600">From Noida</h3>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Take DND Flyway</li>
                  <li>Exit towards Sarita Vihar</li>
                  <li>Follow signs to Apollo Hospital</li>
                  <li>Approximate time: 20-30 minutes</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-green-700">Parking Information</h3>
                <ul className="mt-2 space-y-2 text-green-800">
                  <li>• 24/7 secure parking available</li>
                  <li>• Both covered and open parking</li>
                  <li>• Dedicated visitor parking area</li>
                  <li>• Valet service available</li>
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
                <li>Apollo Hospital (0.3 km)</li>
                <li>Jasola Apollo Metro Station (1.2 km)</li>
                <li>Sarita Vihar Market (1.5 km)</li>
                <li>Jasola District Centre (2 km)</li>
                <li>Kalindi Kunj Park (3 km)</li>
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
              <h3 className="text-xl font-medium text-blue-600">Emergency Contacts</h3>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Building Security: 24/7</li>
                <li>Apollo Hospital: 0.3 km</li>
                <li>Police Station: 1 km</li>
                <li>Fire Station: 2 km</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Food Options */}
        <section className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Food & Refreshments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-blue-600">Inside Building</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Food Court (Ground Floor)</li>
                <li>Café Coffee Day</li>
                <li>Vending Machines</li>
                <li>Multiple Small Eateries</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-600">Nearby Options</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Sarita Vihar Market Restaurants</li>
                <li>Jasola Sports Complex Cafeteria</li>
                <li>Multiple Food Delivery Options</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>• Location Map</li>
                <li>• Metro Directions</li>
                <li>• Parking Information</li>
                <li>• Emergency Contacts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Building Hours</h3>
              <ul className="space-y-2">
                <li>• Building Access: 24/7</li>
                <li>• Reception: 24 Hours</li>
                <li>• Visitor Entry: 24 Hours</li>
                <li>• Parking: Always Available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Important Note</h3>
              <p className="text-sm text-gray-400">Information provided is for guidance. Times may vary during holidays or special circumstances.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© 2023 iosdigitalzonesodho</p>
            <p className="mt-2 text-sm text-gray-400">Last Updated: November 2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DelhiLocation;