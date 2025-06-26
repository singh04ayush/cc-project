interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const EmailInput = ({
  value,
  onChange,
  placeholder = 'Enter Email',
}: EmailInputProps) => {
  return (
    <div className="relative">
      <input
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all placeholder-gray-500 text-sm"
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
