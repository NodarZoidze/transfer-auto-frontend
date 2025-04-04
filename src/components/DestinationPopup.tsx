"use client";
import { useState } from 'react';

export default function DestinationPopup({
  isOpen,
  onClose,
  onContinue
}: {
  isOpen: boolean,
  onClose: () => void,
  onContinue: (destination: { id: string; label: string; distance: string }) => void
}) {
  const [selectedDestination, setSelectedDestination] = useState('foti-tbilisi');

  const destinations = [
    { id: 'poti-tbilisi', label: 'Poti - Tbilisi', distance: '300km' },
    { id: 'poti-batumi', label: 'Poti - Batumi', distance: '70km' },
    { id: 'batumi-tbilisi', label: 'Batumi - Tbilisi', distance: '350km' },
    { id: 'a-b', label: 'Other city', distance: 'X km' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[500px] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Choose Your Transport Route</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <p className="mb-4">Select a city-to-city route for your vehicle delivery</p>

        <input type="text" placeholder="Search" className="w-full border rounded-lg p-2 mb-4" />

        <div className="space-y-3 max-h-48 overflow-auto">
          {destinations.map(dest => (
            <label
              key={dest.id}
              className={`flex items-center justify-between border p-3 rounded-lg cursor-pointer ${selectedDestination === dest.id ? 'border-purple-500 bg-purple-50' : ''}`}
            >
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
                <p className="text-xs text-gray-500">Distance: {dest.distance}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button className="text-gray-600 underline" onClick={onClose}>Back</button>
          <button
            onClick={() => {
              const selected = destinations.find(d => d.id === selectedDestination);
              if (selected) onContinue(selected);
            }}
            className="bg-purple-600 text-white w-full py-2 rounded-full mt-4"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
