'use client';
import { useState } from 'react';

export default function FAQ({ items }) {
  const [open, setOpen] = useState(-1);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            {item.q}
            <span className="faq-toggle">+</span>
          </div>
          <div className="faq-a">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
