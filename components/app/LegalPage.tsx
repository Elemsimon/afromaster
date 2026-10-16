import Link from "next/link";
import { LEGAL_LAST_UPDATED, LEGAL_NAV } from "@/lib/constants/legal";
import type { LegalDocument } from "@/lib/legal/types";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900">
      <div className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {document.title}
          </h1>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            {document.description}
          </p>
          <p className="mt-4 text-xs text-zinc-500">
            Last updated: {LEGAL_LAST_UPDATED}
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="mb-8 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
          These pages follow topics commonly used by UK grocery retailers. They
          are general information for this shop and are not legal advice. If you
          need a binding policy for your business, have a solicitor review them.
        </p>

        <div className="space-y-8">
          {document.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <nav
          aria-label="Other legal pages"
          className="mt-12 border-t border-zinc-200 pt-6 dark:border-zinc-800"
        >
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Related
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </div>
  );
}
