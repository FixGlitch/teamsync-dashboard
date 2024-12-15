"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

interface SliderButtonProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  href?: string;
}

const SliderButton = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderButtonProps
>(({ className, href, ...props }, ref) => {
  const [sliderValue, setSliderValue] = React.useState<number[]>([0]);
  const router = useRouter();

  const handleValueChange = (value: number[]) => {
    setSliderValue(value);
    if (value[0] === 100 && href) {
      router.push(href);
    }
  };

  return (
    <SliderPrimitive.Root
      ref={ref}
      value={sliderValue}
      onValueChange={handleValueChange}
      className={cn(
        "relative flex w-full touch-none select-none items-center mx-10",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-full w-full grow overflow-hidden">
        <SliderPrimitive.Range
          className="absolute h-full bg-gradient-to-r from-gray-500 to-gray-400 backdrop-blur-sm border border-teal-500/20 rounded-full gap-3"
          style={{
            width: `${sliderValue[0]}%`,
          }}
        />
        <p
          className="text-sm text-gray-300 flex items-center gap-2 transition-colors pl-20"
          style={{
            zIndex: 5,
          }}
        >
          Check out the team dashboard
          <MoveRight className="w-4 h-4" />
        </p>
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="focus-visible:outline-none focus-visible:ring-transparent disabled:pointer-events-none disabled:opacity-50">
        <Button
          size={"sm"}
          className="bg-gradient-to-b from-teal-200/80 to-teal-500/70 text-white rounded-full font-medium shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all backdrop-blur-sm overflow-hidden"
        >
          New feature
        </Button>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
SliderButton.displayName = SliderPrimitive.Root.displayName;

export { Slider, SliderButton };
