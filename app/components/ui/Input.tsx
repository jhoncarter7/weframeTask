
// interface  InputProps extends React.InputHTMLAttributes<HTMLInputElement>{

// }

export default function Input({className="", ...props}){
    return <input
    className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
    {...props}
  />
}