export const storeAddressLines = [
  "Opp. Zudio, Near Bus Stand, Junction",
  "Hanumangarh, Rajasthan 335512",
];

export const storeAddress = storeAddressLines.join(", ");

export const storePhone = "+91 9306647479";
export const storePhoneHref = "tel:+919306647479";
export const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "919306647479";

export const googleMapsHref = "https://maps.app.goo.gl/c1YYn9MJqk3XKjTj7";

export function buildWhatsAppHref(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildProductInquiryMessage(productName, extras = []) {
  return [
    `Hi, I am interested in ${productName}.`,
    ...extras.filter(Boolean),
    "Please share availability and best price.",
  ].join("\n");
}
