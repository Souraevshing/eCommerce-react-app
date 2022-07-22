export const formatPrice = (currency) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  }).format(currency)
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
