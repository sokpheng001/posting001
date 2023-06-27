import ProductCard from "@/components/ProductCard";
import SpinnerComponent from "@/components/SpinnerComPonent"
import {Suspense} from "react";



export const metadata = {
  title: "Product",
  description: "Welcome to Pagraph for production",
};

export default function Product() {
  return (
    <main className="container m-auto">
      <div className=" mt-5 lg:gap-[13.34px] md:gap-8 gap-4 w-auto flex flex-wrap justify-center grid-cols-3">
        {[1, 2, 3, 4].map((e) => (
            <Suspense fallback={SpinnerComponent}>
                <ProductCard key={e} />
            </Suspense>
        ))}
      </div>
    </main>
  );
}
