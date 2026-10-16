import type { LegalDocument } from "./types";

export const cookiePolicy: LegalDocument = {
  title: "Cookie Policy",
  description:
    "This policy explains how Afromaster uses cookies and similar technologies on our UK grocery website, in line with PECR and UK GDPR.",
  sections: [
    {
      title: "1. What cookies are",
      paragraphs: [
        "Cookies are small files stored on your device. We also use similar tools such as local storage (for example to remember your shopping basket). Some cookies are set by us and some by the services that power sign-in and payment.",
      ],
    },
    {
      title: "2. How UK cookie rules apply",
      paragraphs: [
        "UK PECR rules mean we must tell you about cookies, explain why we use them, and get your consent before setting non-essential cookies. Cookies that are strictly necessary to provide a service you have asked for (such as keeping items in your basket or completing checkout) do not need that extra consent.",
        "This Cookie Policy works with our Privacy Policy. If we add analytics or advertising cookies later, we will update this page and ask for consent before using them.",
      ],
    },
    {
      title: "3. Cookies and similar storage we use",
      paragraphs: [
        "The categories below reflect a typical UK grocery checkout, including the tools this shop currently uses.",
      ],
      bullets: [
        "Strictly necessary: cookies needed for security, load balancing, and remembering that you are signed in. Clerk uses cookies to keep your session authenticated.",
        "Basket and checkout: we store cart contents in your browser (local storage) so your grocery list is not lost if you refresh the page. Stripe may set cookies when you pay so the payment can be completed securely.",
        "Preferences: we may remember simple site settings such as cookie choices if a banner is shown.",
        "Analytics and advertising: we do not currently set marketing or audience-measurement cookies. If that changes, they will only run after you opt in.",
      ],
    },
    {
      title: "4. How long cookies last",
      paragraphs: [
        "Session cookies are deleted when you close your browser. Persistent cookies remain for a set period or until you delete them. Authentication cookies last long enough to keep you signed in safely. Basket data stored locally remains until you clear it or empty the cart.",
      ],
    },
    {
      title: "5. Managing cookies",
      paragraphs: [
        "You can delete or block cookies in your browser settings. If you block strictly necessary cookies, parts of the grocery shop may not work, including sign-in, basket and payment.",
        "You can also use browser controls described by the ICO and by your browser vendor. Clearing cookies may sign you out and empty a locally stored basket.",
      ],
    },
    {
      title: "6. Third-party cookies",
      paragraphs: [
        "When you use Clerk to sign in or Stripe to pay, those providers may set their own cookies. Their use of cookies is covered by their privacy and cookie notices. We do not control cookies set on other websites you visit from our pages.",
      ],
    },
    {
      title: "7. Changes",
      paragraphs: [
        "We will update this Cookie Policy if we change how cookies are used. The date at the top of the page shows when it was last revised.",
      ],
    },
    {
      title: "8. Contact",
      paragraphs: [
        "Questions about cookies can be sent through our Contact Us page or to info@afromastersltd.com.",
      ],
    },
  ],
};
