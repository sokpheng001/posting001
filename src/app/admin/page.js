import SlideBarComponent from "@/components/adminComponent/slideBarComponent/SlideBarComponent"
import AdminNavbar from "@/components/adminComponent/adminNavbarComponent/AdminNavbar";




export const metadata = {
    title: "Admin - Cambodia Remix",
    description: "Welcome to Cambodia Remix for production",
};



export default function Admin(){
    return(
        <div className={""}>
        <main className={"container m-auto"}>
            <AdminNavbar/>
            <div className="grid grid-cols-3 grid-flow-col md:mt-5 md:h-auto mt-0 h-96">
                <div className="col-span-1 md:block hidden">
                    <SlideBarComponent/>
                </div>
                <div className="col-span-3 flex justify-center items-center flex-col gap-4">
                    <div className={"flex justify-center"}>
                        <img src={"/admin/admin_pic1.png"} className={"w-1/2 animate-bounce-slow"} alt={"No content"}/>
                    </div>
                    <div className={"font-bold text-3xl"}>
                        <p>Welcome to Admin</p>
                    </div>
                </div>
            </div>
        </main>
        </div>
    )
}