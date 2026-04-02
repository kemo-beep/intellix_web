import type * as React from "react"

import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"

function Spinner(props: React.ComponentProps<"svg">) {
  const { className, strokeWidth: _s, ...rest } = props
  void _s
  return (
    <HugeiconsIcon
      icon={Loading03Icon}
      strokeWidth={2}
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...rest}
    />
  )
}

export { Spinner }
