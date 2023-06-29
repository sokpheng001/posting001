'use client'
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

export default function SpeedDialComponent() {
  return (
    <SpeedDial>
      <SpeedDialHandler className="shadow-none">
        <IconButton
          size="lg"
          className="rounded-full bg-blue-gray-500 hover:shadow-none"
        >
          <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
        </IconButton>
      </SpeedDialHandler>
      {/*  */}
      <SpeedDialContent>
        <SpeedDialAction>
          <HomeIcon className="h-5 w-5" />
        </SpeedDialAction>
        <SpeedDialAction>
          <CogIcon className="h-5 w-5" />
        </SpeedDialAction>
        <SpeedDialAction>
          <Square3Stack3DIcon className="h-5 w-5" />
        </SpeedDialAction>
      </SpeedDialContent>
      {/*  */}
    </SpeedDial>
  );
}
