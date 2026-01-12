import React from 'react';

const SettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8">
      {/* Breadcrumbs & Heading */}
      <div className="flex flex-col gap-2">
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-widest">
          <a className="hover:text-primary transition-colors" href="#">
            Dashboard
          </a>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary">Settings</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
          <div>
            <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Account Settings</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Manage your business profile, notification thresholds, and security preferences.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              Cancel
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      {/* Personal Information Card */}
      <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Personal Information</h2>
        </div>
        <div className="p-6 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <div
                className="size-24 rounded-full bg-center bg-no-repeat bg-cover border-4 border-white dark:border-gray-800 shadow-md"
                data-alt="Profile picture of the user"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoD82I9wjwTYLgldgHb9L-z71C0UcTBbR3szOqp1l_kwenLuMP1-CO4SrjgxEJjJI-uFAYvdQYONC6SGKc_aY6LKsVxg2_zTFMI7eclWo7p0wa3khI_JaiueM8ox8q2PIfOdTIs8ww-7g3k1byG2c1l0MYUZq_G9Oo_vpEHRGdsju-TG7aDEQdTiTJ8ATkf0UVZTjAw0x7TtVJmURo-C7Q_VGRpJIIrPfFntTFvk7h6eP8D_Nvj5rc58zVKYtEYpXvy15OtcVEBMQn")',
                }}
              ></div>
              <button className="absolute bottom-0 right-0 size-8 bg-primary rounded-full flex items-center justify-center text-white border-2 border-white dark:border-gray-800 shadow-sm">
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Profile Photo</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Update your avatar. Recommended size: 400x400px.</p>
              <div className="flex gap-2 mt-2">
                <button className="text-xs font-bold text-primary hover:underline">Upload New</button>
                <span className="text-xs text-gray-300">|</span>
                <button className="text-xs font-bold text-red-500 hover:underline">Remove</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Business Name</label>
              <input
                className="form-input rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5"
                type="text"
                value="Arctic Foods Wholesalers Ltd."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Contact Person</label>
              <input
                className="form-input rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5"
                type="text"
                value="Alex Richardson"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
              <input
                className="form-input rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5"
                type="email"
                value="alex@arcticfoods.co"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Phone Number</label>
              <input
                className="form-input rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5"
                type="tel"
                value="+1 (555) 234-5678"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Inventory Alerts & Notification Preferences */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inventory Alerts */}
        <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col">
          <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">warning</span>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Inventory Alerts</h2>
          </div>
          <div className="p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Low Stock Threshold</label>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">15 Units</span>
              </div>
              <input
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                max="100"
                min="0"
                type="range"
                value="15"
              />
              <p className="text-xs text-gray-500">Alert me when a product's stock falls below this number.</p>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Expiry Warning</label>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">30 Days</span>
              </div>
              <input
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                max="90"
                min="7"
                type="range"
                value="30"
              />
              <p className="text-xs text-gray-500">Alert me before frozen goods reach their best-before date.</p>
            </div>
          </div>
        </div>
        {/* Notification Preferences */}
        <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col">
          <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">notifications</span>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Delivery Updates</h2>
          </div>
          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300">Order Dispatched</p>
                <p className="text-xs text-gray-500">Real-time SMS for delivery starts.</p>
              </div>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out">
                <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
            <hr className="border-gray-100 dark:border-gray-800" />
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300">Invoice Generation</p>
                <p className="text-xs text-gray-500">Email alerts when invoices are ready.</p>
              </div>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out">
                <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
            <hr className="border-gray-100 dark:border-gray-800" />
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300">New Product Promos</p>
                <p className="text-xs text-gray-500">Monthly wholesale catalog updates.</p>
              </div>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out">
                <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Security Section */}
      <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden mb-12">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Security &amp; Access</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-start gap-4">
              <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">security</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Two-Factor Authentication</h3>
                <p className="text-xs text-gray-500 mt-0.5">Add an extra layer of security to your wholesale account.</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
              Enabled
            </button>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors group">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">lock_reset</span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Change Password</span>
              </div>
              <span className="material-symbols-outlined text-gray-300">chevron_right</span>
            </button>
            <button className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors group">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">devices</span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Active Sessions</span>
              </div>
              <span className="material-symbols-outlined text-gray-300">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
