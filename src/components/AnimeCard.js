'use client'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter
} from "@material-tailwind/react";
import Link from "next/link";

export default function AnimeCard({id,name,price,description,img_url}) {
    return (
        <Card className="w-80 border" shadow={false}>
            <CardHeader shadow={false} floated={false} className="h-64">
                <Link href={`/products/${id}`}>
                    <img
                        src={img_url ? img_url : "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"}
                        className="w-full h-full object-cover"
                    />
                </Link>
            </CardHeader>
            <CardBody>
                <div className="flex items-center justify-between mb-2">
                    {/*  title*/}
                    <Typography color="blue-gray" className="font-medium">
                        {name ? (name.length>12) ? (name.substring(0,10)) + "...": (name) : ("Cambodia FLp")}
                    </Typography>
                    {/*  price*/}
                    <Typography color="blue-gray" className="font-medium">
                        Price: {price ? price + "$" : "Free"}
                    </Typography>
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                    {description ? description.length > 35 ? description.substring(0, 35) + " ..." : description :
                        "With plenty of talk and listen time, voice-activated Siri access, and "
                        + "an available wireless charging case."}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                >
                    Read More
                </Button>
            </CardFooter>
        </Card>
    );
}