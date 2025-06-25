import React, { useState } from 'react';
import { Eye, EyeOff, ChevronDown } from 'lucide-react';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-purple-200/10 to-transparent"></div>
      
      {/* Navigation Header */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">About</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Blog</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Pages</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors">
            <span className="font-medium">English</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">Sign in</a>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">Register</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-end px-8 h-[calc(100vh-120px)]">
        <div className="w-full max-w-sm mr-16">
          {/* Sign In Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl shadow-blue-200/20 min-h-[600px] flex flex-col justify-center">
            <div className="space-y-8">
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all placeholder-gray-500 text-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all placeholder-gray-400 text-sm tracking-wider"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Recover Password Link */}
              <div className="text-right">
                <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">
                  Recover Password
                </a>
              </div>

              {/* Sign In Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-blue-500/25 text-sm">
                Sign In
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/80 text-gray-500 text-xs">Or continue with</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="flex space-x-3">
                {/* Google */}
                <button className="flex-1 flex items-center justify-center py-3 px-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>

                {/* Apple */}
                <button className="flex-1 flex items-center justify-center py-3 px-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </button>

                {/* Facebook */}
                <button className="flex-1 flex items-center justify-center py-3 px-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-sm">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;