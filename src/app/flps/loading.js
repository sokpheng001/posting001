import FlpCardSkeletonComponent from "@/components/skeleton/flpCardSkeleton/FlpCardSkeletonComponent";

export default function FlpLoading(){
    return (
        <main className={"container m-auto"}>
            <div className=" mt-4 lg:gap-[13.34px] md:gap-8 gap-4 w-auto flex flex-wrap justify-center grid-cols-3">
            <FlpCardSkeletonComponent/>
            </div>
        </main>
    )
}