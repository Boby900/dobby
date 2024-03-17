"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import i from '@/app/favicon.ico'

import { useState, useEffect } from 'react'

export default function Home() {
 
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('http://localhost:2121')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <main className="">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Dobby Ads
            </h1>
            <p className="max-w-2xl ml-0 font-bold text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-600 ">
              Upload your best pics and photos and share them with your freinds.
            </p>
         
            <Button asChild>
              <Link href="/create">Get Started</Link>
            </Button>
         
          </div>
          <div className="col-span-5">
            <Image
              priority
              src={i}
              alt="mockup"
              width="300"
              className="sm:max-w-sm lg:max-w-none p-2 mt-2"
              height="300"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

