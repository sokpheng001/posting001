'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter
} from "@material-tailwind/react";
import React from 'react';


export default function VideoCardSkeletonComponent() {
    return (

        <Card className="w-80 shadow-noneo border-none" shadow={false}>
            {/*image */}
            <CardHeader shadow={false} floated={false} className="h-64 animate-pulse bg-gray-500">
                <div className="bg-red ">
                    <div
                        className="w-full h-full bg-gray-500"
                    ></div>
                </div>
            </CardHeader>
            {/*end */}
            {/*channel name, profile and description*/}
            <CardBody className={"animate-pulse"}>
                {/*  /*channel name, profile*/}
                <div className={"flex justify-center items-center"}>
                    <div className="rounded-full bg-gray-500 h-12 w-16"></div>
                    <div className="space-y-3 ml-3 w-full">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-gray-500 rounded col-span-2"></div>
                        </div>
                    </div>
                </div>
                {/*  */}
                {/*  description*/}
                <div className={"mt-5"}>
                    <div className="h-2 bg-gray-500 rounded"></div>
                    <div className="h-2 mt-3 bg-gray-500 rounded w-56"></div>
                    <div className="h-2 mt-3 bg-gray-500 rounded w-40"></div>
                </div>
            </CardBody>
            {/*<CardFooter className="animate-pulse">*/}
            {/*    /!*Download Flp*!/*/}
            {/*    <div className="-mt-5 bg-gray-500 rounded h-10"></div>*/}
            {/*</CardFooter>*/}
        </Card>
    );
}