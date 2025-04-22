interface  InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
icon?: React.ReactNode;

}

export default function Input({ className = "", icon, ...props }: InputProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 sm:text-sm">
        {icon}
      </div>
      <input
        className={` border border-gray-300 rounded-md shadow-md bg-secondary px-3 pl-9 py-2 w-full focus:outline-none focus:ring-2  focus:ring-indigo-500 ${className}`}
      
        {...props} 
      />
      
    </div>
  );
}
