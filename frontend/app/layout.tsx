import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        className='h-full antialiased'
      >
        <head>
          <title>ShortLink</title>
        </head>
        <body className="min-h-full flex flex-col">
          {children}
          <ToastContainer />
        </body>
      </html>
    </>
  );
}
