import Image from "next/image";
import { Certificate } from "@phosphor-icons/react/dist/ssr";
import AnimatedTitle from "@/components/ui/animated-title";

const aboutContent = {
  greeting: {
    title: "院長よりごあいさつ",
    text: [
      "「痛みのない毎日を、一人でも多くの方へ。」",
      "その想いを胸に、日々の施術に真摯に向き合っています。",
      "お一人おひとりに寄り添い、最適な施術プランをご提案いたします。",
    ],
  },
  image: {
    src: "/top/about.jpg",
    alt: "院長の写真",
  },
  qualifications: {
    title: "保有資格",
    items: [
      "柔道整復師",
      "鍼灸師",
      "日本スポーツ協会公認アスレティックトレーナー",
      "赤十字救急法救急員",
    ],
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <AnimatedTitle
          japaneseTitle="私たちについて"
          englishTitle="ABOUT"
        />
      <div className="container mx-auto">
        <div className="mx-auto lg:flex">
          <div className="relative lg:w-1/2 lg:mx-6 w-full aspect-video">
            <Image 
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>

          <div className="mt-8 lg:w-1/2 lg:pl-6 lg:mt-0">
            <h3 className="heading text-2xl font-semibold  dark:text-white lg:text-3xl lg:w-96 tracking-[0.06em]">
              {aboutContent.greeting.title}
            </h3>

            <p className="max-w-lg mt-6 text-sm tracking-wider">
              {aboutContent.greeting.text.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < aboutContent.greeting.text.length - 1 && <br />}
                </span>
              ))}
            </p>

            <div className="mt-8">
              <div className="bg-white p-5 lg:p-6 pt-3 lg:pt-4  border border-gray-200">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                  <Certificate size={24} weight="light" />
                  <h4 className="heading text-xl font-medium ">
                    {aboutContent.qualifications.title}
                  </h4>
                </div>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {aboutContent.qualifications.items.map((qualification, index) => (
                    <li key={index} className="flex items-baseline gap-2">
                      <span className="leading-none">•</span>
                      <span className="text-sm tracking-wider">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}