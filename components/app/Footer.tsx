import Link from "next/link";
import Image from "next/image";
import { LEGAL_NAV } from "@/lib/constants/legal";
import { STOREFRONT_NAV } from "@/lib/constants/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <Link href="/" className="inline-flex items-center">
            <Image src="/logo.png" alt="Afromaster" width={100} height={40} />
          </Link>
          <p className="max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
            Shop quality products with real-time stock, secure checkout, and
            friendly support.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Explore
          </h2>
          <ul className="mt-3 space-y-2">
            {STOREFRONT_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/orders"
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                My Orders
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Support
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Questions about an order or product? We usually reply within 1–2
            business days.
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            Contact Us
          </Link>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Legal
          </h2>
          <ul className="mt-3 space-y-2">
            {LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-zinc-500 sm:px-6 lg:px-8 dark:text-zinc-500">
          © {year} Afromaster. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
