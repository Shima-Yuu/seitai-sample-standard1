"use client";
// import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/ui/animated-title";
// import { SITE_NAME } from "@/constants/site-info";

interface FeatureItem {
  title: string;
  description: string;
  imageUrl: string;
  linkText?: string;
  linkUrl?: string;
  imageHeight?: string; // 画像の高さをカスタマイズするためのオプション
}

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

const animationSettings = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay: 0.2 }
};

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const isEven = index % 2 === 1;
  const imageHeight = feature.imageHeight || "lg:h-[600px]";

  return (
    <motion.div
      {...animationSettings}
      transition={{ ...animationSettings.transition, delay: 0.2 * index }}
      className="flex flex-col lg:flex-row items-center overflow-hidden"
    >
      <div className="block lg:hidden w-full lg:px-0">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={feature.imageUrl}
            alt={feature.title}
            fill
            className="object-cover w-full h-full"
            sizes="100vw"
            priority
          />
        </div>
      </div>
      {!isEven ? (
        <>
          <div className="hidden lg:block w-full lg:w-1/2">
            <div className={`relative w-full aspect-[16/9] ${imageHeight}`}>
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                fill
                className="object-cover w-full h-full"
                sizes="100vw"
                priority
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 max-w-3xl mx-auto lg:px-16 py-4 lg:py-16">
            <h3 className="text-2xl lg:text-[32px] font-medium tracking-wider mb-4 pb-4 lg:mb-8 lg:pb-4 border-b border-gray-200 leading-relaxed whitespace-pre-wrap">
              {feature.title}
            </h3>
            <p className=" leading-relaxed text-[15px] whitespace-pre-wrap">
              {feature.description}
            </p>
            {feature.linkText && feature.linkUrl && (
              <Link 
                href={feature.linkUrl}
                className="inline-flex items-center text-[15px] text-slate-600 hover:text-slate-500 transition-colors duration-200 mt-8 border border-slate-600 px-8 py-3"
              >
                <span>{feature.linkText}</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="w-full lg:w-1/2 max-w-3xl mx-auto lg:px-16 py-4 lg:py-16">
              <h3 className="text-2xl lg:text-[32px] font-medium tracking-wider mb-4 pb-4 lg:mb-8 lg:pb-4 border-b border-gray-200 leading-relaxed whitespace-pre-wrap">
                {feature.title}
            </h3>
            <p className=" leading-relaxed text-[15px] whitespace-pre-wrap">
              {feature.description}
            </p>
            {feature.linkText && feature.linkUrl && (
              <Link 
                href={feature.linkUrl}
                className="inline-flex items-center text-[15px] text-slate-600 hover:text-slate-500 transition-colors duration-200 mt-8 border border-slate-600 px-8 py-3"
              >
                <span>{feature.linkText}</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
          <div className="hidden lg:block w-full lg:w-1/2">
            <div className={`relative w-full aspect-[16/9] ${imageHeight}`}>
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                fill
                className="object-cover w-full h-full"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

const FeatureSection = () => {
  const features: FeatureItem[] = [
    {
      title: "根本の原因を突き止める\n丁寧な問診",
      description: "「なぜ痛みが出るのか」「どうすれば改善するのか」。同じ症状でも、原因は人それぞれ異なります。\n\n問診では、いつ、どんな時に症状が出るのか、普段の生活習慣なども含めて丁寧にお伺いします。そこから本当の原因を見つけ出し、最適な施術プランをご提案いたします。",
      imageUrl: "/top/feature1.jpg"
    },
    {
      title: "痛みを最小限に抑えた\n優しい施術",
      description: "「整体は痛そう」「怖い」という不安の声をよく耳にします。当院では、痛みの少ない独自の施術法を採用。\n\n丁寧な検査と施術で、必要最小限の刺激で最大限の効果を引き出します。痛みの少ない施術により、お身体への負担を抑え、早期回復を目指します。",
      imageUrl: "/top/feature2.jpg",
      linkText: "はじめての方へ",
      // linkUrl: "/first-time"
    }
  ];

  return (
    <section className="scroll-mt-[60px] py-12 lg:py-20 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="px-4 md:px-16 lg:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
          <AnimatedTitle 
            japaneseTitle="選ばれる理由"
            englishTitle="FEATURE"
          />
        </div>
        <div className="space-y-12 lg:space-y-24">
          {features.map((feature, index) => (
            <div key={feature.title} className="px-4 md:px-16 lg:px-0 sm:max-w-xl md:max-w-full lg:max-w-none mx-auto">
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 
