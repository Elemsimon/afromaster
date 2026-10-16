import type { LegalDocument } from "./types";

export const termsOfUse: LegalDocument = {
  title: "Terms of Use",
  description:
    "These terms explain how you may use the Afromaster website. They sit alongside our Terms & Conditions for grocery purchases.",
  sections: [
    {
      title: "1. Who we are",
      paragraphs: [
        "This website is operated by Afromaster, an online grocery retailer serving customers in the United Kingdom. In these Terms of Use, “we”, “us” and “our” mean Afromaster, and “you” means the person using the site.",
        "If you have a question about these terms, contact us via the Contact Us page or email info@afromastersltd.com.",
      ],
    },
    {
      title: "2. Agreeing to these terms",
      paragraphs: [
        "By accessing or browsing this website you agree to these Terms of Use, our Privacy Policy and our Cookie Policy. If you do not agree, please stop using the site.",
        "If you place an order for groceries, our Terms & Conditions also apply. Where there is a conflict about a purchase, the Terms & Conditions take priority for that order.",
      ],
    },
    {
      title: "3. Using the website",
      paragraphs: [
        "You may use the site for lawful personal shopping and information only. You must not use it in a way that is illegal, harmful, or that interrupts other customers or our systems.",
      ],
      bullets: [
        "Do not attempt to gain unauthorised access to accounts, servers or data.",
        "Do not scrape, overload or interfere with the site except as allowed by law.",
        "Do not post or upload unlawful, offensive or misleading content.",
        "Do not impersonate another person or misuse another customer’s account.",
      ],
    },
    {
      title: "4. Accounts",
      paragraphs: [
        "Some features, such as order history, need an account. You must provide accurate details and keep your login details confidential. You are responsible for activity on your account unless you have told us it has been misused.",
        "We may suspend or close an account if we reasonably believe these terms have been broken or that the account is being used fraudulently.",
      ],
    },
    {
      title: "5. Product information on the site",
      paragraphs: [
        "We take care to describe grocery products clearly, including typical UK labelling such as ingredients, allergens and storage where we have that information. Pack designs, weights and recipes can change, so always read the label on the product you receive before eating or serving it.",
        "Images are for illustration. Fresh, frozen and ambient items may vary slightly in appearance, weight or ripeness. Prices are shown in pounds sterling and include VAT where VAT applies, unless we say otherwise.",
      ],
    },
    {
      title: "6. Intellectual property",
      paragraphs: [
        "The website design, logos, text and other content are owned by us or our licensors. You may view and print pages for your own shopping. You must not copy, sell or republish our content for commercial use without our written permission.",
      ],
    },
    {
      title: "7. Third-party services and links",
      paragraphs: [
        "The site uses trusted providers for sign-in, payments and content. Checkout is processed by Stripe. Account sign-in is provided by Clerk. Product and order records are stored with our content platform.",
        "Links to other websites are provided for convenience. We are not responsible for their content or their terms.",
      ],
    },
    {
      title: "8. Availability and changes",
      paragraphs: [
        "We aim to keep the site available, but we do not guarantee uninterrupted access. We may update, suspend or withdraw parts of the site for maintenance, stock or legal reasons.",
        "We may update these Terms of Use from time to time. The latest version will be posted on this page with the date at the top. Continued use of the site after a change means you accept the updated terms.",
      ],
    },
    {
      title: "9. Liability for website use",
      paragraphs: [
        "Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other liability that UK law does not allow us to exclude.",
        "The website is provided for general grocery shopping. We are not liable for losses that were not foreseeable, or for business losses if you use the site other than as a consumer. Your statutory rights are not affected.",
      ],
    },
    {
      title: "10. Governing law",
      paragraphs: [
        "These Terms of Use are governed by the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction, except that if you live in Scotland or Northern Ireland you may also bring proceedings in your local courts.",
      ],
    },
  ],
};
