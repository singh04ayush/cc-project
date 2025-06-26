import { ChevronDown } from 'lucide-react';

export const Navigation = () => {
  return (
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
  );
};
