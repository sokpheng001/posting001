
import './globals.css'
import { Mulish } from 'next/font/google'
import NormalNavBarComponent from '@/components/NormalNavBarComponent';
const mulish = Mulish({ subsets: ['latin'],weight:"400"})

export const metadata = {
  title: 'Cambodia Remix',
  description: 'Welcome to Pagraph',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body className={mulish.className}>
        <NormalNavBarComponent/>
        {children}
        </body>
    </html>
  );
}
