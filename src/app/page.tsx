import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Left Side: Visual/Hero Section */}
      <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden bg-primary">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          data-alt="Gourmet frozen meals with vibrant vegetables and subtle ice crystals"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA49DBRfBgnxCRCl-9BX2XzzJ0JuLM-fIewjsKb-r0ZUIv2C41bPgyd4OS6LSzWH1bjOmVgESJ6sdizba2Lo926Fj0LFqii-QEWUNf1RLfEgEEKtXkQO6Ol6O5Jx7nEEhwxWzczZ26QHg52ggeUCoq-yr42M6LaMEg-_tc09LyqU_XLRaZfLQGX6WXfsthbVlOWkFQx_kgz6xkYw3TCzD4p6OW9mA9SsmI0ElY4E8SWIXYvljtNe6V07L5Wg9wOMa5_5CKmIonpGLej')",
          }}
        ></div>
        {/* Frost Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent pointer-events-none"></div>
        {/* Branding Overlay */}
        <div className="relative z-10 flex flex-col justify-between p-16 w-full h-full">
          <div className="flex items-center gap-3 text-white">
            <div className="size-10">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-black tracking-tight">FrostyWholesale</h2>
          </div>
          <div className="max-w-xl frost-overlay rounded-xl p-8 border border-white/20">
            <h1 className="text-white text-5xl font-black leading-tight tracking-tight mb-4">
              Quality Frozen Goods, <span className="text-accent-appetite">Delivered Fresh</span>
            </h1>
            <p className="text-white/90 text-lg font-medium leading-relaxed">
              The smarter way for retailers and wholesalers to manage inventory. Flash-frozen at peak ripeness, delivered on your schedule.
            </p>
          </div>
          <div className="text-white/70 text-sm flex gap-6">
            <span>© 2024 FrostyWholesale Inc.</span>
            <a className="hover:text-white underline decoration-accent-appetite underline-offset-4" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white underline decoration-accent-appetite underline-offset-4" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      {/* Right Side: Login Form */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-center px-8 lg:px-16 bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-md space-y-8">
          {/* Form Header */}
          <div className="text-left space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Partner Login</h2>
            <p className="text-slate-500 dark:text-slate-400">Welcome back! Please enter your details.</p>
          </div>
          {/* Form Section */}
          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <input
                  className="flex w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  id="email"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
            </div>
            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="password">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  className="flex w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white h-12 px-4 pr-12 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                />
                <button className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center" type="button">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>
            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                <span className="text-sm text-slate-600 dark:text-slate-400">Remember for 30 days</span>
              </label>
              <a className="text-sm font-semibold text-primary hover:text-primary/80" href="#">
                Forgot password?
              </a>
            </div>
            {/* Sign In Button */}
            <a href="/dashboard" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
              <span>Sign In</span>
              <span className="material-symbols-outlined text-[18px]">login</span>
            </a>
            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-300 dark:border-slate-700"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background-light dark:bg-background-dark px-2 text-slate-500">Or continue with</span>
              </div>
            </div>
            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all" type="button">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all" type="button">
                <svg className="h-5 w-5 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Facebook</span>
              </button>
            </div>
          </form>
          {/* Footer Link */}
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              New partner?{' '}
              <a className="font-bold text-accent-appetite hover:text-accent-appetite/80 underline underline-offset-4 decoration-2" href="#">
                Contact Sales
              </a>
            </p>
          </div>
        </div>
        {/* Responsive Mobile Logo (Visible only on small screens) */}
        <div className="lg:hidden absolute top-8 flex items-center gap-2">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">FrostyWholesale</h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
