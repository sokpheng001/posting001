import {Suspense} from "react";
import SpinnerComponent from "@/components/SpinnerComPonent"


export const metadata = {
    title: "FAQ",
    description: "Welcome to Pagraph for FAQ section",
};


export default function FAQ(){
    return(
        <Suspense fallback={SpinnerComponent}>

        </Suspense>
    )
}