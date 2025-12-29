// File: src/config/site.ts
export const site = {
  name: "SimpleTools",
  url: "https://simple-tools.app/",

  // ✅ AdSense + 확장성 기준 최적 문구
  description:
    "Free calculators and practical guides for fast, reliable decisions — pricing, fees, budgets, and more. Clear formulas, real examples, and instant results.",

  // ✅ 헤더: 지금 구조 유지 (문제 없음)
  headerTools: [
    { label: "Profit Margin", href: "/tools/e-commerce/profit-margin/" },
    { label: "Break-even", href: "/tools/e-commerce/break-even-price/" },
    { label: "Pricing", href: "/tools/e-commerce/product-pricing/" },
    { label: "Ad CPO", href: "/tools/e-commerce/ad-cost-per-order/" },
    { label: "FBA Fee", href: "/tools/e-commerce/amazon-fba-fee/" },
    // 확장 시
    // { label: "All Tools", href: "/tools/" }
  ],

  // ✅ Footer: Guides 추가 (중요)
  footer: [
    { label: "About", href: "/about/" },
    { label: "Guides", href: "/guides/" },
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Contact", href: "/contact/" }
  ],

  contactEmail: "we@btrw.kr"
};
