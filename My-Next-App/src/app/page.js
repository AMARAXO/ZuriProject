import Image from "next/image";
import BestSellers from "@/components/bestseller";
import ProductGrid from "@/components/products";
import ContactUsFooter from "@/components/contactUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <BestSellers/>
      <ProductGrid/>
      <ContactUsFooter/>
    </div>
    </main>
  );
}
