function Container({ as: Component = 'div', className = '', children }) {
  return <Component className={`container ${className}`.trim()}>{children}</Component>
}

export default Container
