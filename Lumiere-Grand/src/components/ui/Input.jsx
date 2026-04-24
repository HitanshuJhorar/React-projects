function Input({ className = "", ...props }) {
  return (
    <input
      className={`h-11 w-full rounded-md border border-[#E5E5E5] bg-white px-4 text-[14px] text-[#1A1A1A] outline-none transition placeholder:text-[#9A9A9A] focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/15 ${className}`.trim()}
      {...props}
    />
  );
}

export default Input;
