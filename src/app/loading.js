
import FlpCardSkeletonComponent from "@/components/skeleton/flpCardSkeleton/FlpCardSkeletonComponent";


export default function Home() {
    return (
        <main className="container m-auto ">
            <div className={"w-auto mt-4 flex flex-wrap justify-center gap-[13.34px] lg:gap-[13.34px]"}>
                {[1,2,3,4].map(e=>(
                    <FlpCardSkeletonComponent key={e}/>
                ))}
            </div>
        </main>
    );
}
