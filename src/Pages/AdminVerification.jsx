import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyAdminMutation } from "../features/api/adminApi";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AdminVerification = () => {
  const [adminKey, setAdminKey] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [verifyAdmin, { isLoading }] = useVerifyAdminMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await verifyAdmin(adminKey).unwrap();
      if (result.success) {
        localStorage.setItem("adminKey", adminKey);
        toast.success("Admin verified successfully");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      toast.error(error.data?.message || "Verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-10 border border-blue-200">
        <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-8">
          🔐 Admin Verification
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Admin Key
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              className="block w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-700"
              placeholder="Enter your admin key"
              required
            />
            <span
              className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-800 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 disabled:bg-gray-400"
          >
            {isLoading ? "Verifying..." : "Verify Admin"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminVerification;
