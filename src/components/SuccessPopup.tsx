"use client";

export default function SuccessPopup({ isOpen, onClose }: { 
  isOpen: boolean, 
  onClose: () => void 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[500px] p-6 text-center">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-left">სერვისის დაჯავშნა</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Progress bar */}
        <div className="flex justify-between mb-6">
          <div className="h-1 bg-purple-600 w-full rounded-full" />
        </div>

        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-green-600 text-3xl">✓</span>
        </div>

        <h3 className="text-xl font-bold mb-2">დაჯავშნა წარმატებით შესრულდა!</h3>
        <p className="text-sm text-gray-600">
          ჩვენი ოპერატორი მოგმართავთ და დაგეხმარებათ.
          ყველა დეტალი გაიგზავნება თქვენს მიერ მითითებულ ელ-ფოსტაზე.
        </p>
      </div>
    </div>
  );
}
