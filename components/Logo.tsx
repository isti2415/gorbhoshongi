import React from "react";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { useTranslations } from "next-intl";

interface LogoProps {
  className?: string;
  withText?: boolean;
  horizontal?: boolean;
  logoWidth: number;
  logoHeight: number;
  params: { locale: string };
}

const Logo: React.FC<LogoProps> = ({
  className,
  withText = false,
  horizontal = false,
  logoHeight,
  logoWidth,
  params: { locale },
}) => {
  const containerClasses = `flex items-center justify-center gap-2 ${
    horizontal ? "flex-row" : "flex-col"
  } ${className}`;

  const t = useTranslations("navigation");

  return (
    <div className={containerClasses}>
      <Image
        src={"/gorbhoshongi.png"}
        alt="Logo"
        priority
        width={logoWidth}
        height={logoHeight}
      />
      {withText && <span className={`font-bold`}>{t('logo')}</span>}
    </div>
  );
};

export default Logo;
