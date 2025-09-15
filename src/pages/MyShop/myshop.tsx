import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";

export default function MyShop() {
  return (
    <>
      <PageMeta
        title="Support"
        description="This is the Support page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="My Shop" />

      <div className="p-2  mb-5 bg-white dark:bg-gray-900">
        <div className="w-full flex flex-col md:flex-row gap-6">
          {/* Left: Logo Upload */}
          <div className="relative w-full md:w-1/3 flex flex-col items-center mt-4">
            <img
              src="https://superadmin.progressalliance.org/upload/product_images/2025/09/2025-09-11/840107124_869071771.jpg"
              alt="Logo"
              className="w-[500px] h-[500px] object-cover shadow-lg border border-gray-200 rounded-2xl"
            />
            <button className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md transition">
              <i className="pi pi-pencil text-base"></i>
            </button>
            <p className="mt-3 text-sm text-gray-500 dark:text-red/70">
              Size: 500x500
            </p>
          </div>

          {/* Right: Form */}
          <div className="flex flex-col flex-1 gap-6 mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90">
              Business Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <Label htmlFor="name">Shop Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter business name"
                  //   value={editData?.name}
                  //   onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="name">GST Number</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter GST Number"
                  //   value={editData?.name}
                  //   onChange={handleChange}
                />
              </div>

              {/* Number */}
              <div>
                <Label htmlFor="number">Phone Number</Label>
                <Input
                  type="text"
                  name="number"
                  placeholder="Enter phone number"
                  //   value={editData?.number}
                  //   onChange={handleChange}
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input
                  type="text"
                  name="whatsapp"
                  placeholder="Enter WhatsApp number"
                  //   value={editData?.whatsapp}
                  //   onChange={handleChange}
                />
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  name="address"
                  placeholder="Street address"
                  //   value={editData?.address}
                  //   onChange={handleChange}
                />
              </div>

              {/* City */}
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  //   value={editData?.city}
                  //   onChange={handleChange}
                />
              </div>

              {/* State */}
              <div>
                <Label htmlFor="state">State</Label>
                <Input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  //   value={editData?.state}
                  //   onChange={handleChange}
                />
              </div>

              {/* Pincode */}
              <div>
                <Label htmlFor="pincode">Pincode</Label>
                <Input
                  type="text"
                  name="pincode"
                  placeholder="Enter pincode"
                  //   value={editData?.pincode}
                  //   onChange={handleChange}
                />
              </div>

              {/* Map Link */}
              <div className="w-full">
                <Label htmlFor="map_link">Map Link</Label>
                <Input
                  type="text"
                  name="map_link"
                  placeholder="Google Maps link"
                  //   value={editData?.map_link}
                  //   onChange={handleChange}
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                className="bg-[#241B4B] hover:bg-[#3a2d6e] text-white shadow-md px-6 py-2 rounded-lg transition"
                // onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6  mb-5 bg-white dark:bg-gray-900 shadow-lg rounded-2xl">
        <div className="w-full flex flex-col gap-8">
          {/* Top: Three Image Banners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-500 hover:shadow-2xl"
              >
                <img
                  src="https://superadmin.progressalliance.org/upload/product_images/2025/09/2025-09-11/840107124_869071771.jpg"
                  alt={`Banner ${i}`}
                  className="w-full h-44 md:h-60 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-4">
            <button
              className="bg-[#241B4B] hover:bg-[#3a2d6e] text-white shadow-md px-6 py-2 rounded-lg transition"
              // onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="p-2  mb-5 bg-white dark:bg-gray-900 shadow-lg rounded-2xl">
        <div className=" p-6">
          <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
            Social Links
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Facebook */}
            <div>
              <Label htmlFor="facebook">Facebook</Label>
              <Input
                type="text"
                name="facebook"
                placeholder="Facebook URL"
                // value={editData?.facebook}
                // onChange={handleSocialChange}
              />
            </div>

            {/* Instagram */}
            <div>
              <Label htmlFor="instagram">Instagram</Label>
              <Input
                type="text"
                name="instagram"
                placeholder="Instagram URL"
                // value={editData?.instagram_link}
                // onChange={handleSocialChange}
              />
            </div>

            {/* YouTube */}
            <div>
              <Label htmlFor="youtube">YouTube</Label>
              <Input
                type="text"
                name="youtube"
                placeholder="YouTube URL"
                // value={editData?.youtube_link}
                // onChange={handleSocialChange}
              />
            </div>

            {/* LinkedIn */}
            <div>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                type="text"
                name="linkedin"
                placeholder="LinkedIn URL"
                // value={editData?.linkdin_link}
                // onChange={handleSocialChange}
              />
            </div>

            {/* Website (full width) */}
            <div className="sm:col-span-2">
              <Label htmlFor="website">Website</Label>
              <Input
                type="text"
                name="website"
                placeholder="Website URL"
                // value={editData?.website_link}
                // onChange={handleSocialChange}
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-6">
            <button
              className="bg-[#241B4B] hover:bg-[#3a2d6e] text-white shadow-md px-6 py-2 rounded-lg transition"
              //   onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
