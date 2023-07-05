'use client'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter, Tooltip
} from "@material-tailwind/react";
import Link from "next/link";
import {tuple} from "yup";
import {data} from "autoprefixer";

const img_Url = "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80";
const  flp_img_url_default = "/images/cambodia_remix.jpg";

const  profile = (user_id)=>{
    return (
        <Card className={""}>
            This is profile
        </Card>
    )
}

export default function FlpCard({user_id,id,name,price,description,flp_img_url}) {
  return (
    <Card className="w-80 border" shadow={false}>
      <CardHeader shadow={false} floated={false} className="h-64">
          <Link href={`/products/${id}`} >
              <img
                  src={flp_img_url ? flp_img_url:flp_img_url_default}
                  className="w-full h-full object-cover"
              />
          </Link>
      </CardHeader>
      <CardBody>
        {/* price and title */}
        <div className="flex items-center justify-between">
          {/*  title*/}
          <Typography color="black" className="">
            {name ? (name.length>12) ? (name.substring(0,10)) + "...": (name) : ("Cambodia FLp")}
          </Typography>
          {/*  price*/}
          <Typography color="black" className="">
            Price: {price ? price + "$" : "Free"}
          </Typography>
        </div>
        {/* date and author */}
          <div className={"text-gray-500 text-sm justify-between flex flex-col"}>

              {/*author*/}
              <Tooltip
                  content={(profile(user_id))}
                  interactive={true}
                  dismiss={{
                      enabled:true,
                      outsidePress: ((event) => true),
                  }}

                  animate={{
                       mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 },
                  }}
              >
                  <Link href={``} className={"hover:underline"}>
                      Author: {`${'Sokpheng'}`}
                  </Link>
              </Tooltip>
              {/*date*/}
              <p className={""}>
                  {`${'June-23-2023'}`}
              </p>
          </div>
        {/*  end */}
        {/*/!*  description*!/*/}
        {/*<Typography*/}
        {/*  variant="small"*/}
        {/*  color="gray"*/}
        {/*  className="opacity-75 mt-4"*/}
        {/*>*/}
        {/*  {description ? description.length>35 ? description.substring(0,35) + " ..." : description:*/}
        {/*  "With plenty of talk and listen time, voice-activated Siri access, and "*/}
        {/*   + "an available wireless charging case."}*/}
        {/*</Typography>*/}
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className=" bg-gray-300 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
        >
          Download Flp
        </Button>
      </CardFooter>
    </Card>
  );
}