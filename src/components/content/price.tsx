"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedTitle from "@/components/ui/animated-title";
import Link from "next/link";

interface PriceItem {
  category: string;
  items: {
    name: string;
    price: string;
    priceUnit?: string;
    priceNote?: string;
    description?: string;
  }[];
}

interface PriceCardProps {
  item: PriceItem;
  index: number;
}

const PriceCard = ({ item, index }: PriceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.15 * index, ease: "easeOut" }}
      className="h-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.02)] overflow-hidden border border-gray-100"
    >
      <div className="p-4 lg:p-6 bg-gradient-to-r from-gray-100 via-gray-50 to-white border-b border-gray-200">
        <h3 className="text-xl font-bold  tracking-wider">
          {item.category}
        </h3>
      </div>
      <div className="p-6">
        <ul className={`space-y-6 ${item.items.length === 1 ? 'lg:flex lg:justify-center' : ''}`}>
          {item.items.map((priceItem, i) => (
            <li key={i} className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 pb-5 border-b border-gray-100 last:border-b-0 last:pb-0 ${item.items.length === 1 ? 'lg:w-full lg:max-w-md' : ''}`}>
              <div className="flex-1">
                <h4 className="text-lg font-medium  tracking-wider">
                  {priceItem.name}
                </h4>
                {priceItem.description && (
                  <p className="mt-1 text-sm ">
                    {priceItem.description}
                  </p>
                )}
              </div>
              <div className="text-right">
                <span className="text-2xl lg:text-3xl font-bold  font-serif">
                  {priceItem.price}
                </span>
                {priceItem.priceUnit && (
                  <span className="text-xs text-gray-500 ml-1">
                    {priceItem.priceUnit}
                  </span>
                )}
                {priceItem.priceNote && (
                  <span className="text-xs text-gray-500 ml-1">
                    {priceItem.priceNote}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

interface PriceSectionProps {
  className?: string;
}

const PriceSection = ({ className = "" }: PriceSectionProps) => {
  const sectionRef = useRef(null);
  
  const prices: PriceItem[] = [
    {
      category: "首痛・肩こり",
      items: [
        {
          name: "全身整体コース",
          price: "8,800",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "首・肩のコリを中心に、全身の歪みを整えます（60分）"
        },
        {
          name: "集中ケアコース",
          price: "6,600",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "首・肩に特化した集中的な施術を行います（40分）"
        },
        {
          name: "初回お試しコース",
          price: "4,400",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "カウンセリング＋首・肩の施術（50分）"
        }
      ]
    },
    {
      category: "腰痛",
      items: [
        {
          name: "全身整体コース",
          price: "8,800",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "腰痛を中心に、全身の歪みを整えます（60分）"
        },
        {
          name: "集中ケアコース",
          price: "6,600",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "腰痛に特化した集中的な施術を行います（40分）"
        },
        {
          name: "初回お試しコース",
          price: "4,400",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "カウンセリング＋腰痛の施術（50分）"
        }
      ]
    },
    {
      category: "スポーツ外傷",
      items: [
        {
          name: "スポーツ整体コース",
          price: "9,900",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "スポーツ外傷の治療と予防のための施術（60分）"
        },
        {
          name: "メンテナンスコース",
          price: "7,700",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "定期的なケアで怪我の予防を目指します（45分）"
        },
        {
          name: "初回お試しコース",
          price: "5,500",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "カウンセリング＋スポーツケア（50分）"
        }
      ]
    },
    {
      category: "その他",
      items: [
        {
          name: "カウンセリング",
          price: "0",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "初回のカウンセリングは無料です"
        },
        {
          name: "テーピング",
          price: "550",
          priceUnit: "円",
          priceNote: "（税込）～",
          description: "部位に応じて料金が変わります"
        },
        {
          name: "延長10分",
          price: "1,100",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "各コースに追加可能です"
        }
      ]
    }
  ];

  return (
    <section id="price" ref={sectionRef} className={`scroll-mt-[100px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto ${className}`}>
      <div className="mx-auto">
        <AnimatedTitle 
          japaneseTitle="料金表" 
          englishTitle="PRICE" 
          
        />

        <div className={`grid items-stretch gap-10 ${prices.length === 1 ? 'lg:grid-cols-1 lg:justify-center' : 'lg:grid-cols-2'}`} style={prices.length === 1 ? {justifyItems: 'center'} : {}}>
          {prices.map((item, index) => (
            <div key={item.category} className={`${prices.length === 1 ? 'w-full' : ''} h-full`}>
              <PriceCard item={item} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <ul className="text-xs lg:text-sm  mb-8 space-y-1 list-none">
            <li className="flex items-start before:content-['※'] before:mr-1 before:shrink-0">
              <span className="flex-1">料金は全て税込表示です。</span>
            </li>
            <li className="flex items-start before:content-['※'] before:mr-1 before:shrink-0">
              <span className="flex-1">施術内容や時間によって料金が変動する場合があります。</span>
            </li>
            <li className="flex items-start before:content-['※'] before:mr-1 before:shrink-0">
              <span className="flex-1">初回限定価格は初めての方のみ対象です。</span>
            </li>
            <li className="flex items-start before:content-['※'] before:mr-1 before:shrink-0">
              <span className="flex-1">交通事故の施術は、健康保険・自賠責保険・労災保険が使用できます。詳しくは<Link href="/contact" className="underline hover:text-gray-600 transition-colors">お問い合わせ</Link>ください。</span>
            </li>
          </ul>
          {/* <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
          >
            ご予約・お問い合わせ
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
