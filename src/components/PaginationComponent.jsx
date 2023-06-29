'use client'
import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 



export default function PaginationComponent() {
    const theme = {
        IconButton:{
            style:{
              background:"black",
            }
        }
    }
    // 
  const [active, setActive] = React.useState(1);
 
  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: active === index ? "blue" : "blue-gray",
      onClick: () => setActive(index),
      className: "rounded-full",
    });
//  
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };
 
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        <ThemeProvider value={theme}>
          {[1, 2, 3, 4].map((e) => (
            <IconButton className="bg-black text-red-600" key={e} {...getItemProps(e)}>
              {e}
            </IconButton>
          ))}
        </ThemeProvider>
      </div>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}