import AnimatedTitle from "@/components/ui/animated-title";

const privacyPolicyContent = {
  title: "プライバシー<br class='block md:hidden' />ポリシー",
  sections: [
    {
      id: 1,
      title: "個人情報の取り扱いについて",
      content: "当店は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（以下「個人情報保護法」）を遵守すると共に、以下のプライバシーポリシーに基づき、個人情報を取り扱います。"
    },
    {
      id: 2,
      title: "収集する個人情報の範囲",
      content: "当店は、以下の個人情報を収集する場合があります。",
      list: [
        "氏名",
        "住所",
        "電話番号",
        "メールアドレス",
        "生年月日",
        "性別",
        "その他、当店のサービス提供に必要な情報"
      ]
    },
    {
      id: 3,
      title: "個人情報の利用目的",
      content: "当店は、収集した個人情報を以下の目的で利用します。",
      list: [
        "当店のサービス提供のため",
        "お客様からのお問い合わせへの対応",
        "当店からのお知らせや情報提供",
        "サービスの品質向上のための分析",
        "法令に基づく対応"
      ]
    },
    {
      id: 4,
      title: "個人情報の第三者提供",
      content: "当店は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供いたしません。ただし、当店のサービス提供に必要な範囲内で、委託先に個人情報を委託することがあります。"
    },
    {
      id: 5,
      title: "個人情報の安全管理",
      content: "当店は、個人情報の漏洩、滅失、き損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。"
    },
    {
      id: 6,
      title: "個人情報の開示・訂正・利用停止",
      content: "お客様ご本人からの個人情報の開示、訂正、利用停止のご要望に対しては、法令に基づき適切に対応いたします。"
    },
    {
      id: 7,
      title: "プライバシーポリシーの変更",
      content: "当店は、必要に応じて本プライバシーポリシーを変更することがあります。重要な変更がある場合は、当店のウェブサイト上でお知らせいたします。"
    },
    {
      id: 8,
      title: "お問い合わせ窓口",
      content: "本プライバシーポリシーに関するお問い合わせは、下記の窓口までご連絡ください。"
    }
  ],
  contact: {
    shopName: "ルミカラー",
    address: "〒000-0000 東京都○○区○○町1-2-3",
    phone: "03-1234-5678",
    email: "info@lumicolor.example.com"
  },
  dates: {
    established: "2024年1月1日",
    lastUpdated: "2024年1月1日"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto pt-30 lg:pt-40">
      <AnimatedTitle
        japaneseTitle={privacyPolicyContent.title}
        englishTitle="PRIVACY POLICY"
      />
      <section className="space-y-10  leading-relaxed text-md">
        {privacyPolicyContent.sections.map((section) => (
          <div key={section.id}>
            <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-6 font-serif tracking-wider">
              {section.id}. {section.title}
            </h2>
            <p className="whitespace-pre-wrap">{section.content}</p>
            {section.list && (
              <ul className="mt-4 space-y-2">
                {section.list.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="-mt-[0.5px]">•</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-sm  space-y-2">
            <p>制定日: {privacyPolicyContent.dates.established}</p>
            <p>最終更新日: {privacyPolicyContent.dates.lastUpdated}</p>
          </div>
          <div className="mt-8 text-sm">
            <p className="font-bold mb-2">{privacyPolicyContent.contact.shopName}</p>
            <p>{privacyPolicyContent.contact.address}</p>
            <p>TEL: {privacyPolicyContent.contact.phone}</p>
            <p>Email: {privacyPolicyContent.contact.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
