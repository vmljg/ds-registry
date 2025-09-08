import { Squirrel } from "lucide-react";

export function RegistryLogo() {
  return (
    <>
      <div className="bg-primary flex-shrink-0 rounded-md p-1">
        <Squirrel className="text-secondary size-5" />
      </div>
      <span className="font-semibold">Registry</span>
    </>
  );
}
