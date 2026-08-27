import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EMILIE — Bewegung aus Stoff',
  description: 'Eine immersive digitale Learning Experience über Emilie Flöge, Mode und Bewegungsfreiheit.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
