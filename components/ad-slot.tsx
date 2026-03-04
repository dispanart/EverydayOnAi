interface AdSlotProps {
  type: "leaderboard" | "native-in-feed" | "sidebar-square"
  className?: string
}

export function AdSlot({ type, className = "" }: AdSlotProps) {
  const sizes: Record<string, { width: string; height: string; label: string }> = {
    leaderboard: {
      width: "w-full max-w-[728px]",
      height: "h-[90px]",
      label: "728 x 90 Leaderboard",
    },
    "native-in-feed": {
      width: "w-full",
      height: "min-h-[120px]",
      label: "Native In-Feed Ad",
    },
    "sidebar-square": {
      width: "w-full max-w-[300px]",
      height: "h-[250px]",
      label: "300 x 250 Sidebar",
    },
  }

  const config = sizes[type]

  return (
    <div className={`flex justify-center py-6 ${className}`}>
      <div
        className={`${config.width} ${config.height} flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50`}
      >
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Advertisement
          </p>
          <p className="mt-1 text-xs text-muted-foreground/60">{config.label}</p>
        </div>
      </div>
    </div>
  )
}
