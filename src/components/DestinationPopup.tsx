"use client";
import { useState } from 'react';

export default function DestinationPopup({ isOpen, onClose, onContinue }: {
    isOpen: boolean,
    onClose: () => void,
    onContinue: () => void
  }) {
  
  const [selectedDestination, setSelectedDestination] = useState('foti-tbilisi');
  const destinations = [
    { id: 'foti-tbilisi', label: 'ფოთი - თბილისი', distance: '350კმ' },
    { id: 'foti-qutaisi', label: 'ფოთი - ქუთაისი', distance: '250კმ' },
    { id: 'foti-zugdidi', label: 'ფოთი - ზუგდიდი', distance: '100კმ' },
    { id: 'batumi-tbilisi', label: 'ბათუმი - თბილისი', distance: '370კმ' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[500px] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">სერვისის დაჯავშნა</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <p className="mb-4">აირჩიე მიმართულება</p>

        <input type="text" placeholder="ძებნა" className="w-full border rounded-lg p-2 mb-4"/>

        <div className="space-y-3 max-h-48 overflow-auto">
          {destinations.map(dest => (
            <label key={dest.id} className={`flex items-center justify-between border p-3 rounded-lg cursor-pointer ${selectedDestination === dest.id ? 'border-purple-500 bg-purple-50' : ''}`}>
              <input
                type="radio"
                name="destination"
                value={dest.id}
                checked={selectedDestination === dest.id}
                onChange={() => setSelectedDestination(dest.id)}
                className="form-radio text-purple-600"
              />
              <div className="flex-1 ml-3">
                <p className="font-semibold">{dest.label}</p>
                <p className="text-xs text-gray-500">მანძილი: {dest.distance}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="flex justify-between mt-6">
        <button className="text-gray-600 underline" onClick={onClose}>უკან</button>
  <button className="bg-purple-600 text-white py-2 px-6 rounded-full" onClick={onContinue}>
    გაგრძელება
  </button>

        </div>
      </div>
    </div>
  );
}
