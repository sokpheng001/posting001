import VideoCardComponent from "@/components/card/videoCard/VideoCardComponent";
import VideoCardSkeletonComponent from "@/components/skeleton/videoCardSkeleton/VideoCardSkeletonComponent";

export const metadata = {
    title: "Videos  - Cambodia Remix",
    description: "Video for music teaching",
};


export default function Video(){
    return (
        <main className={"container m-auto"}>
            <div className="w-auto flex flex-wrap justify-center align-middle gap-5 lg:gap-[13.34px] lg:mt-4 mt-5">
                {/* to say */}
                <VideoCardComponent/>
                <VideoCardSkeletonComponent/>
                <VideoCardComponent/>
                <VideoCardSkeletonComponent/>
            </div>
        </main>
    )
}