import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function AvatarComponent() {
  return (
    <Avatar>
      <AvatarImage src="/avatar.png" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  );
}

export default AvatarComponent;
