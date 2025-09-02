import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen font-sans text-gray-800">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 bg-black items-center justify-center px-12">
        <div className="max-w-md space-y-6 text-center text-white">
          <h1 className="text-5xl font-extrabold leading-tight">
            Welcome to ECommerce Shopping
          </h1>
          <p className="text-lg text-gray-300">
            Your one-stop shop for everything!
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
