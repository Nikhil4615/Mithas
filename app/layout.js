import './globals.css';
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const metadata = {
  title: 'Mithas - Traditional Indian Sweets & Confectionery',
  description: 'Experience the artistry of traditional Indian sweet-making at Mithas. Three decades of crafting moments of joy through authentic flavors and timeless recipes.',
  keywords: ['Indian sweets', 'traditional confectionery', 'mithai', 'artisanal sweets', 'heritage recipes'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.className} ${cormorant.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
