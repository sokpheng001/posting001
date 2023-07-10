'use client'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter, Avatar
} from "@material-tailwind/react";
import Link from "next/link";

const img_Url = "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80";
const  flp_img_url_default = "/images/cambodia_remix.jpg";

export default function VideoCardComponent({uuid,chanel_name,description,flp_video_url,video_thumbnail}) {
    return (
        <Card className="w-80 border-none shadow-none dark:bg-black " shadow={false}>
            <CardHeader shadow={false} floated={false} className="h-64">
                {/*video thumbnail*/}
                <Link href={`/videos/${uuid}`} className={"rounded-none"}>
                    <img
                        src={video_thumbnail? video_thumbnail:flp_img_url_default}
                        className="w-full h-full object-cover"
                        alt={"video thumbnail"}
                    />
                </Link>
            </CardHeader>
            <CardBody>
                {/*  */}
                {/*avatar*/}
                <div className={"flex items-center"}>
                <Link href={`musician/profile/${uuid}`} className={""}>
                    <Avatar className={"w-[60px] h-12"} src={`/images/cambodia_remix.jpg`}/>
                    {/*end of*/}
                </Link>
                    <div className={"w-full"}>
                        {/* channel name */}
                        <Typography as={"a"} href={""} color="black" className="ml-3 font-bold dark:text-white dark:font-normal">
                            {chanel_name ? (chanel_name.length>12) ? (chanel_name.substring(0,10)) + "...": (chanel_name) : ("Cambodia FLp")}
                        </Typography>
                    {/*    created date*/}
                        <Typography as={"p"} className="ml-3 font-normal text-[13px] text-gray-500 ">
                            {`${`8pm - June-12-2023`}`}
                        </Typography>
                    </div>
                </div>
                {/*  */}
                {/*  description*/}
                <Link href={``}>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75 mt-3"
                    >
                        {description ? description.length>35 ? description.substring(0,35) + " ..." : description:
                            "With plenty of talk and listen time, voice-activated Siri access, and "
                            + "an available wireless charging case."}
                    </Typography>
                </Link>
            </CardBody>
            {/*<CardFooter className="pt-0">*/}
            {/*    <Button*/}
            {/*        ripple={false}*/}
            {/*        fullWidth={true}*/}
            {/*        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"*/}
            {/*    >*/}
            {/*        Download Flp*/}
            {/*    </Button>*/}
            {/*</CardFooter>*/}
        </Card>
    );
}