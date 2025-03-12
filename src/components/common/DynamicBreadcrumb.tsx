"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const DynamicBreadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // If we're on the homepage, don't show breadcrumbs
  if (pathSegments.length === 0) {
    return null;
  }

  // Build the breadcrumb items with proper paths
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    ...pathSegments.map((segment, index) => {
      const path = "/" + pathSegments.slice(0, index + 1).join("/");
      // Convert kebab-case or snake_case to Title Case for display
      const label = segment
        .replace(/-|_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      return { label, path };
    }),
  ];

  return (
    <nav aria-label="Breadcrumb" className="relative top-32 mt-3 py-4 px-6 pl-12 bg-white shadow-sm">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            )}

            <Link
              href={item.path}
              className={`${
                index === breadcrumbItems.length - 1
                  ? "font-medium text-gray-700"
                  : "text-[#F97316] hover:text-gray-900 font-semibold hover:underline transition-colors"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default DynamicBreadcrumbs;
