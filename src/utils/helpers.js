export const formatPrice = (amount) => {
  const rupeesAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format((amount / 100).toFixed(2));
  return rupeesAmount;
};

export const uniqueValues = (data, type) => {
  const uniqueData = data.map((item) => item[type]);
  if (type === "colors") {
    return ["all", ...new Set(uniqueData.flat())];
  }
  return ["all", ...new Set(uniqueData)];
};
