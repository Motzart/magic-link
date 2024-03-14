'use client';
import ShowUIButton from '@/app/components/ShowUIButton';
import ConnectButton from '@/app/components/ConnectButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectButton/>
      <ShowUIButton/>
    </main>
  );
}
