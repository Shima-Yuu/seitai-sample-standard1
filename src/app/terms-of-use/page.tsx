import AnimatedTitle from "@/components/ui/animated-title";
// 利用規約の内容を変数として定義
const termsOfUseContent = {
    title: "サイトのご利用<br class='block md:hidden' />について",
    sections: [
      {
        id: 1,
        title: "はじめに",
        content: "本利用規約（以下「本規約」といいます。）は、当店が提供するサービス（以下「本サービス」といいます。）の利用条件を定めるものです。本サービスをご利用いただく際には、本規約に同意していただく必要があります。"
      },
      {
        id: 2,
        title: "定義",
        content: "本規約において、以下の用語はそれぞれ以下の意味を有するものとします。",
        list: [
          "「当店」とは、本サービスを提供する事業者を指します。",
          "「ユーザー」とは、本サービスを利用する個人または法人を指します。",
          "「本サービス」とは、当店が提供する全てのサービスを指します。",
          "「コンテンツ」とは、本サービス上で提供される全ての情報、画像、動画、テキスト等を指します。"
        ]
      },
      {
        id: 3,
        title: "利用登録",
        content: "本サービスの利用を希望するユーザーは、当店が定める方法により利用登録を行い、当店がこれを承認することによって、本サービスの利用が開始されるものとします。当店は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあります。",
        list: [
          "本規約に違反したことがある者からの申請である場合",
          "その他、当店が利用登録を相当でないと判断した場合"
        ]
      },
      {
        id: 4,
        title: "禁止事項",
        content: "ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。",
        list: [
          "法令または公序良俗に違反する行為",
          "犯罪行為に関連する行為",
          "当店のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為",
          "当店のサービスの運営を妨害するおそれのある行為",
          "他のユーザーに関する個人情報等を収集または蓄積する行為",
          "他のユーザーに成りすます行為",
          "当店のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為",
          "その他、当店が不適切と判断する行為"
        ]
      },
      {
        id: 5,
        title: "本サービスの提供の停止等",
        content: "当店は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。",
        list: [
          "本サービスにかかるコンピュータシステムの保守点検または更新を行う場合",
          "地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合",
          "その他、当店が本サービスの提供が困難と判断した場合"
        ]
      },
      {
        id: 6,
        title: "利用制限および登録抹消",
        content: "当店は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。",
        list: [
          "本規約のいずれかの条項に違反した場合",
          "その他、当店が本サービスの利用を適当でないと判断した場合"
        ]
      },
      {
        id: 7,
        title: "保証の否認および免責事項",
        content: "当店は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。"
      },
      {
        id: 8,
        title: "サービス内容の変更等",
        content: "当店は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。"
      },
      {
        id: 9,
        title: "利用規約の変更",
        content: "当店は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。"
      },
      {
        id: 10,
        title: "お問い合わせ窓口",
        content: "本規約に関するお問い合わせは、下記の窓口までご連絡ください。"
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
  

export default function TermsOfUsePage() {
  return (
    <main className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto pt-30 lg:pt-40">
      <AnimatedTitle
        japaneseTitle={termsOfUseContent.title}
        englishTitle="TERMS OF USE"
        className="mb-12 relative overflow-visible"
      />
      <section className="space-y-10  leading-relaxed text-md">
        {termsOfUseContent.sections.map((section) => (
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
            <p>制定日: {termsOfUseContent.dates.established}</p>
            <p>最終更新日: {termsOfUseContent.dates.lastUpdated}</p>
          </div>
          <div className="mt-8 text-sm">
            <p className="font-bold mb-2">{termsOfUseContent.contact.shopName}</p>
            <p>{termsOfUseContent.contact.address}</p>
            <p>TEL: {termsOfUseContent.contact.phone}</p>
            <p>Email: {termsOfUseContent.contact.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
