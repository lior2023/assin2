import WebsiteScreen from '@/components/website-screen';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <WebsiteScreen>
      {children}
    </WebsiteScreen>
  )
}
