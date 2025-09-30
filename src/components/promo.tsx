import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Promo({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}: {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}) {
  return (
    <div className="bg-foreground/10 relative h-[300px] w-full">
      <div className="relative z-10 flex h-full flex-col justify-center gap-3 px-8 py-3">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
        <p>{description}</p>
        <div>
          <Button asChild size="lg" className="rounded-md">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
