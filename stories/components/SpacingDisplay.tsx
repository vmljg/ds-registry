interface BorderRadiusRowProps {
  name: string;
  variable: string;
  value: string;
  tailwindClass: string;
  className: string;
}

export function BorderRadiusRow({
  name,
  variable,
  value,
  tailwindClass,
  className,
}: BorderRadiusRowProps) {
  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <div className="text-muted-foreground w-32 text-sm">{name}</div>
      <div className="flex items-center gap-4">
        <div className={`bg-primary h-16 w-16 ${className}`} />
        <div className="flex-1">
          <code className="text-sm">{variable}</code>
          <p className="text-muted-foreground mt-1 text-xs">{value}</p>
          <p className="text-muted-foreground text-xs">
            Tailwind: <code>{tailwindClass}</code>
          </p>
        </div>
      </div>
    </div>
  );
}

interface SpacingScaleRowProps {
  token: string;
  px: string;
  rem: string;
  className: string;
}

export function SpacingScaleRow({ token, px, rem, className }: SpacingScaleRowProps) {
  return (
    <div className="flex items-center gap-4 border-b pb-2">
      <div className="w-16 font-mono text-xs">{token}</div>
      <div className="w-20 text-xs">{px}</div>
      <div className="w-20 font-mono text-xs">{rem}</div>
      <div className="flex-1">
        <div className="bg-primary h-4" style={{ width: px }} />
      </div>
      <div className="w-24 text-xs">
        <code>{className}</code>
      </div>
    </div>
  );
}

interface SpacingScaleHeaderProps {}

export function SpacingScaleHeader() {
  return (
    <div className="flex items-center gap-4 border-b pb-2">
      <div className="text-muted-foreground w-16 text-xs">Token</div>
      <div className="text-muted-foreground w-20 text-xs">Pixels</div>
      <div className="text-muted-foreground w-20 text-xs">Rem</div>
      <div className="text-muted-foreground flex-1 text-xs">Visual</div>
      <div className="text-muted-foreground w-24 text-xs">Class</div>
    </div>
  );
}
