import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <div>
      <div className="flex h-screen w-full">
        <div className="flex-1 flex overflow-hidden dark:bg-[#651c2b55] bg-[#651c2b] relative justify-center items-center">
          <img src="/redis-logo.svg" alt="Redis Logo" className="absolute -left-1/4 opacity-25 -bottom-52 lg:scale-125 xl:scale-100 scalre-[2] pointer-events-none select-none -z-1"/>
          <div className="flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold">
            <Image src={"/logo.png"} alt="RediStach Logo" width={769} height={182} className="mt-20 w-[420px] z-0 pointer-events-none select-none"/>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

export default page