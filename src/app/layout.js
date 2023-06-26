import './globals.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({ subsets: ['latin'],weight:"400"})

export const metadata = {
  title: 'Pagraph',
  description: 'Welcome to Pagraph',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
