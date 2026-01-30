"use client";

import { LiveChatWidget } from "@livechat/widget-react";
import { useEffect, useState } from "react";

export default function LiveChatClient() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (window.location.hostname === "printerconnect.online") {
      setShowChat(true);
    }
  }, []);

  if (!showChat) return null;

  return <LiveChatWidget license="19476820" />;
}
