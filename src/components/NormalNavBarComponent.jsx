'use client'
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";


 
export default function NormalNavBarComponent() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
// 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/flps" className="flex items-center">
          FLPs
        </Link>
      </Typography>
      {/*  videos*/}
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <Link href="/videos" className="flex items-center">
                Videos
            </Link>
        </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/blocks" className="flex items-center">
          Blocks
        </Link>
      </Typography>
      {/*  */}
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <Link href="/production" className="flex items-center">
                Production
            </Link>
        </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/about-us" className="flex items-center">
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/faqs" className="flex items-center">
          FAQs
        </Link>
      </Typography>
    </ul>
  );
//  end of navlist
// path name
const pathName = usePathname();
if(pathName==="/login"){
  return null;
}
// 
  return (
    <Navbar
      shadow={false}
      className="mx-auto py-2 px-4 lg:px-8 lg:py-4 border-b-blue-gray-50 rounded-none"
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold text-lg"
        >
          <Link href={"/"}>
              <img src={"/logo.ico"} className={"w-7 h-7 object-cover"} alt={"logo"}/>
          </Link>
        </Typography>
        {/* Nav List */}
        <div className="hidden lg:block">{navList}</div>
        {/*  */}
        {/* search button */}
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="gray">
            Sign In
          </Button>
          <Button
            className="bg-blue-gray-100 shadow-none hover:shadow-blue-gray-50 text-black"
            size="sm"
          >
            Sign Up
          </Button>
        </div>
        {/* end  */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
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
      {/*  */}
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button
            size="sm"
            fullWidth
            className="mb-2 bg-blue-gray-100 shadow-none hover:shadow-blue-gray-50 text-black"
          >
            <span>Store Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}