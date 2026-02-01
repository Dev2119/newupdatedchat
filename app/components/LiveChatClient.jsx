"use client";

import { LiveChatWidget } from "@livechat/widget-react";

export default function LiveChatClient() {
  return (
    <LiveChatWidget license={process.env.NEXT_PUBLIC_LI} />
  );
}
