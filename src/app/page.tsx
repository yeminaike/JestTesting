"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const goAway = () => {
    router.push("/about");
  };

  const toggleShow = () => {
    setShow(!show);
  };

  const tennisNames = [
    {
      id: 1,
      name: 'Roger Federer',
    },

    {
      id: 2,
      name: 'Novak Djokovic',
    },

     {
      id: 3,
      name: 'Serena Williams',
    }

  ]

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-mono">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        {tennisNames && (

         tennisNames.map((name) => (
          <div key={name.id} className="">

            <div className="">
           <p>{name.name}</p> 
            </div>

          </div>


         ))
        )}

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      <button
        onClick={goAway}
        className="cursor-pointer bg-amber-500 rounded-[2rem] p-[0.5rem]"
      >
        Take me to the next Page
      </button>

      <button
        onClick={() => setCount(count + 1)}
        className="cursor-pointer bg-amber-500 rounded-[2rem] p-[0.5rem]"
      >
        {count}
      </button>

      <button
        onClick={toggleShow}
        className="text-white bg-red-700 rounded-md p-3"
      >
        {show ? "HideText" : "ShowText"}
      </button>
      {show && <p>I don appear</p>}
    </div>
  );
}
