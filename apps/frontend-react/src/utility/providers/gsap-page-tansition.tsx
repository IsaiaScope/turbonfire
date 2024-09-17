import { useRouterState } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePageTransitionStore } from "../store/page-transition-state";

export default function GsapPageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isRunning = usePageTransitionStore(({ isRunning }) => isRunning);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    console.log(`🧊 ~ tl: `, tl);
    if (isRunning) {
      tl.set(".banner", {
        yPercent: -100,
      })
        .to(".banner", {
          yPercent: 0,
          stagger: 0.2, // seconds between when each element starts animating
          duration: 1,
          onComplete: () => {},
        })
        .to(".banner", {
          yPercent: 100,
          stagger: 0.2,
          duration: 1,
        });
    }
  }, [isRunning]);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set(".banner", {
      yPercent: -100,
    })
      .to(".banner", {
        yPercent: 0,
        stagger: 0.2, // seconds between when each element starts animating
        duration: 1,
        delay: 1,
        onComplete: () => {},
      })
      .to(".banner", {
        yPercent: 100,
        stagger: 0.2,
        duration: 1,
      });
  }, []);

  return (
    <>
      {/* <div  className="fixed inset-0 bg-orange-700"></div> */}
      <div className="banner fixed left-0 top-0 z-10 min-h-screen w-1/4 bg-red-950" />
      <div className="banner fixed left-1/4 top-0 z-10 min-h-screen w-1/4 bg-red-950" />
      <div className="banner fixed left-2/4 top-0 z-10 min-h-screen w-1/4 bg-red-950" />
      <div className="banner fixed left-3/4 top-0 z-10 min-h-screen w-1/4 bg-red-950" />
      <div ref={containerRef} className="h-full">
        {children}
      </div>
    </>
  );
}
