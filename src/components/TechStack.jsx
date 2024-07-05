import React from "react";
import { RustLogo } from "../assets/logos/RustLogo";
import { WasmLogo } from "../assets/logos/WasmLogo";
import { TypescriptLogo } from "../assets/logos/TypescriptLogo";
import { SvelteLogo } from "../assets/logos/SvelteLogo";
import { GolangLogo } from "../assets/logos/GolangLogo";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export function TechStack() {
  const logos = [
    <SvelteLogo />,
    <TypescriptLogo />,
    <GolangLogo />,
    <WasmLogo />,
    <RustLogo />,
  ];

  return (
    <div className="h-auto rounded-md flex flex-col antialiased  dark:bg-dark1 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={logos} direction="left" speed="fast" />
    </div>
  );
}
