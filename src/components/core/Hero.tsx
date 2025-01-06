'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronDown } from 'lucide-react'
import Main from "@/../public/Hero.svg"

type AnimatedWord = {
  text: string;
  bgColor: string;
}

const ANIMATED_WORDS: AnimatedWord[] = [
  { text: "marketing.", bgColor: "bg-red-700" },
  { text: "innovation.", bgColor: "bg-blue-800" },
  { text: "excellence.", bgColor: "bg-red-700" },
  { text: "solutions.", bgColor: "bg-blue-800" }
]

export default function Hero() {
  const [currentWord, setCurrentWord] = useState<string>("")
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [wordIndex, setWordIndex] = useState<number>(0)
  const [delta, setDelta] = useState<number>(200)

  useEffect(() => {
    const tick = () => {
      const fullWord = ANIMATED_WORDS[wordIndex].text
      
      if (!isDeleting) {
        setCurrentWord(fullWord.substring(0, currentWord.length + 1))
        setDelta(100)

        if (currentWord === fullWord) {
          setIsDeleting(true)
          setDelta(100)
        }
      } else {
        setCurrentWord(fullWord.substring(0, currentWord.length - 1))
        setDelta(200)

        if (currentWord === '') {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % ANIMATED_WORDS.length)
          setDelta(2000)
        }
      }
    }

    const ticker = setInterval(tick, delta)
    return () => clearInterval(ticker)
  }, [currentWord, isDeleting, wordIndex, delta])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="relative w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-4 lg:px-0">
        <div className="flex h-screen w-full justify-center items-center flex-col gap-4">
          <p className="text-semibold BlauerNue-Italic text-zinc-600 text-center text-lg md:text-xl">
            Empower Your Brand with Cutting-Edge Digital Strategies
          </p>
          <h1 className="text-3xl md:text-5xl leading-snug md:leading-[60px] capitalize text-center BlauerNue-Extra">
            Turn your vision into reality with our expertise. From performance
            <span className="bg-blue-800 px-4 md:px-5 ml-2 y-2 text-white">marketing</span>
            to web development, we deliver results and fuel
            <span className="bg-red-700 text-white px-4 md:px-5 ml-2 md:ml-4 py-2">
              {currentWord}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
        </div>
      </div>

      <Image
        src={Main}
        alt="Hero"
        className="absolute top-[80px] lg:w-full w-auto hidden lg:block z-[-1]"
        priority
      />

      <div className="absolute bottom-8 left-0 right-0 mx-auto w-fit flex flex-col items-center animate-bounce">
        <span className="text-zinc-600 text-base md:text-lg font-semibold mb-2">Scroll Down</span>
        <button
          onClick={scrollToNextSection}
          className="bg-zinc-200 hover:bg-zinc-300 transition-all duration-300 rounded-full p-2"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={24} className="text-zinc-600" />
        </button>
      </div>
    </div>
  )
}
