import { useState } from "react";

export default function App() {
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");

  const handleZipChange = (e) => setZip(e.target.value);

  const handleCheckZip = () => {
    const P1 = ["92101", "92102", "92103"];
    const P2 = ["92021", "92020", "92019"];
    const FL_Zips = ["33101", "33109", "33122"];

    if (P1.includes(zip)) {
      setMessage("📦 Catalog Only: Please browse available products.");
    } else if (P2.includes(zip)) {
      setMessage("🛠️ Purchase + Installation Available in your area.");
    } else if (FL_Zips.includes(zip)) {
      setMessage("🚫 Installation not available in Florida.");
    } else {
      setMessage("❓ ZIP Code not recognized. Please try again.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 px-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 tracking-tight">
          ZIP Code Availability Checker
        </h1>
        <input
          type="text"
          value={zip}
          onChange={handleZipChange}
          placeholder="Enter ZIP code"
          className="border border-gray-300 rounded-lg px-4 py-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
        <button
          onClick={handleCheckZip}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg w-full transition duration-200"
        >
          Check Availability
        </button>
        {message && (
          <div className="mt-6 text-lg font-medium text-gray-700 animate-fadeIn">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}
