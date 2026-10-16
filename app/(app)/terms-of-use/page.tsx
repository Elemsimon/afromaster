import { LegalPage } from "@/components/app/LegalPage";
import { termsOfUse } from "@/lib/legal/terms-of-use";

export const metadata = {
  title: "Terms of Use | Afromaster Shop",
  description:
    "Website terms of use for the Afromaster UK grocery shop.",
};

export default function TermsOfUsePage() {
  return <LegalPage document={termsOfUse} />;
}
