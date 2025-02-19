import './globals.css';
import { Inter } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
      </head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            button:focus {
              outline: none !important;
            }
          `,
        }}
      />
      <body className={`${inter.className} d-flex`}>
        {/* Sidebar Navigation */}
        <nav
          className="bg-dark text-white vh-100 position-fixed"
          style={{ width: '200px' }}
          id='sidenavv'
        >
          <div className="p-3">
            <h3 className="text-center">Dashboard</h3>
            <ul className="nav flex-column mt-4">
              <li className="nav-item mb-3">
                <a href="/dashboard" className="nav-link text-white">
                  All Products
                </a>
              </li>
              <li className="nav-item">
                <a href="/products" className="nav-link text-white">
                  Add Product
                </a>
              </li>
              <li className="nav-item">
                <a href="/category" className="nav-link text-white">
                  Add Category
                </a>
              </li>
              <li className="nav-item">
                <a href="/client" className="nav-link text-white">
                  Add Client
                </a>
              </li>
              <li className="nav-item">
                <a href="/quotation" className="nav-link text-white">
                  Add Quotation
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  logout
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main
          className="flex-grow-1"
          style={{ marginLeft: '200px', padding: '20px' }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
