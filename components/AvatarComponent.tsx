"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface AvatarComponentProps {
  src: string;
  name: string;
  className?: string; // Add the optional className prop
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({
  src,
  name,
  className, // Destructure the className prop
}) => {
  const [initials, setInitials] = useState("");

  useEffect(() => {
    const getInitials = (name: string) => {
      const words = name?.split(" ");
      return words?.map((word) => word[0]).join("");
    };
    setInitials(getInitials(name));
  }, [name]);

  return (
    <Avatar className={className}>
      {" "}
      {/* Apply the className prop */}
      <AvatarImage src={src} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
