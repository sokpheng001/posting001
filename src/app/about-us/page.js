export const metadata = {
    title: "About Us",
    description: "About Cambodia Remix",
};


export default function AboutUs (){
    return (
        <main className={"container m-auto"}>
            <section className="flex justify-center items-center mt-5">
                <img src="/images/whoami.png" className=" w-1/2 h-1/2 shadow-sm  rounded-lg" alt="who is cambodia remix"/>
            </section>
            <section className="flex justify-center items-center mt-5">
                <p className={"text-3xl font-bold md:text-6xl "}>WHO AM I</p>
            </section>
            <section className="flex justify-center items-center mt-5">
                <img src="/images/cambodia_remix.jpg" className=" w-1/3 h-1/3  rounded-full" alt="cambodia remix"/>
            </section>
        </main>
    )
}