import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

export default function AdvertisePage() {
  const [mainDays, setMainDays] = useState(7);
  const [subDays, setSubDays] = useState(7);

  // Example price calculation
  const pricePerDay = {
    main: 100, // 100 Rs per day
    sub: 50,   // 50 Rs per day
  };

  const totalPrice = mainDays * pricePerDay.main + subDays * pricePerDay.sub;

  const handlePay = () => {
    alert(`Proceeding to payment: ₹${totalPrice}`);
  };

  return (
    <>
      <PageMeta title="Advertise" description="Promote your products" />
      <PageBreadcrumb pageTitle="Advertise with Us" />

     <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    {/* Left: Banner */}
    <div className="lg:col-span-9">
      <img
        src="https://img.freepik.com/free-vector/flat-design-digital-marketing-illustration_23-2149193310.jpg"
        alt="Advertise Banner"
        className="w-full h-[420px] object-cover rounded-xl shadow-md"
      />
    </div>

    {/* Right: Ad Options */}
    <div className="lg:col-span-3 flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          Advertise Your Brand
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Choose your banner package and duration. Promote your shop to
          thousands of customers.
        </p>
      </div>

      {/* Main Banner */}
      <div className="p-4 border rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm flex items-center justify-between gap-3">
        <h4 className="font-semibold text-gray-800 dark:text-white whitespace-nowrap">
          Main Banner
        </h4>
        <select
          value={mainDays}
          onChange={(e) => setMainDays(Number(e.target.value))}
          className="rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 px-3 py-2 text-sm"
        >
          <option value={7}>7 Days</option>
          <option value={14}>14 Days</option>
          <option value={28}>28 Days</option>
        </select>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
          ₹{mainDays * pricePerDay.main}
        </span>
      </div>

      {/* Sub Banner */}
      <div className="p-4 border rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm flex items-center justify-between gap-3">
        <h4 className="font-semibold text-gray-800 dark:text-white whitespace-nowrap">
          Sub Banner
        </h4>
        <select
          value={subDays}
          onChange={(e) => setSubDays(Number(e.target.value))}
          className="rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 px-3 py-2 text-sm"
        >
          <option value={7}>7 Days</option>
          <option value={14}>14 Days</option>
          <option value={28}>28 Days</option>
        </select>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
          ₹{subDays * pricePerDay.sub}
        </span>
      </div>

      {/* Total & Pay Now */}
      <div className="mt-4 p-4 border rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">
        <p className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Total: ₹{totalPrice}
        </p>
        <button
          onClick={handlePay}
          className="w-full  bg-[#251c4b] text-white 
               hover:bg-[#3a2d6e] hover:shadow-md text-white font-medium px-6 py-3 rounded-xl shadow-md transition transform hover:scale-[1.02]"
        >
          Pay Now
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
