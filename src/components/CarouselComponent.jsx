"use client";
import { Carousel, Typography } from "@material-tailwind/react";

export default function CarouselComponent() {
  return (
    <Carousel className="rounded-mg " autoplay={true} loop={true} >
        {[1,2,3].map(e=>(
            <div className={"relative h-full w-ful"} key={e}>
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image carousel"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Welcome to Pagraph
                        </Typography>
                    </div>
                </div>
            </div>
        ))}
    </Carousel>
  );
}
