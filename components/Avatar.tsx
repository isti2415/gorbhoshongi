import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface AvatarComponentProps {
  src: string;
  name: string;
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({ src, name }) => {
  const [initials, setInitials] = useState("");

  useEffect(() => {
    const getInitials = (name: string) => {
      const words = name?.split(" ");
      return words?.map((word) => word[0]).join("");
    };

    setInitials(getInitials(name));
  }, [name]);

  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
