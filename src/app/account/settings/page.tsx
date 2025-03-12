"use client";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaCamera,
  FaBell,
  FaTrash,
} from "react-icons/fa";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  billingAddress: string;
}

interface PasswordData {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  billingAddress?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
  profilePicture?: string; // Added profilePicture to FormErrors
}

const AccountSettingsPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phoneNumber: "+1234567890",
    billingAddress: "123 Main St, Apt 4B",
  });

  const [passwordData, setPasswordData] = useState<PasswordData>({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(true);
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrors({ ...errors, profilePicture: "Please upload an image file" });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setErrors({
          ...errors,
          profilePicture: "Image size must be less than 5MB",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateProfileForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number is invalid (e.g., +1234567890)";
    }
    if (!formData.billingAddress.trim())
      newErrors.billingAddress = "Billing address is required";

    return newErrors;
  };

  const validatePasswordForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!passwordData.oldPassword)
      newErrors.oldPassword = "Old password is required";
    if (!passwordData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (passwordData.newPassword.length < 8) {
      newErrors.newPassword = "New password must be at least 8 characters long";
    }
    if (passwordData.confirmNewPassword !== passwordData.newPassword) {
      newErrors.confirmNewPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateProfileForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSuccessMessage("Profile updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
    console.log(
      "Profile update attempted with:",
      formData,
      "Profile Picture:",
      profilePicture
    );
    // Add actual profile update logic here (e.g., API call)
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validatePasswordForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSuccessMessage("Password changed successfully!");
    setPasswordData({
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
    setTimeout(() => setSuccessMessage(""), 3000);
    console.log("Password change attempted with:", passwordData);
    // Add actual password change logic here (e.g., API call)
  };

  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    setSuccessMessage(
      `Notifications ${notificationsEnabled ? "disabled" : "enabled"}!`
    );
    setTimeout(() => setSuccessMessage(""), 3000);
    // Add actual notification toggle logic here
  };

  const handleDeactivateAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to deactivate your account? This action cannot be undone."
      )
    ) {
      console.log("Account deactivation attempted");
      // Add actual deactivation logic here (e.g., API call)
    }
  };

  return (
    <section className="bg-[#E5E5E5] min-h-screen py-[10rem] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl font-extrabold text-[#333333]">
            Account <span className="text-[#FB7E11]">Settings</span>
          </h1>
          <p className="text-[#666666] text-lg">
            Manage your profile, password, and preferences.
          </p>
        </motion.div>

        {/* Success Message */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-green-100 text-green-800 px-4 py-2 rounded-lg mb-4 text-center"
          >
            {successMessage}
          </motion.div>
        )}

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Personal Information Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Personal Information
            </h2>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-[#333333] font-medium"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                      placeholder="John"
                      required
                      aria-label="First name"
                    />
                    {errors.firstName && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.firstName}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                {/* Last Name */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-[#333333] font-medium"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                      placeholder="Doe"
                      required
                      aria-label="Last name"
                    />
                    {errors.lastName && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.lastName}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Email */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-[#333333] font-medium"
                >
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                    placeholder="your@email.com"
                    required
                    aria-label="Email address"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              {/* Phone Number */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-[#333333] font-medium"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleFormChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                    placeholder="+1234567890"
                    required
                    aria-label="Phone number"
                  />
                  {errors.phoneNumber && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.phoneNumber}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              {/* Billing Address */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="billingAddress"
                  className="block text-[#333333] font-medium"
                >
                  Billing Address
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                  <input
                    type="text"
                    id="billingAddress"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleFormChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.billingAddress
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                    placeholder="123 Main St, Apt 4B"
                    required
                    aria-label="Billing address"
                  />
                  {errors.billingAddress && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.billingAddress}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(251, 126, 17, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#FB7E11] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E56E00] focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300"
              >
                Save Changes
              </motion.button>
            </form>
          </motion.div>

          {/* Profile Picture Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Profile Picture
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32 border-4 border-[#FB7E11]/30">
                <AvatarImage
                  src={profilePicture || "https://via.placeholder.com/150"}
                  alt="Profile Picture"
                />
                <AvatarFallback className="bg-gray-200 text-[#333333] text-4xl">
                  {formData.firstName.charAt(0)}
                  {formData.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="hidden"
              />
              <motion.label
                htmlFor="profilePicture"
                variants={itemVariants}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(251, 126, 17, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#FB7E11] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#E56E00] cursor-pointer transition-all duration-300"
              >
                <FaCamera /> Upload New Picture
              </motion.label>
              {errors.profilePicture && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm"
                >
                  {errors.profilePicture}
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Change Password Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Change Password
            </h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              {/* Old Password */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="oldPassword"
                  className="block text-[#333333] font-medium"
                >
                  Old Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                  <input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    value={passwordData.oldPassword}
                    onChange={handlePasswordChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.oldPassword ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                    placeholder="••••••••"
                    required
                    aria-label="Old password"
                  />
                  {errors.oldPassword && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.oldPassword}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* New Password */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="newPassword"
                    className="block text-[#333333] font-medium"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.newPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                      placeholder="••••••••"
                      required
                      aria-label="New password"
                    />
                    {errors.newPassword && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.newPassword}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                {/* Confirm New Password */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="confirmNewPassword"
                    className="block text-[#333333] font-medium"
                  >
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                    <input
                      type="password"
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      value={passwordData.confirmNewPassword}
                      onChange={handlePasswordChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.confirmNewPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                      placeholder="••••••••"
                      required
                      aria-label="Confirm new password"
                    />
                    {errors.confirmNewPassword && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.confirmNewPassword}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              </div>

              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(251, 126, 17, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#FB7E11] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E56E00] focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300"
              >
                Change Password
              </motion.button>
            </form>
          </motion.div>

          {/* Additional Settings Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Additional Settings
            </h2>
            <div className="space-y-4">
              {/* Notifications */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <FaBell className="text-[#FB7E11]" />
                  <span className="text-[#333333] font-medium">
                    Email Notifications
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleToggleNotifications}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                    notificationsEnabled ? "bg-[#FB7E11]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                      notificationsEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </motion.button>
              </motion.div>

              {/* Deactivate Account */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <FaTrash className="text-[#FB7E11]" />
                  <span className="text-[#333333] font-medium">
                    Deactivate Account
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDeactivateAccount}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
                >
                  Deactivate
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccountSettingsPage;
