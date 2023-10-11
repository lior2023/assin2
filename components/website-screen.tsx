import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import type { ReactNode } from 'react';
import '../globals.css';

interface Props {
  children: ReactNode[] | ReactNode;
  direction?: 'rtl' | 'ltr';
}

export default function WebsiteScreen({ direction = 'ltr', children }: Props) {
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
