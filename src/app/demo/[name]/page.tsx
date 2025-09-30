import { notFound } from "next/navigation";

import { demos } from "@/app/demo/[name]/index";

import { Renderer } from "@/app/demo/[name]/renderer";
import { getRegistryItem } from "@/lib/registry";

export async function generateStaticParams() {
  return Object.keys(demos).map((name) => ({
    name,
  }));
}

export default async function DemoPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;

  const component = getRegistryItem(name);

  if (!component) {
    notFound();
  }

  const { components } = demos[name];

  return (
    <div className="bg-card flex h-[100vh] w-full flex-col gap-4">
      {components &&
        Object.entries(components).map(([key, node]) => (
          <div className="relative w-full" key={key}>
            <Renderer>{node}</Renderer>
          </div>
        ))}
    </div>
  );
}
