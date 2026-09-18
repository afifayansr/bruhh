"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    username: "justdidthefix",
    stars: 4,
    text: "The service is really good. The prices is rlly good for the product. Really liked this server hosting. The staff is overwhelmed by the number of customers though.",
  },
  {
    id: 2,
    username: "deadline798",
    stars: 5,
    text: "Piecore is one of the best hosting out there still providing the best performance server out there and their support is top tier. But there are some flaws specifically when customers are low the service provided is somewhat dreadful. Still it provides the best service needed. It is our duty as customers to help them grow.",
  },
  {
    id: 3,
    username: "mr.hridoy61",
    stars: 5,
    text: "This hosting is very good and the price is stable any one can buy this hosting and the owner or staff is very good, their behaviour is nice ☺️ plz buy hosting from here because that is trusted",
  },
  {
    id: 4,
    username: "umayer0869_72180",
    stars: 5,
    text: "I had a great experience with this website. Your service is excellent, and your customer support is very friendly, responsive, and helpful. Everything is very easy to use and very easy to buy. The whole process is smooth, fast, and hassle-free. I can confidently say this website is 100% trusted. Highly recommended!",
  },
  {
    id: 5,
    username: "tradershuvo_",
    stars: 5,
    text: "VyperBD provides excellent web hosting services! The server speed is super fast with practically zero downtime. Their 24/7 support team is extremely helpful and responsive. Highly recommended for anyone looking for reliable cloud hosting.",
  },
  {
    id: 6,
    username: "mash_rfy",
    stars: 5,
    text: "good",
  },
  {
    id: 7,
    username: "mahiru0719",
    stars: 5,
    text: "Best hosting. Service is so fast and reply so fast you can try",
  },
  {
    id: 8,
    username: "hridoyhere.exe",
    stars: 5,
    text: "I've used many popular hosting providers, but honestly, this is the best hosting I've ever used.",
  },
  {
    id: 9,
    username: "milonvgai",
    stars: 4,
    text: "Alhamdulillah ami afif bhai der kasthake server nichi pray 2monthe thake adder server ar performance onak vhalo ono der kas thake but akhon aotirikto load-shedding ar karo ne 5-15 min ar jhono down jay but ader server onak vhalo",
  },
  {
    id: 10,
    username: "oppotato99",
    stars: 5,
    text: "I Purchased a Minecraft Server Currently From VyperBD. Their Support Was so Good ⭐",
  },
  {
    id: 11,
    username: "itz_senpai__",
    stars: 5,
    text: "Just feels like playing single player but better",
  },
  {
    id: 12,
    username: "not_your_kitkat",
    stars: 5,
    text: "Smooth like butter. Renders like water",
  },
]

const AVERAGE = 4.83
const TOTAL = reviews.length
const FIVE_STAR = reviews.filter((r) => r.stars === 5).length
const FOUR_STAR = reviews.filter((r) => r.stars === 4).length

function StarRow({ count, filled }: { count: number; filled: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < filled ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"}`}
        />
      ))}
    </div>
  )
}

function AvatarPlaceholder({ username }: { username: string }) {
  const initials = username.replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase() || "??"
  const colors = [
    "bg-blue-500", "bg-purple-500", "bg-green-500", "bg-pink-500",
    "bg-orange-500", "bg-teal-500", "bg-indigo-500", "bg-red-500",
  ]
  const colorIdx = username.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % colors.length
  return (
    <div className={`w-10 h-10 rounded-full ${colors[colorIdx]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
      {initials}
    </div>
  )
}

const CARDS_PER_VIEW = 3

export default function ReviewsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const maxIndex = reviews.length - CARDS_PER_VIEW

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1))
    }, 3500)
    return () => clearInterval(timer)
  }, [paused, maxIndex])

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1))

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0b0f] overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 card-primary px-4 py-2 rounded-tl-2xl rounded-br-2xl mb-4 border border-secondary">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="icon-text-primary text-sm font-medium">Customer Reviews</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white orbitron-font mb-1">
                What Our{" "}
                <span className="icon-text-primary">Customers</span>{" "}
                Say
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                Real feedback from real VyperBD users
              </p>
            </div>

            {/* Aggregate score */}
            <div className="flex items-center gap-4 bg-white dark:bg-gray-900/40 border border-secondary rounded-xl px-5 py-3 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-4xl font-bold orbitron-font text-gray-900 dark:text-white leading-none">{AVERAGE}</p>
                <div className="flex gap-0.5 justify-center mt-1">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className={`w-4 h-4 ${s <= Math.round(AVERAGE) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{TOTAL} reviews</p>
              </div>
              <div className="h-12 w-px bg-gray-200 dark:bg-gray-700" />
              <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-10 text-right">5★</span>
                  <div className="w-24 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div className="h-full rounded-full bg-yellow-400" style={{ width: `${(FIVE_STAR / TOTAL) * 100}%` }} />
                  </div>
                  <span>{FIVE_STAR}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-10 text-right">4★</span>
                  <div className="w-24 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div className="h-full rounded-full bg-yellow-300" style={{ width: `${(FOUR_STAR / TOTAL) * 100}%` }} />
                  </div>
                  <span>{FOUR_STAR}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards viewport — 3 visible on desktop */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `calc(-${current * (100 / CARDS_PER_VIEW)}% - ${current * 16 / CARDS_PER_VIEW}px)` }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {reviews.map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * Math.min(idx, 4) }}
                  className="flex-shrink-0 w-[calc(33.333%-11px)] bg-white dark:bg-gray-900/30 border border-secondary rounded-xl p-5 backdrop-blur-sm flex flex-col gap-3 hover:border-blue-400/40 transition-colors duration-300"
                  style={{ minWidth: "calc(33.333% - 11px)" }}
                >
                  {/* Quote icon */}
                  <Quote className="w-5 h-5 icon-text-primary opacity-60 flex-shrink-0" />

                  {/* Review text */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                    {review.text}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-800/40">
                    <AvatarPlaceholder username={review.username} />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        @{review.username}
                      </p>
                      <StarRow count={5} filled={review.stars} />
                    </div>
                    <span className="ml-auto text-xs font-bold text-gray-400 dark:text-gray-500 flex-shrink-0">
                      {review.stars}/5
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={current === 0}
                className="p-2 rounded-lg border border-secondary bg-white dark:bg-gray-900/30 hover:bg-gray-100 dark:hover:bg-gray-800/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={next}
                disabled={current >= maxIndex}
                className="p-2 rounded-lg border border-secondary bg-white dark:bg-gray-900/30 hover:bg-gray-100 dark:hover:bg-gray-800/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-blue-500"
                      : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <span className="text-xs text-gray-400 dark:text-gray-500">
              {current + 1}–{Math.min(current + CARDS_PER_VIEW, TOTAL)} of {TOTAL}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
