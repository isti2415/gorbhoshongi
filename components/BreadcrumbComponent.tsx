"use client";

import React from "react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Breadcrumb,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

interface BreadCrumbProps {
  className?: string;
  params: { locale: string };
}

const BreadCrumbComponent: React.FC<BreadCrumbProps> = ({
  className,
  params,
}) => {
  const t = useTranslations("navigation");
  const pathname = usePathname();

  const generateBreadcrumbItems = () => {
    // Split the pathname into an array
    const separated = pathname.split("/").filter(Boolean);

    // Map through the separated pathname and generate breadcrumb items
    return separated.map((path, index) => {
      // Convert "-" to space and capitalize first letter of each word
      const label = path
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      // Construct the href from the path
      const href = `/${path}`;

      return (
        <React.Fragment key={index}>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
          </BreadcrumbItem>
        </React.Fragment>
      );
    });
  };

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={"/dashboard"}>
            <Home />
          </BreadcrumbLink>
        </BreadcrumbItem>
        {generateBreadcrumbItems()}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbComponent;
