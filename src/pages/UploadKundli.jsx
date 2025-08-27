import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function UploadKundli() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");
  const [searchParams] = useSearchParams();

  const email = searchParams.get("email"); // still used internally
  const name = searchParams.get("name");   // shown to pandit

  const handleUpload = async () => {
    if (!file) {
      setMsg("⚠️ Please select a file first.");
      return;
    }

    setMsg("📤 Sending kundli...");

    const formData = new FormData();
    formData.append("kundli", file);
    formData.append("email", email);

    try {
      const res = await fetch("https://astro-backend-txdw.onrender.com/api/upload-kundli", {
        method: "POST",
        body: formData
      });

      await res.json();
      setMsg("✅ Kundli sent successfully!");

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.error(error);
      setMsg("❌ Error sending kundli.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Upload Kundli PDF
        </h2>
        <p className="text-center text-gray-600 mb-6">
          for <span className="font-semibold text-indigo-600">{name}</span>
        </p>

        <div className="flex flex-col items-center gap-4">
          <label className="w-full flex flex-col items-center px-4 py-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-100 transition">
            <input
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <span className="text-gray-500">
              {file ? file.name : "Click to choose a file"}
            </span>
          </label>

          <button
            onClick={handleUpload}
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            📤 Upload
          </button>
        </div>

        {msg && (
          <p
            className={`mt-4 text-center font-medium ${
              msg.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {msg}
          </p>
        )}
      </div>
    </div>
  );
}
