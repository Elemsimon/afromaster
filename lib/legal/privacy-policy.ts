import type { LegalDocument } from "./types";

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description:
    "This notice explains how Afromaster handles personal data when you shop for groceries online, in line with UK GDPR and the Data Protection Act 2018.",
  sections: [
    {
      title: "1. Who is responsible for your data",
      paragraphs: [
        "Afromaster is the controller of personal data collected through this website. You can contact us about privacy via the Contact Us page or at info@afromastersltd.com.",
        "If we appoint a data protection officer or a group privacy team in future, their details will be added here.",
      ],
    },
    {
      title: "2. Data we collect",
      paragraphs: [
        "The information we collect depends on how you use the shop. Typical grocery home-shopping data includes:",
      ],
      bullets: [
        "Identity and contact details: name, email address, phone number and delivery address.",
        "Account details: sign-in identifiers processed by our authentication provider, Clerk.",
        "Order details: products, quantities, prices, delivery notes and order history.",
        "Payment status: confirmation that a payment succeeded. Card numbers are handled by Stripe, not stored by us.",
        "Messages you send through the Contact Us form.",
        "Technical data: IP address, device type, browser and cookie identifiers as described in our Cookie Policy.",
      ],
    },
    {
      title: "3. How we use your data and legal bases",
      paragraphs: [
        "We use personal data only where UK GDPR allows it. For grocery shopping that usually means:",
      ],
      bullets: [
        "Contract: creating your account, taking payment, picking and delivering orders, and providing customer service.",
        "Legal obligation: keeping tax and accounting records, age checks for alcohol, and food-safety or product-recall follow-up.",
        "Legitimate interests: preventing fraud, keeping the site secure, improving stock and delivery, and answering enquiries. We balance these interests against your rights.",
        "Consent: optional marketing emails or non-essential cookies. You can withdraw consent at any time.",
      ],
    },
    {
      title: "4. Who we share data with",
      paragraphs: [
        "We do not sell your personal data. We share it with providers who help us run a UK grocery shop, under contracts that require them to keep it secure:",
      ],
      bullets: [
        "Clerk, for account registration and sign-in.",
        "Stripe, for card payments and checkout.",
        "Sanity, for storing product, customer, order and contact-message records.",
        "Delivery or courier partners, where we need to get an order to you.",
        "Professional advisers, insurers or regulators where the law requires or allows it.",
      ],
    },
    {
      title: "5. International transfers",
      paragraphs: [
        "Some providers may process data outside the United Kingdom. Where that happens we rely on an adequacy regulation or another safeguard recognised by UK data protection law, such as the UK International Data Transfer Agreement or Addendum.",
      ],
    },
    {
      title: "6. How long we keep data",
      paragraphs: [
        "We keep personal data only as long as we need it. Order and invoice records are typically kept for up to six years to meet UK tax and accounting rules. Contact messages are kept for as long as needed to resolve your enquiry and for a short period afterwards. Account data is kept while your account stays open and for a limited time after closure unless we must keep it longer.",
      ],
    },
    {
      title: "7. Marketing",
      paragraphs: [
        "We will not send you promotional emails unless you have opted in, or another PECR rule allows it (for example, some existing-customer messages about similar grocery products, with a clear opt-out). Transactional messages about your order are not marketing and we need to send those to complete your purchase.",
      ],
    },
    {
      title: "8. Your rights",
      paragraphs: [
        "Under UK GDPR you can ask us to access, correct or delete your data, restrict or object to certain processing, and receive a portable copy of data you provided to us. You can also withdraw consent where we rely on it.",
        "To use these rights, contact us using the details above. You also have the right to complain to the Information Commissioner’s Office (ICO) at ico.org.uk.",
      ],
    },
    {
      title: "9. Children",
      paragraphs: [
        "This grocery service is not aimed at children. We do not knowingly collect personal data from anyone under 18. If you believe a child has given us data, please contact us so we can delete it.",
      ],
    },
    {
      title: "10. How we protect data",
      paragraphs: [
        "We use access controls, encrypted payment checkout, and reputable processors to protect grocery customer data. No website can guarantee absolute security, so please keep your password private and tell us if you suspect misuse.",
      ],
    },
    {
      title: "11. Updates",
      paragraphs: [
        "We may update this Privacy Policy when our products, suppliers or the law change. The latest version will always appear on this page with the date shown at the top.",
      ],
    },
  ],
};
