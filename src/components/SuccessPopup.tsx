"use client";

export default function SuccessPopup({ isOpen, onClose }: {
  isOpen: boolean,
  onClose: () => void
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[500px] p-6 text-center">
        <div className="flex justify-between items-center mb-4">

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

        <h3 className="text-xl font-bold mb-2">Booking Successfully Submitted!</h3>
        <p className="text-sm text-gray-600">
        Thank you — your request has been received and is being processed.

        You’ll receive a confirmation email shortly with the delivery details and next steps.
        If you have any questions in the meantime, feel free to reach out.

       📩 info@transferauto.ge
       📞 +995 (Your Number) <br />
       Average response time: under 1 hour during business hours.
        </p>
      </div>
    </div>
  );
}
