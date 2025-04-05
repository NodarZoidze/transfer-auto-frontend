"use client";
import { useState } from 'react';

export default function BookingPopup({ isOpen, onClose, onContinue }: {
  isOpen: boolean,
  onClose: () => void,
  onContinue: (transport: string) => void
}) {
  const [selectedOption, setSelectedOption] = useState('sedan');

  if (!isOpen) return null;

  const transportTypes = [
    { id: 'sedan', label: 'Sedan', desc: 'Standard car – ideal for personal or family vehicles', icon: '/sedan.svg' },
    { id: 'jeep', label: 'SUV', desc: 'Larger vehicles with more space or off-road capability', icon: '/jeep.svg' },
    { id: 'motorcycle', label: 'Motorcycle', desc: 'Two-wheeled vehicles, handled with secure equipment', icon: '/motorcycle.svg' },
    { id: 'furgon', label: 'Van', desc: 'Commercial or multi-passenger transport vehicles', icon: '/furgon.svg' },
  ];

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[500px] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Select Vehicle Type</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <p className="mb-4">Choose what kind of vehicle you want to transport.</p>

        <div className="space-y-3">
          {transportTypes.map(option => (
            <label key={option.id} className={`flex items-center justify-between border p-3 rounded-lg cursor-pointer ${selectedOption === option.id ? 'border-purple-500 bg-purple-50' : ''}`}>
              <input
                type="radio"
                name="transport"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => setSelectedOption(option.id)}
                className="form-radio text-purple-600"
              />
              <img src={option.icon} className="h-6 w-6" />
              <div className="flex-1 ml-3">
                <p className="font-semibold">{option.label}</p>
                <p className="text-xs text-gray-500">{option.desc}</p>
              </div>
            </label>
          ))}
        </div>

        <button
  onClick={() => onContinue(selectedOption)}
  className="bg-purple-600 text-white w-full py-2 rounded-full mt-4"
>
  Next
</button>





      </div>
    </div>
  );
}
