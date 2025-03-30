"use client";
"use client";
import { useState } from 'react';
import BookingPopup from '@/components/BookingPopup';
import DestinationPopup from '@/components/DestinationPopup';
import PersonalInfoPopup from '@/components/PersonalInfoPopup';
import SuccessPopup from '@/components/SuccessPopup';


export default function Home() {
  const [isTransportPopupOpen, setTransportPopupOpen] = useState(false);
  const [isDestinationPopupOpen, setDestinationPopupOpen] = useState(false);
  const [isPersonalInfoPopupOpen, setPersonalInfoPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);



  return (
    
    <main className="min-h-screen bg-white">
      <header className="py-4 px-8 shadow-sm">
  <nav className="container mx-auto flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center">
      <img src="/logo.png" alt="TransferAuto" className="h-8 w-auto mr-8" />
    </div>

    {/* Menu Items */}
    <div className="flex space-x-8 font-medium text-gray-700 items-center">
      <a href="#" className="px-3 py-1 rounded-full bg-purple-100 text-purple-600">მთავარი</a>
      <a href="#" className="hover:text-purple-600 transition">სერვისები</a>
      <a href="#" className="hover:text-purple-600 transition">მისამართები</a>
      <a href="#" className="hover:text-purple-600 transition">რატომ ჩვენ</a>
      <a href="#" className="hover:text-purple-600 transition">კონტაქტი</a>
    </div>

    {/* Language Selector */}
    <div>
      <button className="border border-purple-500 text-purple-500 rounded-full px-4 py-1 flex items-center">
        GEO
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  </nav>
</header>


<section className="container mx-auto px-8 py-16 flex items-center justify-between">

  {/* Left Side: Text Content */}
  <div className="w-1/2 pr-8">
    <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
      ჩვენ გთავაზობთ<br />
      სისწრაფეს და<br />
      <span className="text-purple-600">სანდოობას</span>
    </h2>
    <p className="mt-4 text-gray-600 text-lg">
      ჩვენ შეგიმუშავებთ ოპტიმიზირებულ მარშრუტებს სწრაფად და უსაფრთხოდ, პორტიდან თქვენს კარამდე - ერთიანი პროცედურებით.
    </p>
    <button
  className="bg-purple-600 text-white px-4 py-2 rounded-full"
  onClick={() => setTransportPopupOpen(true)}
>
  დაჯავშნა
</button>
  </div>

  {/* Right Side: Image with Blur Effects */}
  <div className="w-1/2 relative flex justify-center items-center">
    {/* Left blur effect */}
    <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-purple-500 opacity-20 blur-[120px] rounded-full h-64 w-64"></div>

    {/* Right blur effect */}
    <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-purple-500 opacity-20 blur-[120px] rounded-full h-64 w-64"></div>

    {/* Map Image */}
    <img 
      src="/map.svg" 
      alt="Transport Map" 
      className="rounded-xl shadow-lg relative z-10"
    />
  </div>

</section>
<section className="container mx-auto px-8 py-16">
  <h2 className="text-3xl font-extrabold text-center text-gray-900">აირჩიე ტრანსპორტის ტიპი</h2>
  <p className="text-center text-gray-600 mt-2">
    ჩვენ ვაკავშირებთ ყველა ტიპის ავტოტრანსპორტს ყველაზე გავრცელებული მარშრუტებით ტრანსპორტირებისთვის.
  </p>

  <div className="grid grid-cols-2 gap-6 mt-12">

    {/* Sedan */}
    <div className="bg-green-50 rounded-xl p-6 flex items-center justify-between shadow-sm">
      <div>
        <h3 className="text-xl font-semibold mb-2">სედანი</h3>
        <p className="text-sm text-gray-600">ტვირთის მიწოდება რეგულარული ავტომობილის სტანდარტით</p>
        <button className="mt-4 text-purple-600 font-semibold">დაჯავშნა →</button>
      </div>
      <img src="/sedan.svg" alt="Sedan" className="h-24 w-auto"/>
    </div>

    {/* Motorcycle */}
    <div className="bg-purple-50 rounded-xl p-6 flex items-center justify-between shadow-sm">
      <div>
        <h3 className="text-xl font-semibold mb-2">მოტოციკლი</h3>
        <p className="text-sm text-gray-600">ტვირთის მიწოდება პატარა ზომის ავტომობილის სტანდარტით</p>
        <button className="mt-4 text-purple-600 font-semibold">დაჯავშნა →</button>
      </div>
      <img src="/motorcycle.svg" alt="Motorcycle" className="h-24 w-auto"/>
    </div>

    {/* Jeep */}
    <div className="bg-blue-50 rounded-xl p-6 flex items-center justify-between shadow-sm">
      <div>
        <h3 className="text-xl font-semibold mb-2">ჯიპი</h3>
        <p className="text-sm text-gray-600">ტვირთის მიწოდება მაღალი გამავლობის ავტომობილის სტანდარტით</p>
        <button className="mt-4 text-purple-600 font-semibold">დაჯავშნა →</button>
      </div>
      <img src="/jeep.svg" alt="Jeep" className="h-24 w-auto"/>
    </div>

    {/* Furgon */}
    <div className="bg-yellow-50 rounded-xl p-6 flex items-center justify-between shadow-sm">
      <div>
        <h3 className="text-xl font-semibold mb-2">ფურგონი</h3>
        <p className="text-sm text-gray-600">ტვირთის მიწოდება დიდი ზომის ავტომობილის სტანდარტით</p>
        <button className="mt-4 text-purple-600 font-semibold">დაჯავშნა →</button>
      </div>
      <img src="/furgon.svg" alt="Furgon" className="h-24 w-auto"/>
    </div>

  </div>
</section>
<section className="bg-purple-50 py-16 px-8">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-2">პოპულარული მიმართულებები</h2>
    <p className="text-gray-600 mb-8">
      ჩვენ ვაკავშირებთ ყველა ტიპის ავტოტრანსპორტს ყველაზე გავრცელებული მარშრუტებით ტრანსპორტირებისთვის.
    </p>

    <div className="grid grid-cols-3 gap-6">

      {/* Card 1 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold">ფოთი → თბილისი</h3>
        <p className="text-sm text-gray-500">ხანგრძლივობა: 350 კმ</p>
        <p className="text-sm text-gray-500">ჩამოსვლის დრო: 1-2 დღე</p>
        <p className="text-sm text-gray-500">სერვისი: სედანი</p>
        <p className="font-bold mt-4">$350</p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full mt-4">დაჯავშნა</button>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold">ფოთი → ქუთაისი</h3>
        <p className="text-sm text-gray-500">ხანგრძლივობა: 350 კმ</p>
        <p className="text-sm text-gray-500">ჩამოსვლის დრო: 1-2 დღე</p>
        <p className="text-sm text-gray-500">სერვისი: ჯიპი</p>
        <p className="font-bold mt-4">$250</p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full mt-4">დაჯავშნა</button>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold">ფოთი → ზუგდიდი</h3>
        <p className="text-sm text-gray-500">ხანგრძლივობა: 350 კმ</p>
        <p className="text-sm text-gray-500">ჩამოსვლის დრო: 1-2 დღე</p>
        <p className="text-sm text-gray-500">სერვისი: ფურგონი</p>
        <p className="font-bold mt-4">$300</p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full mt-4">დაჯავშნა</button>
      </div>

    </div>
  </div>
</section>
<section className="container mx-auto px-8 py-16 flex items-center justify-between">

  {/* Left Side (Reasons List) */}
  <div className="w-1/2">
    <h2 className="text-3xl font-bold mb-2">რატომ ჩვენ</h2>
    <p className="text-gray-600 mb-8">
      ჩვენ გთავაზობთ პროფესიონალურ მომსახურებას, რომელიც აღემატება მოლოდინს
    </p>

    <div className="space-y-4">
      {/* Item 1 */}
      <div className="flex items-center p-4 border rounded-xl shadow-sm">
        <div className="bg-purple-100 text-purple-600 rounded-lg p-2 font-semibold">სწ</div>
        <div className="ml-4">
          <h3 className="font-semibold">სწრაფი და საიმედო</h3>
          <p className="text-sm text-gray-500">ტვირთის მიწოდება ყოველთვის დროზე.</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center p-4 border rounded-xl shadow-sm">
        <div className="bg-blue-100 text-blue-600 rounded-lg p-2 font-semibold">უ</div>
        <div className="ml-4">
          <h3 className="font-semibold">უსაფრთხო ტრანსპორტი</h3>
          <p className="text-sm text-gray-500">ბაზარზე არსებული ყველაზე დაცული გზებით.</p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-center p-4 border rounded-xl shadow-sm">
        <div className="bg-green-100 text-green-600 rounded-lg p-2 font-semibold">კ</div>
        <div className="ml-4">
          <h3 className="font-semibold">კონკურენტული ფასები</h3>
          <p className="text-sm text-gray-500">ხარისხიანი სერვისი, გონივრულ ფასებში.</p>
        </div>
      </div>

      {/* Item 4 */}
      <div className="flex items-center p-4 border rounded-xl shadow-sm">
        <div className="bg-orange-100 text-orange-600 rounded-lg p-2 font-semibold">გ</div>
        <div className="ml-4">
          <h3 className="font-semibold">გამოცდილი გუნდი</h3>
          <p className="text-sm text-gray-500">პროფესიონალები თქვენთან მუშაობენ.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Side (Truck Image) */}
  <div className="w-1/2 flex justify-center">
    <img src="/truck.svg" alt="Truck" className="rounded-xl shadow-lg" />
  </div>

</section>
<section className="bg-purple-50 py-16 px-8">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-2">ჩვენ სიამოვნებით მოგისმენთ</h2>
    <p className="text-gray-600 mb-8">დაკავშირება ჩვენს მეგობრულ გუნდთან.</p>

    <div className="grid grid-cols-3 gap-6">

      {/* Email Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="mb-4 text-purple-500">
          ✉️
        </div>
        <h3 className="text-lg font-semibold">მოგვწერეთ</h3>
        <p className="text-sm text-gray-500">ელ-ფოსტა ჩვენს მეგობრულ გუნდს.</p>
        <a href="mailto:info@transferauto.ge" className="mt-4 block text-purple-600 font-semibold">
          info@transferauto.ge
        </a>
      </div>

      {/* Location Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="mb-4 text-purple-500">
          📍
        </div>
        <h3 className="text-lg font-semibold">გვესტუმრეთ</h3>
        <p className="text-sm text-gray-500">ეწვიეთ ჩვენს ოფისს.</p>
        <address className="mt-4 block text-purple-600 font-semibold">
          123 Transport Street Tbilisi, Georgia
        </address>
      </div>

      {/* Call Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="mb-4 text-purple-500">
          📞
        </div>
        <h3 className="text-lg font-semibold">დაგვირეკეთ</h3>
        <p className="text-sm text-gray-500">ორშ-პარ: 9:00 - 17:00</p>
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
      <img src="/logo.png" alt="TransferAuto" className="h-8 w-auto" />

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-purple-600">მთავარი</a>
        <a href="#" className="hover:text-purple-600">მანქანები</a>
        <a href="#" className="hover:text-purple-600">მისამართები</a>
        <a href="#" className="hover:text-purple-600">რატომ ჩვენ</a>
        <a href="#" className="hover:text-purple-600">კონტაქტი</a>
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
  onContinue={() => {
    console.log("Clicked Continue from page.tsx");
    setTransportPopupOpen(false);
    setDestinationPopupOpen(true);
  }}
/>


<DestinationPopup
  isOpen={isDestinationPopupOpen}
  onClose={() => setDestinationPopupOpen(false)}
  onContinue={() => {
    setDestinationPopupOpen(false);
    setPersonalInfoPopupOpen(true);
  }}
/>


<PersonalInfoPopup
  isOpen={isPersonalInfoPopupOpen}
  onClose={() => setPersonalInfoPopupOpen(false)}
  onContinue={() => {
    console.log("Success popup should now open");
    setPersonalInfoPopupOpen(false);
    setSuccessPopupOpen(true);
  }}
/>

<SuccessPopup
  isOpen={isSuccessPopupOpen}
  onClose={() => setSuccessPopupOpen(false)}
/>



    </main>

  );
}
