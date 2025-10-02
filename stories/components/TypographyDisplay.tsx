interface FontFamilyDisplayProps {
  name: string;
  variable: string;
  tailwindClass: string;
  stack: string;
  className?: string;
}

export function FontFamilyDisplay({
  name,
  variable,
  tailwindClass,
  stack,
  className = "",
}: FontFamilyDisplayProps) {
  return (
    <div className="my-8 space-y-6">
      <div className="space-y-4 rounded-lg border p-6">
        <div className="space-y-2">
          <h3 className="text-muted-foreground text-sm font-semibold">
            FONT FAMILY
          </h3>
          <p className={`text-4xl ${className}`}>
            The quick brown fox jumps over the lazy dog
          </p>
          <p className={`text-2xl ${className}`}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p className={`text-2xl ${className}`}>abcdefghijklmnopqrstuvwxyz</p>
          <p className={`text-2xl ${className}`}>
            0123456789{name === "Monospace" ? " !@#$%^&*()" : ""}
          </p>
        </div>
        <div className="space-y-1 border-t pt-4">
          <p className="text-sm">
            <strong>Variable:</strong> <code>{variable}</code>
          </p>
          <p className="text-sm">
            <strong>Tailwind Class:</strong> <code>{tailwindClass}</code>
          </p>
          <p className="text-sm">
            <strong>Stack:</strong> <code>{stack}</code>
          </p>
        </div>
      </div>
    </div>
  );
}

interface FontSizeRowProps {
  size: string;
  className: string;
  value: string;
}

export function FontSizeRow({ size, className, value }: FontSizeRowProps) {
  return (
    <div className="flex items-baseline gap-4 border-b pb-4">
      <div className="text-muted-foreground w-24 text-sm">{size}</div>
      <div className={`flex-1 ${className}`}>
        The quick brown fox jumps over the lazy dog
      </div>
      <code className="text-muted-foreground text-xs">{value}</code>
    </div>
  );
}

interface FontWeightRowProps {
  weight: string;
  className: string;
  value: string;
}

export function FontWeightRow({ weight, className, value }: FontWeightRowProps) {
  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <div className="text-muted-foreground w-32 text-sm">{weight}</div>
      <div className={`flex-1 text-xl ${className}`}>
        The quick brown fox jumps over the lazy dog
      </div>
      <code className="text-muted-foreground text-xs">{value}</code>
    </div>
  );
}
