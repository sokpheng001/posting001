'use client'

import {
    Button,
    Input,
} from "@material-tailwind/react";


export default function Search(){
    return (
        <div className="relative flex w-full gap-2 md:max-w-max mt-1 border-none h-screen">
            <Input
                size={"lg"}
                type="search"
                label="Type here... "
                className="w-96 pr-20 focus:outline-none focus:ring-0 focus:border-gray-300 border-1 placeholder-gray-300"
                containerProps={{
                    className: "min-w-[288px]",
                }}
            />
            <Button size="lg" className="!absolute right-1 top-1 rounded-lg bg-gray-50 shadow-none hover:shadow-gray-300 text-black" >
                Search
            </Button>
        </div>
    )
}


