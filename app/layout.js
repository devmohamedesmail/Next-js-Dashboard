import ThemeProvider from "./context/ThemeProvider";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cmyk">
      <body>
        <ThemeProvider>
        {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
