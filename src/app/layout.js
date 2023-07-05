
import './globals.css'
import { Mulish } from 'next/font/google'
import NormalNavBarComponent from '@/components/navbarComponent/NormalNavBarComponent';
import {Provider} from "react-redux";
import {store} from "@/store";


const mulish = Mulish({ subsets: ['latin'],weight:"400"})

export const metadata = {
  title: 'Cambodia Remix',
  description: 'Welcome to Cambodia Remix - a place for music industry in cambodia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <NormalNavBarComponent/>
        {children}
        </body>
    </html>
  );
}
