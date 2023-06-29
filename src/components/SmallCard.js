'use client'
import {Button, Card, CardBody, CardFooter, CardHeader, Typography} from "@material-tailwind/react";
import Link from "next/link";

const img = "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"

export default function SmallCard({id,img_url,price}){
    return (
        <Card className="w-60 border" shadow={false} >
            <CardHeader shadow={false} floated={false} className="h-48">
                <Link href={`/products/${id}`}>
                    <img
                        src={
                            img_url
                                ? img_url
                                : img
                        }
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
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                >
                    Download Flp
                </Button>
            </CardFooter>
        </Card>
    )
}