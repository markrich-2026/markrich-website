"use client";

import { useState } from "react";

export default function VerifyCertificate() {
  const [uid, setUid] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = async () => {
    if (!uid) return;

    try {
      const res = await fetch(`/api/certificates?uid=${encodeURIComponent(uid)}`);

      if (res.status === 404) {
        setResult(null);
        setError("No certificate found");
        return;
      }

      if (!res.ok) {
        setResult(null);
        setError("Server error, please try again later");
        return;
      }

      const data = await res.json();
      setResult(data);
      setError("");
    } catch (err) {
      console.error("Validation error:", err);
      setResult(null);
      setError("❌ Failed to connect to server");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-orange-100 to-orange-200 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-xl border-t-4 border-[#F58A07]">
        {/* Header */}
        <h2 className="text-center text-[#F58A07] font-bold text-lg sm:text-xl mb-4">
          Markrich Solutions
        </h2>
        <h1 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Certificate Verification Portal
        </h1>

        {/* Input + Button stacked */}
    <div className="flex flex-col gap-3 mb-4">
      <input
        type="text"
        value={uid}
        onChange={(e) => setUid(e.target.value)}
        placeholder="Enter Certificate ID"
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F58A07]"
      />
      <div className="flex justify-center">
        <button
          onClick={handleCheck}
          className="bg-[#F58A07] hover:bg-[#F58A07] text-white font-semibold px-6 py-2 rounded w-40"
        >
          Verify
        </button>
      </div>
    </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-center font-medium mt-2">{error}</p>
        )}

        {/* Result */}
        {result && (
          <div className="mt-6 border border-orange-200 bg-orange-50 rounded-lg p-4">
            <h3 className="text-orange-600 font-semibold text-lg mb-3">
              Certificate Verified ✅
            </h3>
            <p><b>Name:</b> {result.full_name}</p>
            <p><b>Training:</b> {result.course_name}</p>
            <p>
              <b>Date of Completion:</b>{" "}
              {new Date(result.completion_date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p className="italic text-sm text-gray-700 mt-2">
              Verified by Markrich Solutions LLP
            </p>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-8">
          © 2025 Markrich Solutions LLP | All Rights Reserved
        </p>
      </div>
    </div>
  );
}
