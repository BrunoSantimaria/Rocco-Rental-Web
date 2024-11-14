export const handleWhatsApp = () => {
  const whatsappNumber = "5493417121040";
  const message = "¡Hola! Tengo una consulta";
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
};
