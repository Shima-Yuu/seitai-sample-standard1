"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SITE_NAME } from "@/constants/site-info";
import Image from "next/image";

// import Link from "next/link";

const ProblemSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const concerns = [
    {
      title: "首や肩のつらい痛み",
      description: "デスクワークやスマートフォンの使用で、首や肩に慢性的な痛みを感じていませんか？頭痛やめまい、吐き気などの症状も出てきて、日常生活に支障が出ているかもしれません。"
    },
    {
      title: "腰の痛みで動くのが辛い",
      description: "長年の腰痛で立ち座りが辛い、寝返りで痛みが出る、足にしびれが出るなど。「年齢だから」と諦めていた腰の痛みも、適切な施術で改善できる可能性があります。"
    },
    {
      title: "膝の痛みで歩行が困難",
      description: "階段の上り下りが辛い、長時間の歩行で痛みが出る、正座ができないなど。膝の痛みは放置すると悪化する可能性があります。早めの対処で改善を目指しましょう。"
    },
    {
      title: "手足の痺れやだるさ",
      description: "手足の痺れやだるさ、冷えの症状はありませんか？これらの症状は神経の圧迫や血行不良が原因かもしれません。原因を特定し、適切な施術で改善を図ります。"
    },
    {
      title: "スポーツでの怪我や痛み",
      description: "スポーツ中の怪我や、以前の怪我の再発による痛みでお悩みの方。パフォーマンスの低下を防ぎ、早期回復と再発防止のための施術を行います。"
    },
    {
      title: "交通事故後の不調",
      description: "交通事故によるむち打ちや腰の痛み、頭痛やめまいなどの後遺症でお困りの方。保険診療に対応し、事故後の身体の不調を丁寧にケアいたします。"
    }
  ];

  return (
    <>
      <div className="w-full bg-gradient-to-b from-white via-gray-200/80 to-white overflow-hidden">
        <section className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
          <motion.div 
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="text-center mb-12">
              <h2 className="text-[23px] lg:text-[32px] font-bold tracking-widest">
                このような症状で<br className="block lg:hidden" />
                お悩みの方へ
              </h2>
              <p className="mt-4 text-sm lg:text-md tracking-wider">
                痛みの原因は人それぞれ異なります。<br />当院では、お一人おひとりの症状に合わせた最適な施術プランをご提案いたします。
              </p>
            </div>

            <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
              <div className="lg:col-span-7 space-y-4">
                {concerns.map((concern, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 20
                    }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className="flex items-start gap-4 p-6 bg-white shadow-[0_0_40px_rgba(0,0,0,0.01)]"
                  >
                    <div className="flex-shrink-0 pt-1">
                      <svg className="w-6 h-6 /95" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold  tracking-wider">
                        {concern.title}
                      </h3>
                      <p className="text-sm lg:text-md mt-2  tracking-wider">
                        {concern.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="hidden lg:block lg:col-span-5 relative mt-12 lg:mt-0">
                <div className="sticky top-8">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src="/top/problem.jpg"
                      alt="お悩みの方へ"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      quality={90}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <section className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-[23px] lg:text-[32px] font-bold tracking-widest mb-6 text-center">
            あきらめていた痛みも<br />
            改善できる可能性があります
          </h3>
          <p className="text-center text-sm lg:text-md">
            「年齢だから仕方ない」「様子を見ましょう」と言われ、改善の見込みが立たずに悩んでいませんか？<br />
            {SITE_NAME}では、痛みの原因を丁寧に見極め、根本的な改善を目指した施術を行います。
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default ProblemSection;
