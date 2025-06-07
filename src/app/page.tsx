// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
import Hero from "@/components/content/top/hero";
import TopNewsSection from "@/components/content/top/top-news";
import FeatureSection from "@/components/content/top/feature";
import ProblemSection from "@/components/content/top/problem";
import SolutionSection from "@/components/content/service";
import FlowSection from "@/components/content/top/flow";
import QaSection from "@/components/content/top/qa";
import AboutSection from "@/components/content/top/about";
// import { SITE_NAME, TEL, ADDRESS, POST_CODE } from "@/constants/site-info";
// import { Metadata } from "next";

/* テンプレート用のため一時的にコメントアウト
export const metadata: Metadata = {
  title: "渋谷の整体なら「めぐり整体院」| 首・肩こり・腰痛を根本改善",
  description: "渋谷駅徒歩5分。首・肩こり、腰痛、スポーツ障害など、つらい痛みを根本から改善します。保険診療対応、駐車場完備で通院しやすい環境です。初回限定価格で気軽に体験できます。",
};
*/

/* テンプレート用のため一時的にコメントアウト
// JSON-LDの構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": SITE_NAME,
  "image": "https://meguri-seitai.com/og-image.jpg",
  "@id": "https://meguri-seitai.com",
  "url": "https://meguri-seitai.com",
  "telephone": TEL,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": ADDRESS,
    "addressLocality": "渋谷区",
    "addressRegion": "東京都",
    "postalCode": POST_CODE.replace("〒", ""),
    "addressCountry": "JP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.658034,
    "longitude": 139.701636
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "19:00"
  },
  "priceRange": "¥¥",
  "paymentAccepted": "現金, クレジットカード, 保険診療",
};
*/

export default function Home() {
  return (
    <>
      {/* テンプレート用のため一時的にコメントアウト
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      */}
      <Hero />
      <TopNewsSection />
      <ProblemSection />
      <SolutionSection showButton />
      <FeatureSection />
      <AboutSection />
      {/* <PriceSection /> */}
      <FlowSection />
      <QaSection />
      {/* <AccessSection />
      <ContactSection /> */}
    </>
  );
}
