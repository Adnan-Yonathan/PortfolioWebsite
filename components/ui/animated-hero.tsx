"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-16 text-center sm:px-8 lg:px-0">
        <div>
          <Button variant="secondary" size="sm" className="gap-4">
            Read our launch article <MoveRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex w-full max-w-2xl flex-col gap-4">
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            <span className="text-slate-400 block text-xl uppercase tracking-[0.4em]">
              Studio Elemental
            </span>
            <span className="text-spektr-cyan-50 block text-3xl font-semibold sm:text-4xl">
              We design websites that feel alive
            </span>
            <span className="relative mt-4 inline-flex w-full justify-center overflow-hidden text-center text-4xl font-semibold sm:text-5xl">
              <span className="relative flex w-full justify-center">
                <span className="text-slate-500 mr-2">that are</span>
              </span>
              <span className="relative flex w-full justify-center">
                {titles.map((title, index) => (
                  <motion.span
                    key={title}
                    className="absolute text-spektr-cyan-50"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 60 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? "-120%" : "120%",
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </span>
          </h1>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Managing a home service business, agency, or software company today
            is tough. Replace outdated, tedious trade methods with thoughtful
            digital experiences that are easier and faster to run.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" variant="outline" className="gap-3">
            Jump on a call <PhoneCall className="h-4 w-4" />
          </Button>
          <Button size="lg" className="gap-3">
            Sign up here <MoveRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Hero };
