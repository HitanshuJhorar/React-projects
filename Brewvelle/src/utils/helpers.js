export function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

export function joinClasses(...classes) {
  return classes.filter(Boolean).join(' ')
}
