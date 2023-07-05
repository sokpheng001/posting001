'use client'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from "@material-tailwind/react";
import React from 'react';


export default function FlpCardSkeletonComponent() {
    return (

        <Card className="w-80 border" shadow={false}>
            {/*image */}
            <CardHeader shadow={false} floated={false} className="h-64 animate-pulse bg-gray-500">
                <div className="bg-red ">
                    <div
                        className="w-full h-full bg-gray-500"
                    ></div>
                </div>
            </CardHeader>
            {/*end */}
            {/* title and price */}
            <CardBody className={"animate-pulse mt-2"}>
                <div className="grid grid-cols-3 gap-4">
                    {/*  title*/}
                    <div className="h-2 bg-gray-500 rounded col-span-2"></div>
                    {/*  price*/}
                    <div className="h-2 bg-gray-500 rounded col-span-1"></div>
                </div>
                {/*author and price*/}
                <div className="grid grid-cols-3 mt-4 gap-4">
                    {/*  title*/}
                    <div className="h-2 bg-gray-500 rounded w-32 col-span-2"></div>
                    {/*  price*/}
                    <div className="h-2 bg-gray-500 rounded col-span-1"></div>
                </div>
                {/*  */}
                {/*  description*/}
                <div className={"mt-7"}>
                    <div className="h-2 bg-gray-500 rounded"></div>
                    <div className="h-2 mt-3.5 bg-gray-500 rounded w-56"></div>
                    <div className="h-2 mt-3.5 bg-gray-500 rounded w-40"></div>
                </div>
            </CardBody>
            {/*Download Flp*/}
            <CardFooter className="animate-pulse">
                <div className="-mt-[18px] bg-gray-500 rounded-lg h-10"></div>
            </CardFooter>
        </Card>
    );
}