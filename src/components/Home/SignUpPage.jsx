import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-[#E5E7F4] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-[95%] h-[100%]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome!</h1>
        </div>
        <div className="flex gap-8 items-start mt-10">
          <div className="flex-1 space-y-3 mt-10">
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-3 px-4 hover:bg-gray-50 transition-colors">
              <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span className="text-gray-700 font-medium">Sign in with Google</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-3 px-4 hover:bg-gray-50 transition-colors">
              <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">f</span>
              </div>
              <span className="text-gray-700 font-medium">Sign in with Facebook</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-3 px-4 hover:bg-gray-50 transition-colors">
              <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">in</span>
              </div>
              <span className="text-gray-700 font-medium">Sign in with LinkedIn</span>
            </button>
          </div>

          <div className="flex flex-col items-center h-72 ">
            <div className="w-px bg-gray-300 flex-1"></div>
            <span className="py-2 text-gray-500 text-sm">or</span>
            <div className="w-px bg-gray-300 flex-1"></div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder=""
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors pr-12"
                  placeholder=""
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="mt-2">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700" >
                  Forgot your password?
                </a>
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors" onClick={() => navigate("/")}>
              Login
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div>
            <span className="text-gray-600 text-sm">Don't have an account? </span>
            <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Sign Up
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}