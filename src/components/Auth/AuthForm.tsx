import { useState } from 'react';
import { EmailInput } from './EmailInput';
import { PasswordInput } from './PasswordInput';
import { Divider } from './Divider';
import { SocialLogin } from './SocialLogin';

export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="space-y-8">
      {/* Email Input */}
      <EmailInput 
        value={email}
        onChange={setEmail}
      />

      {/* Password Input */}
      <PasswordInput 
        value={password}
        onChange={setPassword}
      />

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
      <Divider />

      {/* Social Login Buttons */}
      <SocialLogin />
    </div>
  );
};
