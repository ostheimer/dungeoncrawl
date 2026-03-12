import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dungeon Crawl',
  description: 'Mobile-first Dungeon Crawl im klassischen First-Person-Stil',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
