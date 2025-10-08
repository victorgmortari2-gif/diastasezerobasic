import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';

export const metadata: Metadata = {
  title: 'Diástase ZERO',
  description: 'Programa de 21 dias para recuperação da diástase abdominal.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Links de fonte já existentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />

        {/* ======================================= */}
        {/* === CÓDIGO 1: META PIXEL (NO <head>) === */}
        {/* O código é injetado usando dangerouslySetInnerHTML para ser executado como JS puro */}
        <script
          id="meta-pixel-script"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '25178922585075542');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript
          id="meta-pixel-noscript"
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=25178922585075542&ev=PageView&noscript=1"
            />`,
          }}
        />
        {/* ======================================= */}

      </head>
      <body className="antialiased">
        {children}
        <Toaster />
        
        {/* ======================================== */}
        {/* === CÓDIGO 2: UTMIFY (NO FINAL DO <body>) === */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></script>
        {/* ======================================== */}
      </body>
    </html>
  );
}
