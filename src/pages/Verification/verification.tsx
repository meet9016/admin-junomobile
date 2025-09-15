import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { useState } from "react";

export default function Verification() {
  const [video, setVideo] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleVerify = () => {
    if (video) {
      // Upload API Logic
      alert("Verification submitted successfully!");
    } else {
      alert("Please upload a video first.");
    }
  };

  return (
    <>
      <PageMeta title="Verification" description="Verify your identity" />
      <PageBreadcrumb pageTitle="Verification" />

      <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Banner */}
          <div className="lg:col-span-9">
            <img
              src="https://img.freepik.com/free-vector/security-concept-illustration_114360-497.jpg"
              alt="Verification Banner"
              className="w-full h-[420px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Right: Info & Upload */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Identity Verification
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                To complete your verification, please upload a short video.
                Ensure your face is clearly visible.
              </p>
            </div>

            {/* Upload Box */}
            <div className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 hover:border-indigo-500 transition">
              <label
                htmlFor="video-upload"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <i className="pi pi-video text-3xl text-indigo-600 mb-2"></i>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {video ? video.name : "Upload your video (Max 2MB)"}
                </span>
                <input
                  id="video-upload"
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            {/* Video Tips */}
            <div className="bg-indigo-50 dark:bg-indigo-900/40 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                Video Guidelines
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-5">
                <li>Ensure good lighting</li>
                <li>Face the camera directly</li>
                <li>Keep video under 30 seconds</li>
                <li>Maximum file size: 2MB</li>
              </ul>
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerify}
              className="w-full  bg-[#251c4b] text-white 
               hover:bg-[#3a2d6e] hover:shadow-md  text-white font-medium px-6 py-3 rounded-xl shadow-md transition transform hover:scale-[1.02]"
            >
              Verify Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
