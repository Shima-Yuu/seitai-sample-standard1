// import Image from "next/image";
import { SITE_NAME } from "@/constants/site-info";
import {
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import { TWITTER_LINK, FACEBOOK_LINK, INSTAGRAM_LINK, TEL, HOURS, HOLIDAY, POST_CODE, ADDRESS } from "@/constants/site-info";
import AccessSection from "@/components/content/access";

const socialIcons = [
  { icon: FacebookLogo, name: "Facebook", href: FACEBOOK_LINK },
  { icon: InstagramLogo, name: "Instagram", href: INSTAGRAM_LINK },
  { icon: TwitterLogo, name: "Twitter", href: TWITTER_LINK },
];

const navItems = [
  { name: "トップページ", href: "/" },
  { name: "症状別のお悩み", href: "/menu" },
  { name: "料金表", href: "/menu#price" },
  { name: "店舗情報・アクセス", href: "/#access" },
  { name: "お知らせ", href: "/news" },
  { name: "ご予約・お問い合わせ", href: "/contact" },
];

const legalItems = [
  { name: "プライバシーポリシー", href: "/privacy-policy" },
  { name: "サイトのご利用について", href: "/terms-of-use" },
];


const getCurrentYear = () => new Date().getFullYear();


export default function Footer() {
  return (
    <>
    <AccessSection />
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 連絡先 + SNS */}
            <div className="space-y-8">
              <div>
                <h2 className="heading text-2xl ">{SITE_NAME}</h2>
              </div>
              <div className="space-y-4">
                <p>
                  <span className="text-xs tracking-wide text-gray-500 uppercase">
                    お電話はこちら
                  </span>
                  <a
                    href={`tel:${TEL}`}
                    className="block text-2xl font-medium  hover:opacity-60 transition-all duration-400 sm:text-3xl tracking-wider font-serif"
                  >
                    {TEL}
                  </a>
                </p>

                <ul className="space-y-2 text-sm ">
                  <li className="mt-1">住所　{POST_CODE}<br />　　　{ADDRESS.split(' ')[0]}<br />　　　{ADDRESS.split(' ')[1]}</li>
                  <li className="mt-1">施術時間　{HOURS}</li>
                  <li className="mt-1">定休日　{HOLIDAY}</li>
                </ul>
              </div>

              <ul className="flex gap-6 text-gray-700">
                {socialIcons.map(({ icon: Icon, name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-60 transition-all duration-400"
                    >
                      <span className="sr-only">{name}</span>
                      <Icon size={24} weight="light" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ナビゲーション */}
            <div className="w-full flex gap-12 justify-between sm:justify-center lg:justify-end">
              <ul className="space-y-4 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="heading  hover:opacity-60 transition-all duration-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4 text-sm">
                {legalItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="heading  hover:opacity-60 transition-all duration-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        
      </div>
      {/* フッター下部 */}
      <div className="border-t border-gray-200 py-2 lg:py-8 text-center">
          <div className="">
            <p className="text-xs lg:text-sm text-gray-500">
              &copy; {getCurrentYear()} {SITE_NAME}. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
    </>
  );
}