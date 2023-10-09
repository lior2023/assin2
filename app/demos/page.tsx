import Link from 'next/link';

import { DEMOS } from '@/constants';

export default function Demos() {
  return (
    <div className="grid">
      {DEMOS.map((demo) => (
        <div key={demo.slug} className={demo.cssClass}>
          <h2>{demo.title}</h2>
          <p>
            {demo.description}
          </p>
          <Link href={`./demos/${demo.slug}`}>See it</Link>
        </div>
      ))}
    </div>
  )
}
