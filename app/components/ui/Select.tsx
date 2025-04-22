
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  children?: React.ReactNode;
}

export default function Select({ className = '', children, ...props }: SelectProps) {
    return (
      <select
        className={`border rounded px-3 py-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
        {...props}
      >
        {children}
      </select>
    );
  }