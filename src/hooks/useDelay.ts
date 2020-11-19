import { useEffect } from "react"

// 一定時間後にcallbackを実行するhooks
export const useDelay = (callback: TimerHandler, delay: number = 0) => {
  useEffect(() => {
    const intervalId = setTimeout(callback, delay)
    return () => clearTimeout(intervalId)
  }, [delay])
}
