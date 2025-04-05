"use client";
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";


export default function PersonalInfoPopup({
  isOpen,
  onClose,
  onContinue,
  transportType,
  destination
}: {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  transportType: string | null;
  destination: {
    id: string;
    label: string;
    distance: string;
  } | null;
}) {




  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carDetails, setCarDetails] = useState('');

  const handleSubmit = async () => {
    const bookingData = {
      fullName,
      email,
      phone,
      carDetails,
      transportType,
      destination,
      createdAt: new Date()
    };

    try {
      await addDoc(collection(db, "bookings"), bookingData);
      onContinue(); // Show success popup
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      alert("შეცდომა მონაცემების შენახვისას.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[500px] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Enter Your Contact & Vehicle Details</h2>
          <button onClick={onClose}>✕</button>
        </div>

        

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border rounded-lg p-2 mb-4"
        />

        <div className="flex gap-2 mb-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border rounded-lg p-2"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 border rounded-lg p-2"
          />
        </div>

        <textarea
          placeholder="Vehicle Information"
          value={carDetails}
          onChange={(e) => setCarDetails(e.target.value)}
          className="w-full border rounded-lg p-2 mb-4"
          rows={4}
        />

        <div className="flex justify-between mt-6">
          <button className="text-gray-600 underline" onClick={onClose}>Back</button>
          <button
            className="bg-purple-600 text-white py-2 px-6 rounded-full"
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
