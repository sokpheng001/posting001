import ProductCard from "@/components/card/FlpCardComponent";

// export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   const id = params.id;
//
//   // fetch data
//   const product = await fetch(`http://localhost:8080/api/v3/flps/${id}`);
//   const json = await product.json();
//   const data = json.data;
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];
//   return {
//     title: data,
//     openGraph: {
//       images: [`${product}`, ...previousImages],
//     },
//   };
// }
// fetch data

const products = async (id) => {
  // fetch data
  // const flp = await fetch(`http://localhost:8080/api/v3/flps/${id}`);
  // const json = await flp.json();
  // const data = json.data;
};

export default async function Product({ params }) {
  const flp = await products(params.id) || [1];
  return (
    <main className="container m-auto">
      <div className=" mt-5 lg:gap-[13.34px] md:gap-8 gap-4 w-auto flex flex-wrap justify-center">
        <ProductCard />
      </div>
    </main>
  );
}
