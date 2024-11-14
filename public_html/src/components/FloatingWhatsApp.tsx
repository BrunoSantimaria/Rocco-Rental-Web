import React, { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const FloatingWhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const whatsappNumber = "5493417121040";
  const message = "¡Hola! ¿En qué puedo ayudarte?";

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    const notificationTimer = setTimeout(() => setShowNotification(true), 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(notificationTimer);
    };
  }, []);

  return (
    <FloatingWhatsApp
      phoneNumber={whatsappNumber}
      accountName='Rocco Rental'
      chatMessage={message}
      notificationDelay={5}
      avatar='https://res.cloudinary.com/di92lsbym/image/upload/v1731103698/LOGOAZULCUADRADO_1_t8n2j9.png'
      allowClickAway
      notification={true}
      notificationSound
      messageDelay={2}
      allowEsc
      placeholder='Escribe tu mensaje...'
      chatboxHeight={400}
      statusMessage='Responde típicamente en una hora'
      isOpen={isOpen}
      styles={{
        bottom: 40,
        right: 50,
        zIndex: 10,
        overflow: "hidden",
      }}
    />
  );
};

export default FloatingWhatsAppButton;
