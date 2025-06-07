"use client";
import AnimatedTitle from "@/components/ui/animated-title";
import { InstagramLogo, Phone, EnvelopeSimple } from "@phosphor-icons/react";
import { INSTAGRAM_LINK, TEL, EMAIL } from "@/constants/site-info";
import Form from "@/components/forms/contact-form";
import Image from "next/image";

const LINE_LINK = "https://lin.ee/xxxxxx"; // 仮のLINEリンク

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl pt-30 lg:pt-40">
      <div className="">
        <AnimatedTitle
          japaneseTitle="ご予約<span class='hidden md:inline'>・</span><br class='block md:hidden' />お問い合わせ"
          englishTitle="CONTACT"
        />
        <p className="lg:text-center text-sm mb-6 lg:mb-16 leading-relaxed">
          ご予約やお問い合わせは、お電話・メール・LINEなど、お好みの方法でお気軽にご連絡ください。<br className="hidden lg:block" />
          初めての方もお気軽にご相談いただけます。丁寧にご説明させていただきます。
        </p>
        <div className="lg:flex lg:items-start lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6 mt-0 lg:mt-12">
            <p className="text-md text-center lg:text-left capitalize">
              以下からご予約の方は、予約内容とご希望の日時をお知らせください。
              <br className="block" />
              お問い合わせの方は、ご質問内容をご記入ください。
            </p>
            <div className="mt-6 space-y-8 md:mt-8">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  tracking-wider hover:opacity-60 transition-all duration-400"
              >
                <span className="border border-gray-300 bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                  <InstagramLogo size={24} weight="light" />
                </span>
                <span className="mx-2">@meguri_seitai</span>
              </a>
              <a
                href={`tel:${TEL}`}
                className="flex items-center  tracking-wider hover:opacity-60 transition-all duration-400"
              >
                <span className="border border-gray-300 bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                  <Phone size={24} weight="light" />
                </span>
                <span className="mx-2">{TEL}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  truncate tracking-wider hover:opacity-60 transition-all duration-400"
              >
                <span className="border border-gray-300 bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                  <EnvelopeSimple size={24} weight="light" />
                </span>
                <span className="mx-2">{EMAIL}</span>
              </a>
              <a
                href={LINE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  tracking-wider hover:opacity-60 transition-all duration-400"
              >
                <span className="border border-gray-300 bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                  <Image src="/icons/line.png" alt="LINE" width={20} height={20} />
                </span>
                <span className="mx-2">LINEでお問い合わせ</span>
              </a>
            </div>
          </div>
          <div className="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
            <div className="border border-gray-200 w-full px-4 py-6 lg:px-8 lg:py-10 mx-auto overflow-hidden bg-white lg:max-w-xl shadow-[0_0_40px_rgba(0,0,0,0.04)]">
              <Form />
              <p className="text-xs text-gray-500 mt-4 text-center">
                送信ボタンを押すことで
                <a href="/privacy-policy" className="underline hover:text-slate-700 transition-colors mx-1" target="_blank" rel="noopener noreferrer">
                  プライバシーポリシー
                </a>
                に同意したものとみなします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
