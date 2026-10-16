import { LegalPage } from "@/components/app/LegalPage";
import { cookiePolicy } from "@/lib/legal/cookie-policy";

export const metadata = {
  title: "Cookie Policy | Afromaster Shop",
  description:
    "How Afromaster uses cookies and similar technologies on our UK grocery website.",
};

export default function CookiePolicyPage() {
  return <LegalPage document={cookiePolicy} />;
}
