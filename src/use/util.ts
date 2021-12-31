export const isBrowser = typeof window !== 'undefined'

export function raf (fn: FrameRequestCallback): number {
  return isBrowser ? requestAnimationFrame(fn) : -1
}

export function cancelRaf (id: number): void {
  if (isBrowser) {
    cancelAnimationFrame(id)
  }
}

// double raf for animation
export function doubleRaf (fn: FrameRequestCallback): void {
  raf(() => raf(fn))
}
