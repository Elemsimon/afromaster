import { LegalPage } from "@/components/app/LegalPage";
import { privacyPolicy } from "@/lib/legal/privacy-policy";

export const metadata = {
  title: "Privacy Policy | Afromaster Shop",
  description:
    "How Afromaster collects and uses personal data for UK grocery shopping, in line with UK GDPR.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicy} />;
}
