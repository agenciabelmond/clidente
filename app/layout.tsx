import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Clidente",
  description: "Conecte-se agora com a equipe da Clidente",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/clidente_simbolo_azul.png" type="image/png" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {/* Google Ads Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17676937010"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17676937010');
          `}
        </Script>

        {/* Conversão de Contato */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              const callback = function () {
                if (typeof url !== 'undefined') {
                  window.location.href = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17676937010/DubeCNvQhbMbELLOgu1B',
                'value': 1.0,
                'currency': 'BRL',
                'event_callback': callback
              });
              return false;
            }

            // Disponibiliza globalmente
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
