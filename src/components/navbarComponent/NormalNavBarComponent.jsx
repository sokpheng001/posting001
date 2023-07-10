'use client'
import React, {useEffect, useState} from "react";
import {Button, IconButton, Input, MobileNav, Navbar, Typography} from "@material-tailwind/react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useFormik} from "formik";
import * as yup from "yup"


const  localhost_search_for_video_api = `http://localhost:8080/api/v3/videos/search_query=;`

// const search_query = async (title)=>{
//     const query = await fetch(localhost_search_for_video_api + title);
//     return await query.json();
// }


//API

//     search input
//     yup
const yupValidators = yup.object({
    search:yup.string().required("Content is needed.")
})

export default function NormalNavBarComponent() {
  const [openNav, setOpenNav] = useState(false);
  // border
    const pathName_1 = usePathname();
    const border = (path,PathNameOnNavbar)=>{
        if (pathName_1.includes(`/${path}`)){
            return (
                <Link href={`/${path}`} className="flex items-center border-b-2 ">
                    {`${PathNameOnNavbar}`}
                </Link>
            )
        }else{
            return (
                <Link href={`${path}`} className="flex items-center">
                    {`${PathNameOnNavbar}`}
                </Link>
            )
        }
    }

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
//


    // formik
    const  formik = useFormik({
        initialValues:{
            search:"",
        },
        validationSchema:yupValidators,
        // onSubmit: async (values)=>{
        // //     to do
        //     const fetching = await search_query(values.search);
        //     alert(JSON.stringify(fetching.data[0].videoTitle))
        // },
        onSubmit: (values)=>{
            //     to do
            alert(JSON.stringify(values))
        }
    });
    // search
    const searchInput = (
         // search button
        <section className={"justify-center flex"}>
            <form onSubmit={formik.handleSubmit} className="relative flex w-full gap-2 md:w-max">
                <Input
                    type="text"
                    label="Search here..."
                    className="pr-10 border-gray-300 focus:border-t-0 text-black shadow-none focus:shadow-none  md:min-w-[500px]"
                    color={"gray"}
                    name={"search"}
                    id={"search"}
                    value={formik.values.search}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.search && formik.errors.search}
                />
                <Button type={"submit"} size="sm" className="!absolute right-1 top-1 rounded bg-gray-300 text-black shadow-none hover:shadow-none" >
                    Search
                </Button>
            </form>
        </section>
    // {/*  end of search*/}
    )
  //   end of search
  const navList = (
      <Navbar shadow={false}>
          <ul className="justify-center mb-4 mt-2  flex flex-row flex-wrap gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
              <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
              >
                  {border("/","Home")}
              </Typography>
              <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
              >
                  {border("/flps","FLPs")}
              </Typography>
              {/*  videos*/}
              <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
              >
                  {border("/videos","Videos")}
              </Typography>
              <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
              >
                  {border("/blocks","Blocks")}
              </Typography>
              {/*  */}
              <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
              >
                  {border("/production","Production")}
              </Typography>
              <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
              >
                  {border("/faqs","FAQs")}
              </Typography>
              <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
              >
                  {border("/about-us","About us")}
              </Typography>
          </ul>
          {/*search input*/}
          <div>
              {searchInput}
          </div>
      </Navbar>
  );
//  end of nav list

// path name

const pathName = usePathname();
if(pathName==="/login" || pathName.includes("/admin") || pathName.includes("sign-in") || pathName.includes("sign-up") ){
  return null;
}
// 
  return (
    <Navbar
      shadow={false}
      className="mx-auto py-2 px-4 lg:px-8 lg:py-4 border-b-gray-300 rounded-none"
    >
      <div className="container mx-auto flex items-center justify-between text-black">
          <Link href={"/"} className={"m-2"}>
              <Typography
                  className="mr-4 ml-2 cursor-pointer py-1.5 font-bold text-lg"
              >
                  Cambodia Remix
              </Typography>
          </Link>
        {/* Nav List */}
        <div className="hidden lg:block">
            {/*{navList}*/}
            {searchInput}

        </div>
        {/*  */}
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="gray" className={"hover:shadow-gray-50 hover:bg-gray-200"}>
              <Link href={"/sign-in"}>
                  Sign In
              </Link>
          </Button>
          <Button
            className="bg-gray-300 shadow-none hover:shadow-gray-50 text-black"
            size="sm"
          >
              <Link href={"/sign-up"}>
                  Sign Up
              </Link>
          </Button>

        </div>
        {/* end  */}
        <IconButton
          variant="text"
          className="p-4 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={true}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
        {/*search input*/}
        <div className={'m-2 hidden md:block'}>
            {/*{searchInput}*/}
        </div>
      {/*  end */}
      {/*  */}
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          {/*<Button*/}
          {/*  size="sm"*/}
          {/*  fullWidth*/}
          {/*  className=" bg-blue-gray-300 shadow-none hover:shadow-blue-gray-50 text-black"*/}
          {/*>*/}
          {/*  <span>Store Now</span>*/}
          {/*</Button>*/}
        </div>
      </MobileNav>
    </Navbar>
  );
}