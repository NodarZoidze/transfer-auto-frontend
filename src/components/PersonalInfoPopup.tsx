"use client";
import { useState } from 'react';

export default function PersonalInfoPopup({ isOpen, onClose, onContinue }: { 
  isOpen: boolean, 
  onClose: () => void, 
  onContinue: () => void 
}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carDetails, setCarDetails] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[500px] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">სერვისის დაჯავშნა</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <p className="mb-4 font-medium">შეავსე პირადი დეტალები</p>

        <input
          type="text"
          placeholder="სრული სახელი"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border rounded-lg p-2 mb-4"
        />

        <div className="flex gap-2 mb-4">
          <input
            type="email"
            placeholder="ელ-ფოსტა"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border rounded-lg p-2"
          />
          <input
            type="tel"
            placeholder="მობილურის ნომერი"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 border rounded-lg p-2"
          />
        </div>

        <textarea
          placeholder="დამატებითი ინფორმაცია"
          value={carDetails}
          onChange={(e) => setCarDetails(e.target.value)}
          className="w-full border rounded-lg p-2 mb-4"
          rows={4}
        />

        <div className="flex justify-between mt-6">
          <button className="text-gray-600 underline" onClick={onClose}>უკან</button>
          <button
  className="bg-purple-600 text-white py-2 px-6 rounded-full"
  onClick={() => {
    console.log("Continue from PersonalInfoPopup");
    onContinue();
  }}
>
  გაგრძელება
</button>

        </div>
      </div>
    </div>
  );
}
