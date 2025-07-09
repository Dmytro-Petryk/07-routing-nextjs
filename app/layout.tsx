import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TanStackProvider } from '@/components/TanStackProvider/TanStackProvider';

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
