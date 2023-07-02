
import BlockUploadFormComponent from "@/components/blocksComponent/BlockUploadFormComponent";
import {Suspense} from "react";
import BlockLoading from "@/app/blocks/loading";

export const metadata = {
    title: "Blocks - Cambodia Remix",
    description: "Welcome to Cambodia Remix for Blocks section",
};


export default function Block (){
    return (
        <main className={"container m-auto"}>
            <div className={"mt-4 md:p-10 p-4 m-2 lg:m-0 "}>
            <Suspense fallback={<BlockLoading/>}>
                <BlockUploadFormComponent/>
            </Suspense>
            </div>
        </main>
    )
}