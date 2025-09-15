import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Product from "./pages/Product/Product";
import ProductForm from "./pages/Product/ProductForm";
import ProtectedRoute from "./routes/ProtectedRoute";
import Order from "./pages/Order/Order";
import Toaster from "./components/common/Toaster";
import Fail from "./pages/Payment/Fail";
import Success from "./pages/Payment/Success";
import Support from "./pages/Support/Support";
import Subscription from "./pages/Subscription/Subscription";
import MyShop from "./pages/MyShop/myshop";
import Inquiry from "./pages/Inquiry/inquiry";
import Followers from "./pages/Followers/followers";
import Verification from "./pages/Verification/verification";
import AdvertisePage from "./pages/Advertise/advertise";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Toaster />
        <Routes>
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/profile" element={<UserProfiles />} />
              <Route path="/product" element={<Product />} />
              <Route path="/order" element={<Order />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/support" element={<Support />} />
              <Route path="/myshop" element={<MyShop />} />
              <Route path="/inquiry" element={<Inquiry />} />
              <Route path="/followers" element={<Followers />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/advertise" element={<AdvertisePage />} />
              <Route path="/add-product" element={<ProductForm />} />
              <Route path="/form-elements" element={<FormElements />} />
              <Route path="/basic-tables" element={<BasicTables />} />
            </Route>
          </Route>
          <Route path="/payment-success" element={<Success />} />
          <Route path="/payment-failed" element={<Fail />} />

          {/* Public Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
