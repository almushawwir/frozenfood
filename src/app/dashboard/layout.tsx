import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark px-6 md:px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-primary">ac_unit</span>
            </div>
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight">
              FrozenFlow Wholesalers
            </h2>
          </div>
          <nav className="hidden lg:flex items-center gap-9">
            <a className="text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">
              Dashboard
            </a>
            <a className="text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">
              Inventory
            </a>
            <a className="text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">
              Orders
            </a>
            <a className="text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">
              Analytics
            </a>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-4">
          <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-gray-400 flex border-none bg-gray-100 dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 border-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-0 h-full placeholder:text-gray-400 px-4 rounded-r-lg pl-2 text-sm"
                placeholder="Search orders..."
                value=""
              />
            </div>
          </label>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg size-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <a href="/" className="flex items-center justify-center rounded-lg size-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 transition-colors">
              <span className="material-symbols-outlined text-[20px]">logout</span>
            </a>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
            data-alt="User profile avatar portrait"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB85I_Qsd7jji8-JTep_CStGAgdWDNFQjSYB33SqazCVD7dHEotl-50nB66ihWW1YkNjHxHMg0tnhbs7gMpEK-i1ywjep-K_vtEcMJj-wS7fWer1olIB7YKiSQgi_SA9NReE9IKX3ysZtezJWApuJpxuqdc-p4AhfkpfI3zdNkQFlibiI1cn32uaAnrL6JCX94_MjlAZSkFBZycL9139IN9teiz8JpmuI2ZjbaMV_PyLpSjeOwE2pPBGC9_saMtNlI6b9grwhPJweM4")',
            }}
          ></div>
        </div>
      </header>
      <main className="flex flex-1 overflow-hidden h-[calc(100vh-64px)]">
        {/* Sidebar Navigation */}
        <aside className="hidden md:flex w-64 flex-col justify-between border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 p-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-12"
                data-alt="Company logo for Arctic Foods Ltd"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxGVn40SUDeGah3cOh6KJRZ8HyFELDTHp4FqZKJuE3HandWtdiSZAUITIIoDlBDgzvDbmalxjw-WyoOeFD9dxf9UTNNWrPM7i60UOuamiBQYPB41-k4dLPfH4n2iH2UwPsloFukoHCXjLXToSmd6BBCbgualGjDlDrf9uOlBENoB5qsygecXHMDtLPuKPQsIeieOg_ewDDWeMyyQbOAHlj_avjpbcG6l3WRRrY0wh6p_OHDoKUxI4T0qh3TQCa8r2xza1ukHGO5SN0")',
                }}
              ></div>
              <div className="flex flex-col overflow-hidden">
                <h1 className="text-gray-900 dark:text-white text-sm font-bold truncate">Arctic Foods Ltd.</h1>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-normal">Wholesale Account</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white" href="#">
                <span className="material-symbols-outlined text-[22px]">person</span>
                <span className="text-sm font-medium leading-none">Profile Settings</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[22px]">notifications_active</span>
                <span className="text-sm font-medium leading-none">Notifications</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[22px]">inventory_2</span>
                <span className="text-sm font-medium leading-none">Order Prefs</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[22px]">verified_user</span>
                <span className="text-sm font-medium leading-none">Security</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[22px]">payments</span>
                <span className="text-sm font-medium leading-none">Billing &amp; Invoices</span>
              </a>
            </div>
          </div>
          <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Storage Usage</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mb-2">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">75% of cold storage capacity reached</p>
          </div>
        </aside>
        {/* Main Content Area */}
        <section className="flex-1 overflow-y-auto px-6 py-8 md:px-12">{children}</section>
      </main>
    </div>
  );
};

export default DashboardLayout;
