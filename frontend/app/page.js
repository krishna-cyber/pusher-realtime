/** @format */

import Image from "next/image";
import CreateRoom from "./components/CreateRoom";
import JoinRoom from "./components/JoinRoom";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-gray-200 items-center  p-24'>
      <h1 className='text-6xl font-bold text-center'>chat app</h1>
      <CreateRoom />
      <JoinRoom />
    </main>
  );
}
