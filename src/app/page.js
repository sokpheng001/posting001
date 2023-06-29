
import AnimeCard from "@/components/AnimeCard";
import SlideBarComponent from "@/components/SlideBarComponent";

export default function Home() {
  return (
    <main className="container m-auto ">
      <div className=" w-auto flex flex-wrap justify-center align-middle mt-5">
        {/* to say */}
        <AnimeCard img_url={"./images/cambodia_remix.jpg"}/>
      </div>
    </main>
  );
}
