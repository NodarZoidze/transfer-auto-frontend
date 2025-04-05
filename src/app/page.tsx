"use client";
import { useState } from 'react';
import BookingPopup from '@/components/BookingPopup';
import DestinationPopup from '@/components/DestinationPopup';
import PersonalInfoPopup from '@/components/PersonalInfoPopup';
import SuccessPopup from '@/components/SuccessPopup';
import Header from '@/components/Header';




export default function Home() {
  const [isTransportPopupOpen, setTransportPopupOpen] = useState(false);
  const [isDestinationPopupOpen, setDestinationPopupOpen] = useState(false);
  const [isPersonalInfoPopupOpen, setPersonalInfoPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [selectedTransport, setSelectedTransport] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<{
    id: string;
    label: string;
    distance: string;
  } | null>(null);






  return (

    <main className="min-h-screen bg-white">
      <Header />



      <section className="container mx-auto px-8 py-16 flex items-center justify-between">

        {/* Left Side: Text Content */}
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            Fast, Safe & Affordable <br/>
            Car Transport from<br />
            
            <span className="text-purple-600">Port to Your City</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
          We specialize in hassle-free car delivery directly from port to your doorstep. 
          Get your vehicle delivered securely, on time, and at a competitive price.
          </p>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-full"
            onClick={() => setTransportPopupOpen(true)} >
            Get Quote
          </button>
        </div>

        <section className="container mx-auto px-8 py-16">
          <div className="relative flex justify-center items-center">

            {/* Map Image */}
            <img
              src="/map.svg"
              alt="Map"
              className="relative z-10 w-full max-w-[600px] h-auto"
            />
          </div>
        </section>


      </section>

      <section id="services" className="container mx-auto px-8 py-16">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Our Specialized Car Transport Services</h2>
        <p className="text-center text-gray-600 mt-2">
        We offer secure and efficient transport for every type of
         vehicle — from sedans and SUVs to motorcycles and vans.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-12">

          {/* Sedan */}
          <div className="bg-green-50 rounded-xl p-6 flex items-center justify-between shadow-sm">
            <div>
              <h3 className="text-xl font-semibold mb-2">Sedan</h3>
              <p className="text-sm text-gray-600">Reliable Sedan Transport from Port to Your City <br />
              Safe and fast delivery of your sedan directly from the port to your location. Ideal for 
              everyday cars and private owners.</p>
              <button className="mt-4 text-purple-600 font-semibold"
                onClick={() => setTransportPopupOpen(true)}>book →</button>
            </div>
            <img src="/sedan.svg" alt="Sedan" className="h-24 w-auto" />
          </div>

          {/* Motorcycle */}
          <div className="bg-purple-50 rounded-xl p-6 flex items-center justify-between shadow-sm">
            <div>
              <h3 className="text-xl font-semibold mb-2">Motorcycle</h3>
              <p className="text-sm text-gray-600">Motorcycle Shipping with Extra Care <br />
              Professional transport for motorcycles using secure equipment and handling. 
              From the port to your garage — no hassle.</p>
              <button className="mt-4 text-purple-600 font-semibold"
                onClick={() => setTransportPopupOpen(true)}
              >book →</button>
            </div>
            <img src="/motorcycle.svg" alt="Motorcycle" className="h-24 w-auto" />
          </div>

          {/* Jeep */}
          <div className="bg-blue-50 rounded-xl p-6 flex items-center justify-between shadow-sm">
            <div>
              <h3 className="text-xl font-semibold mb-2">SUV</h3>
              <p className="text-sm text-gray-600">Port-to-City SUV Delivery Services <br />
              Get your SUV transported from port to destination with full insurance and experienced drivers.
              Large vehicles? No problem.</p>
              <button className="mt-4 text-purple-600 font-semibold"
                onClick={() => setTransportPopupOpen(true)}>book →</button>
            </div>
            <img src="/jeep.svg" alt="Jeep" className="h-24 w-auto" />
          </div>

          {/* Furgon */}
          <div className="bg-yellow-50 rounded-xl p-6 flex items-center justify-between shadow-sm">
            <div>
              <h3 className="text-xl font-semibold mb-2">Van</h3>
              <p className="text-sm text-gray-600">Transport for Vans and Larger Vehicles <br />
              We handle vans, cargo vehicles, and commercial transport with ease — from port to 
              business or personal address.</p>
              <button className="mt-4 text-purple-600 font-semibold"
                onClick={() => setTransportPopupOpen(true)}>book →</button>
            </div>
            <img src="/furgon.svg" alt="Furgon" className="h-24 w-auto" />
          </div>

        </div>
      </section>

      <section id="destinations" className="bg-purple-50 py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Popular Port-to-City Transport Routes</h2>
          <p className="text-gray-600 mb-8">
          Choose the route that fits your needs — fast, secure car delivery from port to your 
          destination, with transparent pricing.
          </p>

          <div className="grid grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Poti → Tbilisi</h3>
              <p className="text-sm text-gray-500">Distance: 300 km</p>
              <p className="text-sm text-gray-500">Delivery Time: 1-2 day</p>
              <p className="font-bold mt-4">Price: ₾350</p>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full mt-4">book</button>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Poti → Batumi</h3>
              <p className="text-sm text-gray-500">Distance: 70 km</p>
              <p className="text-sm text-gray-500">Delivery Time: 1-2 day</p>
              <p className="font-bold mt-4">Price: ₾200</p>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full mt-4">book</button>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Batumi → Tbilisi</h3>
              <p className="text-sm text-gray-500">Distance: 350 km</p>
              <p className="text-sm text-gray-500">Delivery Time: 1-2 day</p>
              <p className="font-bold mt-4">Price: ₾500</p>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full mt-4">book</button>
            </div>

          </div>
        </div>
      </section>

      <section id="whyUs" className="container mx-auto px-8 py-16 flex items-center justify-between">

        {/* Left Side (Reasons List) */}
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-2">Why us</h2>
          <p className="text-gray-600 mb-8">
          At TransferAuto, we specialize in reliable car transportation from major ports to cities 
          across Georgia. Whether you're importing a personal vehicle or managing deliveries for a 
          dealership, our fully insured and professional service guarantees a smooth and secure experience. 
          Our expert drivers and logistics team ensure every car arrives safely, on time — every time.
          </p>

          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-center p-4 border rounded-xl shadow-sm">
              <div className="bg-purple-100 text-purple-600 rounded-lg p-2 font-semibold">სწ</div>
              <div className="ml-4">
                <h3 className="font-semibold">Trusted by car buyers, dealers & importers</h3>
                <p className="text-sm text-gray-500">We’ve built long-term trust with thousands of 
                  customers — from individuals importing vehicles to major auto dealers.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center p-4 border rounded-xl shadow-sm">
              <div className="bg-blue-100 text-blue-600 rounded-lg p-2 font-semibold">უ</div>
              <div className="ml-4">
                <h3 className="font-semibold">Transparent pricing, no hidden fees</h3>
                <p className="text-sm text-gray-500">Know what you’re paying for. Our quotes include 
                  everything — no surprise charges, ever.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center p-4 border rounded-xl shadow-sm">
              <div className="bg-green-100 text-green-600 rounded-lg p-2 font-semibold">კ</div>
              <div className="ml-4">
                <h3 className="font-semibold">Real-time updates on delivery status</h3>
                <p className="text-sm text-gray-500">Track your car every step of the way with 
                  our live delivery tracking system.</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center p-4 border rounded-xl shadow-sm">
              <div className="bg-orange-100 text-orange-600 rounded-lg p-2 font-semibold">გ</div>
              <div className="ml-4">
                <h3 className="font-semibold">Experienced drivers and logistics team</h3>
                <p className="text-sm text-gray-500">Your car is in good hands — driven by professionals, 
                  handled by experts, and delivered with care.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Truck Image) */}
        <div className="w-1/2 flex justify-center">
          <img src="/truck.svg" alt="Truck" className="rounded-xl shadow-lg" />
        </div>

      </section>

      <section id="contact" className="bg-purple-50 py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Get in Touch with TransferAuto</h2>
          <p className="text-gray-600 mb-8">Have questions or ready to book? Our friendly 
            team is here to help you with everything from quotes to vehicle status updates.</p>

          <div className="grid grid-cols-3 gap-6">

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="mb-4 text-purple-500">
                ✉️
              </div>
              <h3 className="text-lg font-semibold">Email Us</h3>
              <p className="text-sm text-gray-500">Send us your inquiry — we’ll respond within one business day.</p>
              <a href="mailto:info@transferauto.ge" className="mt-4 block text-purple-600 font-semibold">
                info@transferauto.ge
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="mb-4 text-purple-500">
                📍
              </div>
              <h3 className="text-lg font-semibold">Visit Us</h3>
              <p className="text-sm text-gray-500">Our office is open for appointments.</p>
              <address className="mt-4 block text-purple-600 font-semibold">
                123 Transport Street Tbilisi, Georgia
              </address>
            </div>

            {/* Call Card */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="mb-4 text-purple-500">
                📞
              </div>
              <h3 className="text-lg font-semibold">Call Us</h3>
              <p className="text-sm text-gray-500">We’re available Monday to Friday, 9:00 AM – 5:00 PM.</p>
              <a href="tel:+15550000000" className="mt-4 block text-purple-600 font-semibold">
                +1 (555) 000-0000
              </a>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-white py-10 border-t">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <img src="/Logo.svg" alt="TransferAuto" className="h-4 w-auto" />

            {/* Navigation Links */}
            <nav className="flex space-x-6 text-gray-700">
              <a href="#main" className="hover:text-purple-600">Home</a>
              <a href="#services" className="hover:text-purple-600">Services</a>
              <a href="#destinations" className="hover:text-purple-600">Destinations</a>
              <a href="#whyUs" className="hover:text-purple-600">About Us</a>
              <a href="#contact" className="hover:text-purple-600">Contact</a>
            </nav>

            {/* Social Icons */}
            <div className="flex space-x-4 text-purple-600">
              <a href="#">Twitter</a>
              <a href="#">Dribbble</a>
              <a href="#">LinkedIn</a>
            </div>

          </div>

          <div className="flex justify-between items-center mt-6 border-t pt-4 text-xs text-gray-500">
            <span>TransferAuto © 2024</span>
            <a href="#" className="hover:text-purple-600">წესები და პირობები</a>
          </div>
        </div>
      </footer>
      <BookingPopup
        isOpen={isTransportPopupOpen}
        onClose={() => setTransportPopupOpen(false)}
        onContinue={(selected) => {
          setTransportPopupOpen(false);
          setSelectedTransport(selected); // Save selection
          setDestinationPopupOpen(true);
        }}
      />

      <DestinationPopup
        isOpen={isDestinationPopupOpen}
        onClose={() => setDestinationPopupOpen(false)}
        onContinue={(destination) => {
          setSelectedDestination(destination); // ✅ Save it
          setDestinationPopupOpen(false);
          setPersonalInfoPopupOpen(true);
        }}
      />

      <PersonalInfoPopup
        isOpen={isPersonalInfoPopupOpen}
        onClose={() => setPersonalInfoPopupOpen(false)}
        onContinue={() => {
          setPersonalInfoPopupOpen(false);
          setSuccessPopupOpen(true);
        }}
        transportType={selectedTransport}
        destination={selectedDestination}
      />


      <SuccessPopup
        isOpen={isSuccessPopupOpen}
        onClose={() => setSuccessPopupOpen(false)}
      />



    </main>

  );
}
