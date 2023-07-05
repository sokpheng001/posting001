import FlpCard from "@/components/card/flpCard/FlpCardComponent";
import SpinnerComponent from "@/components/SpinnerComPonent"
import {Suspense} from "react";
import FlpCardSkeletonComponent from "@/components/skeleton/flpCardSkeleton/FlpCardSkeletonComponent";

export const metadata = {
  title: "FLPs - Cambodia Remix",
  description: "Welcome to Cambodia Remix for production",
};


const  fetchProduct  = async  ()=>{
    // const product = await fetch(`http://localhost:8080/api/v3/products`);
    //     const  json = await product.json();
    //     console.log(json.data)
    //     return json.data;
}

export default async function Product() {
    const products = await fetchProduct() || [1];
    console.log(products)
  return (
    <main className="container m-auto">
      <div className=" mt-4 lg:gap-[13.34px] md:gap-8 gap-4 w-auto flex flex-wrap justify-center grid-cols-3">
        {products.map((e,index) => (
            <Suspense fallback={SpinnerComponent} key={index}>
                <FlpCard id={e.id} name={e.pd_name} description={e.pd_des} img_url={e.pd_img} price={e.pd_price}/>
                {/*<FlpCardSkeletonComponent/>*/}
            </Suspense>
        ))}
      </div>
    </main>
  );
}
