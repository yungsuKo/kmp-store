import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <main className=" grid w-full h-full pl-[332px] p-8">{children}</main>
    </>
  );
}
