import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import type { ReactNode } from 'react';
import '../globals.css';

interface Props {
  direction: 'rtl' | 'ltr';
  children: ReactNode[]
}

export default function WebsiteScreen({ direction, children }: Props) {
  return (
    <div dir={direction}>
      <Navbar />
        <div id="main">
          <div className="container">
            {children}
          </div>
        </div>
      <Footer />
    </div>
  )
}
