import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

interface InquiryData {
  name: string;
  number: string;
}

export default function Inquiry() {
  const [inquiries] = useState<InquiryData[]>([
    { name: "Yogesh Parmar", number: "9876543210" },
    { name: "Amit Shah", number: "9988776655" },
    { name: "Priya Sharma", number: "9123456789" },
  ]);

  const exportData = () => {
    const csv = [
      ["Name", "Number"],
      ...inquiries.map((row) => [row.name, row.number]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inquiries.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageMeta title="Inquiry" description="Manage your inquiries" />
      <PageBreadcrumb pageTitle="Customer Inquiries" />

     <div className="p-6 mb-8 rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900 transition">
  {/* Header */}
  <div className="flex justify-start items-center mb-6">
   
    <button
      onClick={exportData}
      className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-md transition-transform hover:scale-[1.02]"
    >
      <i className="pi pi-download text-sm"></i>
      Export Data
    </button>
  </div>

  {/* Desktop Table */}
  <div className="hidden md:block">
    <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
      <thead className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <tr>
          <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Name
          </th>
          <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Number
          </th>
        </tr>
      </thead>
      <tbody>
        {inquiries.map((inq, idx) => (
          <tr
            key={idx}
            className="border-t border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
          >
            <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">
              {inq.name}
            </td>
            <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
              {inq.number}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Mobile Cards */}
  <div className="grid gap-4 md:hidden">
    {inquiries.map((inq, idx) => (
      <div
        key={idx}
        className="p-5 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition hover:shadow-lg"
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Name
          </p>
          <span className="px-2 py-0.5 text-xs rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
            Inquiry
          </span>
        </div>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {inq.name}
        </p>

        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-3">
          Number
        </p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {inq.number}
        </p>
      </div>
    ))}
  </div>
</div>

    </>
  );
}
