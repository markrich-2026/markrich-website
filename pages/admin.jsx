"use client";
import { useState } from "react";

export default function UploadCertificates() {
  const [uploadMsg, setUploadMsg] = useState("");
  const [helperMsg, setHelperMsg] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple check – replace with secure logic later
    if (credentials.username === "mark" && credentials.password === "Mark@123") {
      setIsAdmin(true);
      setLoginError("");
    } else {
      setLoginError("❌ Invalid credentials");
    }
  };

  const handleFileUpload = async (e) => {
    setUploadMsg("");
    setHelperMsg("");
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("excel", file);

    try {
      const res = await fetch("/api/certificates-bulk-upsert", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();

      if (!res.ok) {
        throw new Error(text || "Upload failed");
      }

      const result = JSON.parse(text);
      setUploadMsg(`✅ ${result.inserted} records inserted successfully`);
      setHelperMsg("You can choose more files to add if needed.");

      // Auto clear after 5 seconds
      setTimeout(() => {
        setUploadMsg("");
        setHelperMsg("");
      }, 5000);
    } catch (err) {
      console.error("Upload error:", err.message);
      setUploadMsg(`❌ Upload failed: ${err.message}`);

      // Auto clear after 5 seconds
      setTimeout(() => setUploadMsg(""), 5000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border-t-4 border-[#F58A07]">
        {!isAdmin ? (
          <>
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
              Admin Login
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F58A07]"
              />
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F58A07]"
              />
              <button
                type="submit"
                className="w-full bg-[#F58A07] hover:bg-[#e67c00] text-white font-semibold px-6 py-2 rounded"
              >
                Login
              </button>
            </form>
            {loginError && (
              <p className="text-red-500 text-center font-medium mt-4">
                {loginError}
              </p>
            )}
          </>
        ) : (
          <>
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
              Admin: Upload Excel
            </h1>

            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Choose Excel File</span>
              <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
                className="mt-2 block w-full text-sm text-gray-600
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-lg file:border-0
                           file:text-sm file:font-semibold
                           file:bg-[#F58A07] file:text-white
                           hover:file:bg-[#e67c00]
                           cursor-pointer"
              />
            </label>

            {uploadMsg && (
              <div
                className={`mt-4 text-center font-medium px-4 py-3 rounded-lg ${
                  uploadMsg.startsWith("✅")
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {uploadMsg}
              </div>
            )}

            {helperMsg && (
              <p className="mt-2 text-sm text-gray-500 text-center italic">
                {helperMsg}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
