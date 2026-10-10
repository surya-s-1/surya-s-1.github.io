import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page-container" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 className="hero-title" style={{ fontSize: '3rem' }}>404</h1>
      <p className="hero-subtitle">The page you are looking for does not exist.</p>
      <Link href="/" className="launch-btn" style={{ marginTop: '16px' }}>
        Return Home
      </Link>
    </main>
  );
}
