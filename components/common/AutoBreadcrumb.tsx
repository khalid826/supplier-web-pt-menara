'use client';
/**
 * AutoBreadcrumb.tsx
 *
 * Auto-generates and displays breadcrumbs based on the current URL path.
 * Uses improved styles and accessibility. Used in: page layouts and sections needing breadcrumbs.
 */
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

// Utility to convert path segment to readable label
function toTitle(segment: string) {
  return segment
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function AutoBreadcrumb() {
  // Get current path
  const pathname = usePathname();
  // Split path into segments, filter out empty
  const segments = pathname.split("/").filter(Boolean);

  // Hide breadcrumb on the landing page
  if (segments.length === 0) return null;

  // Build breadcrumb items with hrefs
  const crumbs = segments.map((seg, idx) => ({
    label: toTitle(seg),
    href: "/" + segments.slice(0, idx + 1).join("/"),
    isLast: idx === segments.length - 1,
  }));

  // Render the breadcrumb navigation
  return (
    <nav aria-label="breadcrumb" className="w-full my-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {/* Home crumb */}
        <li>
          <Link href="/" className="text-gray-500 hover:text-[#FFC402] font-medium px-3 py-1 rounded transition-colors bg-gray-50">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-gray-400">
          <ChevronRight className="w-4 h-4" />
        </li>
        {crumbs.map((crumb, idx) => (
          <React.Fragment key={crumb.href}>
            <li>
              {crumb.isLast ? (
                <span className="font-semibold text-[#0A0F17] bg-[#FFC402]/20 px-3 py-1 rounded" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-gray-500 hover:text-[#FFC402] font-medium px-3 py-1 rounded transition-colors bg-gray-50"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
            {idx !== crumbs.length - 1 && (
              <li aria-hidden="true" className="text-gray-400">
                <ChevronRight className="w-4 h-4" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
} 