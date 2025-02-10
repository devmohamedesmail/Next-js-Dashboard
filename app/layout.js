import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cmyk">
      <body>
        {children}
      </body>
    </html>
  );
}
