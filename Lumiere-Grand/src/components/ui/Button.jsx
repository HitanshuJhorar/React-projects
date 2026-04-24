function Button({
  as: Component = "button",
  className = "",
  variant = "solid",
  children,
  ...props
}) {
  const baseClassName =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] ring-1 ring-transparent transition-all duration-300 ease-out";
  const variantClassName =
    variant === "outline"
      ? "border border-[#d7aab1]/70 bg-transparent text-[#c6808f] hover:border-[#c6808f] hover:bg-[#c6808f] hover:text-white hover:shadow-md"
      : "bg-[#d98c8c] text-white ring-white/20 shadow-[0_10px_24px_rgba(217,140,140,0.16)] hover:bg-[#cc7e7e] hover:shadow-[0_16px_32px_rgba(217,140,140,0.24)]";

  return (
    <Component
      className={`${baseClassName} ${variantClassName} ${className} hover:scale-105 active:scale-95`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
