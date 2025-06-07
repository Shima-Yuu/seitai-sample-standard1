"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedTitle from "@/components/ui/animated-title";
import Image from "next/image";

const flowSteps = [
  {
    title: "受付・ご案内",
    description: "ご来院後、受付でお名前をお伺いし、問診票のご記入をお願いいたします。お着替えのご案内もさせていただきます。",
    imageUrl: "/top/flow1.jpg"
  },
  {
    title: "カウンセリング",
    description: "痛みの症状や原因、生活習慣などを丁寧にお伺いし、最適な施術プランをご提案いたします。",
    imageUrl: "/top/flow2.jpg"
  },
  {
    title: "施術",
    description: "お一人おひとりの症状に合わせた施術を、リラックスできる空間で行います。痛みを最小限に抑えた丁寧な施術を心がけています。",
    imageUrl: "/top/flow3.jpg"
  },
  {
    title: "お会計・アフターケア",
    description: "施術後の経過説明と、ご自宅でのケア方法をお伝えいたします。次回のご予約も承ります。",
    imageUrl: "/top/flow4.jpg"
  },
];

const FlowSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section ref={sectionRef} className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <div className="relative">
        <AnimatedTitle 
          japaneseTitle="施術の流れ" 
          englishTitle="FLOW" 
        />
        <div className="relative">
          {/* 横線（PC）アニメーション */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200 origin-left"
            style={{ transform: 'translateY(-50%)' }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          />
          {/* 縦線（SP/iPad）アニメーション */}
          <motion.div
            className="block lg:hidden absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 origin-top"
            style={{ transform: 'translateX(-50%)' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          />
          {/* PC: 横1行, SP/iPad: 縦1列 */}
          <div className="grid lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] grid-cols-1 gap-6 relative z-10">
            {flowSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                className="bg-white p-6 pt-4 shadow-[0_2px_24px_rgba(0,0,0,0.04)] border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: isInView ? 0.8 + idx * 0.15 : 0, ease: "easeOut" }}
              >
                <span className="flex items-center justify-center text-lg font-bold  font-serif bg-white tracking-widest mb-4">
                  {idx + 1}
                </span>
                <div className="relative w-full aspect-[16/9] mb-4">
                  <Image
                    src={step.imageUrl}
                    alt={`${step.title}のイメージ`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold  mb-4 tracking-wider font-serif w-full text-center">{step.title}</h3>
                <p
                  className=" text-sm leading-relaxed font-light w-full text-center"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
