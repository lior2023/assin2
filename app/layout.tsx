import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Product Jam Starter Kit',
  description: 'A starter kit for wiritng code in the Digital Product Jam course.',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  const bodyClassNames = `${inter.className} ${process.env.CSS_DEBUG}`
  return (
    <html lang="en">
      <body className={bodyClassNames}>
        <div id="page-grid">
          <Navbar />
          <div id="main">
            <div className="container">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
