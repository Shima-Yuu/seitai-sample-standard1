"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import AnimatedTitle from "@/components/ui/animated-title";
import GradientButton from "@/components/ui/gradient-button";
import { CaretRight } from "@phosphor-icons/react";

interface TreatmentItem {
  title: string;
  description: string;
  points: string[];
  imageUrl: string;
}

interface TreatmentCardProps {
  item: TreatmentItem;
  index: number;
}

const TreatmentCard = ({ item, index }: TreatmentCardProps) => {
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
    >
      <div className="relative aspect-[16/9] mb-8 bg-gray-100 overflow-hidden">
        <Image 
          src={item.imageUrl}
          alt={`${item.title}の施術イメージ`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <h4 className="text-2xl  tracking-wider mb-4 font-normal">
        {item.title}
      </h4>
      <p className="text-sm  leading-relaxed mb-6">
        {item.description}
      </p>
      <div className="bg-white pt-2 p-4 border">
        <h5 className="font-bold  mb-4 border-b border-gray-200 pb-2">
          こんな方におすすめ
        </h5>
        <ul className="space-y-3 text-sm text-[15px] ">
          {item.points.map((point: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="relative top-1 w-4 h-4 /95 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

interface ServiceSectionProps {
  className?: string;
  showButton?: boolean;
}

const SolutionSection = ({ className = "", showButton = false }: ServiceSectionProps) => {
  const sectionRef = useRef(null);

  const treatments: TreatmentItem[] = [
    {
      title: "首痛、肩こり",
      description: "長時間のデスクワークやスマートフォンの使用による首・肩のコリや痛みを改善します。独自の施術で血行を促進し、凝り固まった筋肉をほぐすことで、首や肩の可動域を広げ、痛みの軽減を目指します。",
      points: [
        "同じ姿勢で座っていても肩回りに重たさを感じる",
        "頭痛に悩んでいる",
        "腕全体がだるい・重たいと感じる",
        "めまいや耳鳴り、吐き気が時々する",
        "過去に四十肩・五十肩を経験した事がある"
      ],
      imageUrl: "/menu/menu1.jpg"
    },
    {
      title: "腰痛",
      description: "慢性的な腰痛から急性の腰痛まで、お客様の症状に合わせた施術を行います。正しい姿勢の指導と、腰周りの筋肉や関節の調整により、根本的な改善を目指します。日常生活での予防法もアドバイスいたします。",
      points: [
        "長年、腰痛に悩まされている",
        "立ち上がった時や、起き上がった時に痛みがある",
        "寝返りで痛みがあり、目覚めてしまう",
        "湿布や痛み止めの薬が効かない",
        "長時間同じ姿勢がしんどい",
        "お尻や下半身のどこかにしびれがある",
      ],
      imageUrl: "/menu/menu2.jpg"
    },
    {
      title: "スポーツ外傷",
      description: "スポーツ活動による怪我や痛みに対して、早期回復と再発防止を目指した施術を行います。アスリートの方から趣味のスポーツまで、それぞれの活動レベルに合わせた最適なケアをご提案します。",
      points: [
        "スポーツ中の怪我で痛みが続いている",
        "以前の怪我の痛みが再発した",
        "怪我の予防をしたい",
        "パフォーマンスを向上させたい",
        "スポーツ復帰のためのリハビリを考えている"
      ],
      imageUrl: "/menu/menu3.jpg"
    },
    {
      title: "交通事故でお悩みの方",
      description: "交通事故による首や腰の痛み、むち打ちなどの症状に対して、丁寧な施術で回復をサポートします。保険適用の手続きもお手伝いし、事故後の身体の不調を総合的にケアいたします。",
      points: [
        "事故後の痛みや違和感が続いている",
        "むち打ち症の症状がある",
        "頭痛やめまいに悩まされている",
        "夜眠れない、不眠が続いている",
        "保険での治療を考えている"
      ],
      imageUrl: "/menu/menu4.jpg"
    }
  ];

  return (
    <section id="menu" ref={sectionRef} className={`scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto ${className}`}>
      <div className="relative mx-auto">
        <AnimatedTitle 
          japaneseTitle="症状別のお悩み" 
          englishTitle="TREATMENT MENU" 
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {treatments.map((item, index) => (
            <TreatmentCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {showButton && (
          <div className="text-center mt-16">
            <GradientButton href="/menu#price" icon={<CaretRight size={16} weight="bold" />}>
              料金はこちら
            </GradientButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionSection; 