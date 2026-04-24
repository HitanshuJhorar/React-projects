function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-6 md:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}

export default Container;
