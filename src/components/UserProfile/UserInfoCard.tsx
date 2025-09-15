import Input from "../form/input/InputField";
import Label from "../form/Label";
import { useEffect, useState } from "react";
import endPointApi from "../../pages/utils/endPointApi";
import api from "../../pages/utils/axiosInstance";
import { toast } from "react-toastify";

interface FormData {
  full_name: string;
  number: string;
  company_name: string;
  address: string;
  facebook: string;
  instagram_link: string;
  youtube_link: string;
  linkdin_link: string;
  website_link: string;
}

export default function UserInfoCard() {
  // const { isOpen, closeModal } = useModal();

  const [editData, setFormData] = useState<FormData>({
    full_name: "",
    number: "",
    company_name: "",
    address: "",
    facebook: "",
    instagram_link: "",
    youtube_link: "",
    linkdin_link: "",
    website_link: "",
  });
  const [selectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setSelectedImage(file);
  //     setPreviewUrl(URL.createObjectURL(file));
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.post(`${endPointApi.profile}`);
        console.log("res.data.data", res.data.data);

        if (res.data && res.data.data) {
          setFormData({
            full_name: res.data.data.full_name || "",
            number: res.data.data.number || "",
            company_name: res.data.data.company_name || "",
            address: res.data.data.address || "",
            facebook: res.data.data.facebook || "", // Default to empty string if not available
            instagram_link: res.data.data.instagram_link || "",
            youtube_link: res.data.data.youtube_link || "",
            linkdin_link: res.data.data.linkdin_link || "",
            website_link: res.data.data.website_link || "",
          });
          setPreviewUrl(res.data.data.business_logo);
        }
      } catch (error) {
        console.log("API Error", error);
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("full_name", editData?.full_name);
      formData.append("number", editData?.number);
      formData.append("company_name", editData?.company_name);
      formData.append("address", editData?.address);
      formData.append("gender", "male");
      formData.append("user_image", "male");

      if (selectedImage) {
        formData.append("business_logo", selectedImage); // Match your API's expected field
      }
      const res = await api.post(
        `${endPointApi.supplierEditProfile}`,
        formData
      );
      console.log("res.data.data", res);

      if (res.data.status == 200) {
        toast.success("Profile update successfully!");
      }
    } catch (error) {
      console.log("API Error", error);
    }
  };
  const [, setSocialLinks] = useState({
    facebook: "",
    x: "https://x.com/PimjoHQ",
    linkedin: "https://www.linkedin.com/company/pimjo",
    instagram: "https://instagram.com/PimjoHQ",
  });

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialLinks((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div className="p-2  mb-5 bg-white dark:bg-gray-900">
       <div className="w-full flex flex-col md:flex-row gap-6">


  {/* Right: Form */}
  <div className="flex flex-col flex-1 gap-6">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90">
      Profile Information
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <Label htmlFor="full_name">Full Name</Label>
        <Input
          type="text"
          name="full_name"
          placeholder="Enter your full name"
          value={editData?.full_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="number">Phone Number</Label>
        <Input
          type="text"
          name="number"
          placeholder="Enter your number"
          value={editData?.number}
          onChange={handleChange}
        />
      </div>
    </div>

    {/* Save Button */}
    <div className="flex justify-end">
      <button
        className="bg-[#241B4B] hover:bg-[#3a2d6e] text-white shadow-md px-6 py-2 rounded-lg transition"
        onClick={handleSave}
      >
        Save Changes
      </button>
    </div>
  </div>
</div>

      </div>
    </>
  );
}
