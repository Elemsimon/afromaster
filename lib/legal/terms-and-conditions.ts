import type { LegalDocument } from "./types";

export const termsAndConditions: LegalDocument = {
  title: "Terms & Conditions",
  description:
    "These terms apply when you buy groceries from Afromaster in the United Kingdom. They should be read with our Terms of Use, Privacy Policy and Cookie Policy.",
  sections: [
    {
      title: "1. About these terms",
      paragraphs: [
        "These Terms & Conditions set out the contract between you and Afromaster when you order grocery products through this website. “We”, “us” and “our” mean Afromaster. “You” means the customer placing the order.",
        "Nothing in these terms affects your statutory rights under the Consumer Rights Act 2015, the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, or other UK consumer law.",
      ],
    },
    {
      title: "2. Who can order",
      paragraphs: [
        "You must be 18 or over to create an account and place an order. Grocery orders are for personal, household use in the UK. We may refuse orders that we reasonably believe are for resale or commercial supply.",
        "You must provide a complete delivery address in a postcode area we serve, a working email address, and a phone number so we can contact you about delivery or collection.",
      ],
    },
    {
      title: "3. Products, prices and VAT",
      paragraphs: [
        "Prices are in GBP. Unless we say otherwise, displayed prices include VAT at the rate that applies to that product. Promotions, multi-buys and time-limited offers apply only while stocks last and while the offer is shown at checkout.",
        "Some grocery items are sold by weight. The weight you receive may differ slightly from the typical weight shown online. Where we charge by actual weight, the amount taken may be adjusted up or down to match the product supplied.",
        "We may correct obvious pricing errors. If the correct price is higher, we will contact you before going ahead. If we cannot reach you, we may cancel that item and refund it.",
      ],
    },
    {
      title: "4. Availability and substitutions",
      paragraphs: [
        "Grocery stock changes throughout the day. An item in your basket is not reserved until we accept the order. If something is unavailable we may offer a similar substitute of comparable quality and price, as is common with UK supermarket home shopping.",
        "You may refuse any substitute on delivery or collection. We will refund refused substitutes and any item we could not supply. Always check allergen and ingredient information on substitute packaging, as it may differ from the product you originally chose.",
      ],
    },
    {
      title: "5. Allergens, food safety and storage",
      paragraphs: [
        "If you have an allergy or intolerance, treat on-pack labelling as the source of truth. Website descriptions are a guide and may not always reflect a recent recipe or supplier change.",
        "Chilled and frozen foods must be stored at the temperatures stated on the pack as soon as you receive them. We are not responsible for food that is stored incorrectly after delivery or collection.",
      ],
    },
    {
      title: "6. Alcohol and age-restricted products",
      paragraphs: [
        "Alcohol and any other age-restricted grocery products will only be sold to people aged 18 or over. We operate a Challenge 25 approach: the person receiving the order may be asked to show acceptable photo ID.",
        "We will not leave age-restricted items unattended or hand them to anyone who cannot prove they are 18 or over. In that case we may withhold those items and refund them. Alcohol sales also follow UK licensing hours. Minimum unit pricing applies in Scotland and Wales, so we cannot sell alcohol below the legal minimum price in those nations.",
      ],
    },
    {
      title: "7. Orders, payment and contract",
      paragraphs: [
        "You place an order when you complete checkout and submit payment. Payment is taken securely by Stripe. We do not store your full card number on our servers.",
        "An order confirmation email is an acknowledgement, not a guarantee that every line will be supplied. A contract for each product is formed when we accept that product for dispatch, delivery or collection. We may decline all or part of an order (for example because of stock, suspected fraud, licensing rules or an incomplete address) and will refund any amount taken for items we do not supply.",
      ],
    },
    {
      title: "8. Delivery and collection",
      paragraphs: [
        "We deliver to UK addresses where the service is offered for your postcode. Delivery charges, slots and any minimum order value are shown before you pay. Times are estimates. Weather, traffic and food-safety checks can affect arrival.",
        "Someone aged 18 or over should be available to receive the order, especially where the basket includes chilled, frozen or age-restricted items. If nobody is available we may reattempt delivery, leave the order in a place you have authorised (except age-restricted goods), or return it. Perishable goods that cannot be redelivered safely may be disposed of and may not be refunded where the failed delivery was caused by you.",
        "Risk in the goods passes to you when they are delivered to the address you gave, collected by you, or left in line with your instructions. Title passes when we receive payment in full.",
      ],
    },
    {
      title: "9. Cancelling an order",
      paragraphs: [
        "You may ask us to cancel or amend an order until we have started picking or dispatch. After that, cancellation may not be possible for fresh or frozen lines.",
        "Under the Consumer Contracts Regulations, most distance sales have a 14-day cooling-off period. That right does not usually apply to grocery goods that are liable to deteriorate or expire rapidly, sealed goods that are not suitable for return if unsealed for health or hygiene reasons, or goods mixed to your specification. Ambient, non-perishable items that are unused and in original condition may be returnable as explained below.",
      ],
    },
    {
      title: "10. Faulty goods and returns",
      paragraphs: [
        "If food arrives damaged, unsafe, not as described, or of unsatisfactory quality, contact us promptly with your order number and, where possible, photos. We may refund, replace or offer a suitable alternative. This is in addition to your rights under the Consumer Rights Act 2015.",
        "We generally cannot accept returns of opened food, chilled or frozen products, or items past their use-by date, unless they are faulty or we delivered them in error. Do not send perishable goods back by post without our agreement.",
      ],
    },
    {
      title: "11. Promotions and vouchers",
      paragraphs: [
        "Coupon codes, multi-buys and introductory offers are subject to the rules shown at the time. They cannot normally be used with other offers, exchanged for cash, or applied after checkout. We may withdraw a promotion if it is being misused.",
      ],
    },
    {
      title: "12. Our liability for orders",
      paragraphs: [
        "We do not exclude liability for death or personal injury caused by our negligence, for fraud, or for any other matter UK law says we cannot limit.",
        "We are responsible for foreseeable loss caused by our breach of these terms. We are not responsible for delay or failure caused by events outside our reasonable control, including severe weather, supplier shortages, or courier disruption. Your statutory rights remain in place.",
      ],
    },
    {
      title: "13. Changes to these terms",
      paragraphs: [
        "We may update these Terms & Conditions. The version in force when you place an order applies to that order. The current version is always published on this page.",
      ],
    },
    {
      title: "14. Governing law",
      paragraphs: [
        "These terms are governed by the laws of England and Wales. Courts in England and Wales have exclusive jurisdiction, without limiting any right you have to bring a claim in Scotland or Northern Ireland if you live there.",
        "For complaints, use our Contact Us page or email info@afromastersltd.com. You may also use UK alternative dispute resolution or the European Commission’s ODR platform where it remains available to you.",
      ],
    },
  ],
};
