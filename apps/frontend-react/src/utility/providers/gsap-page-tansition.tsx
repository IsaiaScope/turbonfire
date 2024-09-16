import { useRouterState } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GsapPageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    console.log(`🧊 ~ container: `, container);
    const timeline = gsap.timeline();

    timeline.fromTo(
      container,
      { opacity: 0, x: "-100%" },
      { opacity: 1, x: 0, duration: 0.5 },
    );

    return () => {
      timeline.to(container, { opacity: 0, x: "100%", duration: 0.5 });
    };
  }, [pathname]);

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 bg-orange-700"></div>
      <div className="h-full" key={pathname}>
        {children}
      </div>
    </>
  );
}
