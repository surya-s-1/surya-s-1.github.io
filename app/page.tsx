import React from 'react';
import { APPS } from './data/apps';
import { Header } from './components/Header';
import { AppCard } from './components/AppCard';

export default function Home() {
  return (
    <main className="page-container">
      <Header />
      <section className="apps-list" aria-label="Applications List">
        {APPS.map((app, index) => (
          <AppCard
            key={app.id}
            app={app}
            defaultExpanded={index === 0}
          />
        ))}
      </section>
    </main>
  );
}
