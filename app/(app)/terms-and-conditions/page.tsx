import { LegalPage } from "@/components/app/LegalPage";
import { termsAndConditions } from "@/lib/legal/terms-and-conditions";

export const metadata = {
  title: "Terms & Conditions | Afromaster Shop",
  description:
    "Grocery order terms for Afromaster, covering delivery, substitutions, alcohol, cancellations and returns in the UK.",
};

export default function TermsAndConditionsPage() {
  return <LegalPage document={termsAndConditions} />;
}
