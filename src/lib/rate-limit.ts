const rateMap = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries periodically to prevent memory leaks
const CLEANUP_INTERVAL = 60 * 60 * 1000; // 1 hour
let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  for (const [key, entry] of rateMap) {
    if (now > entry.resetTime) {
      rateMap.delete(key);
    }
  }
}

export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 15 * 60 * 1000
): { success: boolean; remaining: number } {
  cleanup();
  const now = Date.now();
  const entry = rateMap.get(key);

  if (!entry || now > entry.resetTime) {
    rateMap.set(key, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return { success: false, remaining: 0 };
  }

  entry.count += 1;
  return { success: true, remaining: limit - entry.count };
}
