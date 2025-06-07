"use client";

import AnimatedTitle from "@/components/ui/animated-title";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const qa = [
  {
    question: "施術は痛くありませんか？",
    answer: "当院の施術はできる限り痛みの少ない方法を心がけております。ご不安な点はお気軽にご相談ください。"
  },
  {
    question: "どのくらいの頻度で通えば良いですか？",
    answer: "お身体の状態やご希望により異なりますが、初めは週1回、その後は状態に応じて間隔を空けていくことが多いです。"
  },
  {
    question: "予約は必要ですか？",
    answer: "当院は完全予約制です。事前にご予約をお願いいたします。"
  },
  {
    question: "どんな服装で行けばいいですか？",
    answer: "動きやすい服装でお越しください。お着替えもご用意しておりますのでご安心ください。"
  },
  {
    question: "保険は使えますか？",
    answer: "当院は自費診療となります。保険はご利用いただけません。"
  },
  {
    question: "初回の所要時間はどれくらいですか？",
    answer: "初回はカウンセリングを含めて約60分〜90分ほどお時間をいただきます。"
  },
  {
    question: "妊娠中でも施術を受けられますか？",
    answer: "妊娠中の方もご相談いただけます。お身体の状態に合わせて無理のない施術を行います。"
  },
  {
    question: "子どもや高齢者も受けられますか？",
    answer: "年齢問わず施術可能です。お一人おひとりに合わせた施術を行いますのでご安心ください。"
  }
];

const QaSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section ref={sectionRef} className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <div>
        <AnimatedTitle
          japaneseTitle="よくある質問"
          englishTitle="FAQ"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
        <div className="mx-auto max-w-[1000px]">
        <p className="lg:text-center text-sm  mb-6 lg:mb-16">
          初めて当院での施術をご検討の方から多く寄せられる、よくあるご質問をまとめました。
          <br />
          この他にもご不明な点があれば、お気軽にお問い合わせください。
        </p>
        <Accordion type="single" collapsible defaultValue="item-0">
          {qa.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className={`p-4 bg-white border border-gray-200 last:border-b ${
                i !== 0 ? "mt-2" : ""
              }`}
            >
              <AccordionTrigger className="p-0 text-md no-underline hover:no-underline focus:no-underline cursor-pointer">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-0 pt-4 border-t border-gray-200 text-md mt-4 whitespace-pre-wrap">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QaSection;
