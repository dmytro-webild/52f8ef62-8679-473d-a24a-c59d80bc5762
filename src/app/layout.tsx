import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Маникюрный Салон "Красивая гора" | Идеальный Маникюр и Педикюр',
  description: 'Побалуйте себя роскошным маникюром и педикюром в салоне \'Красивая гора\'. Профессиональные мастера, индивидуальный подход и безупречный результат. Запишитесь к нам сегодня!',
  keywords: ["маникюр, педикюр, ногти, салон красоты, нейл-арт, Красивая гора, уход за руками, уход за ногами, гель-лак, дизайн ногтей, спа-процедуры"],
  openGraph: {
    "title": "Маникюрный Салон \"Красивая гора\" | Идеальный Маникюр и Педикюр",
    "description": "Побалуйте себя роскошным маникюром и педикюром в салоне 'Красивая гора'. Профессиональные мастера, индивидуальный подход и безупречный результат. Запишитесь к нам сегодня!",
    "url": "https://www.krasivaya-gora.ru",
    "siteName": "Красивая гора",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/pink-orchids-vase-windowsill-with-white-chairs_181624-10971.jpg",
        "alt": "Роскошный интерьер маникюрного салона"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Маникюрный Салон \"Красивая гора\" | Идеальный Маникюр и Педикюр",
    "description": "Побалуйте себя роскошным маникюром и педикюром в салоне 'Красивая гора'. Профессиональные мастера, индивидуальный подход и безупречный результат. Запишитесь к нам сегодня!",
    "images": [
      "http://img.b2bpic.net/free-photo/pink-orchids-vase-windowsill-with-white-chairs_181624-10971.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
