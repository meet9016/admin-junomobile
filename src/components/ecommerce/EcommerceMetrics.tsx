import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxCubeIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";

type props = {
  totalProducts: number | string;
  totalOrders: number | string;
}

export default function EcommerceMetrics({ totalProducts, totalOrders }: props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxCubeIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {/* Customers */}
              Total Products
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {totalProducts}
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            0.00%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          {/* <PageIcon className="text-gray-800 size-6 dark:text-white/90" /> */}
          <i className="pi pi-whatsapp text-xl"></i>
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {/* Orders */}
              Total Inquiry
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {totalOrders}
            </h4>
          </div>

          <Badge color="error">
            <ArrowDownIcon />
            0.00%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
  {/* Icon */}
  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
    <i className="pi pi-users text-xl text-[#241B4B]"></i>
  </div>

  {/* Content */}
  <div className="flex items-end justify-between mt-5">
    <div>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Total Followers
      </span>
      <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
        50
      </h4>
    </div>

    {/* Growth Badge */}
    <Badge color="success">
      <ArrowUpIcon />
      12.5%
    </Badge>
  </div>
</div>

    </div>
  );
}
