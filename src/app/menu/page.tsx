import ServiceSection from "@/components/content/service";
import PriceSection from "@/components/content/price";
export default async function MenuPage() {

  return (
    <main>
      <ServiceSection className="pt-30 lg:pt-40" />
      <PriceSection />
    </main>
  );
}