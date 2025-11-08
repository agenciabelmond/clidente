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
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17676937010');

            // Função de conversão
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) !== 'undefined') {
                  window.open(url, '_blank');
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'DubeCNvQhbMbELLOgu1B', // substitua se tiver outro ID
                'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
