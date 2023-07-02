import {Suspense} from "react";
import SpinnerComponent from "@/components/SpinnerComPonent"
import FaqComponent from "@/components/FaqComponent"


export const metadata = {
    title: "FAQs - Cambodia Remix",
    description: "Welcome to Cambodia Remix for FAQs section",
};


export default function FAQ(){
    return (
      <main className="container m-auto">
        <section className="flex justify-center items-center mt-4 md:p-10 p-4 m-2 lg:m-0 ">
          <img src="/images/cambodia_remix.jpg" className="w-1/3 h-1/3  rounded-lg" alt="cambodia remix"/>
        </section>
        <Suspense fallback={SpinnerComponent}>
          {[{ name: "Cambodia Remix", title: "Music digital platform" }].map((e, index) => (
            <FaqComponent key={e} question={e.name} answer={e.title} />
          ))}
        </Suspense>
      </main>
    );
}