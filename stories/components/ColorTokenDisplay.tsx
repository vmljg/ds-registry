interface ColorTokenDisplayProps {
  name: string;
  description: string;
  lightValue: string;
  darkValue: string;
}

export function ColorTokenDisplay({
  name,
  description,
  lightValue,
  darkValue,
}: ColorTokenDisplayProps) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="mb-2 font-semibold">{name}</h3>
        <p className="text-muted-foreground mb-3 text-sm">{description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-muted-foreground text-xs font-medium">Light Mode</div>
          <div className="h-20 w-full rounded-lg border" style={{ backgroundColor: lightValue }} />
          <code className="block text-xs">{lightValue}</code>
        </div>
        <div className="space-y-2">
          <div className="text-muted-foreground text-xs font-medium">Dark Mode</div>
          <div className="h-20 w-full rounded-lg border" style={{ backgroundColor: darkValue }} />
          <code className="block text-xs">{darkValue}</code>
        </div>
      </div>
    </div>
  );
}

interface ColorTokenRowProps {
  name: string;
  description?: string;
  value: string;
  variable: string;
}

export function ColorTokenRow({ name, description, value, variable }: ColorTokenRowProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <div className="h-24 w-24 rounded-lg border" style={{ backgroundColor: value }} />
        <div className="flex-1">
          <h3 className="font-semibold">{name}</h3>
          {description && <p className="text-muted-foreground text-sm">{description}</p>}
          <code className="text-xs">{variable}</code>
        </div>
      </div>
    </div>
  );
}

interface BorderTokenRowProps {
  name: string;
  description: string;
  value: string;
  variable: string;
}

export function BorderTokenRow({ name, description, value, variable }: BorderTokenRowProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <div className="h-24 w-24 rounded-lg" style={{ border: `4px solid ${value}` }} />
        <div className="flex-1">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
          <code className="text-xs">{variable}</code>
        </div>
      </div>
    </div>
  );
}

interface RingTokenRowProps {
  name: string;
  description: string;
  value: string;
  variable: string;
}

export function RingTokenRow({ name, description, value, variable }: RingTokenRowProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <div
          className="h-24 w-24 rounded-lg"
          style={{
            border: `4px solid ${value}`,
            outline: `2px solid ${value}`,
            outlineOffset: "2px",
          }}
        />
        <div className="flex-1">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
          <code className="text-xs">{variable}</code>
        </div>
      </div>
    </div>
  );
}
