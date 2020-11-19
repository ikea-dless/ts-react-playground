import React, { useState } from "react"
import { useDelay } from "../hooks/useDelay"

// 独自フックの作成
// https://ja.reactjs.org/docs/hooks-custom.html

export const CustomHook = () => {
  // 1. booleanのstateを管理するhookを別ファイルに切り出してみましょう
  const [isDisplay, setIsDisplay] = useState(false)
  const toggleDisplay = () => { setIsDisplay(!isDisplay) }
  return (
    <>
      <h3>Hooks: CustomHook</h3>
      <button onClick={toggleDisplay}>toggle</button>
      { isDisplay && <Delay />}
    </>
  )
}

const Delay = () => {
  useDelay(() => {console.log("fired!")}, 3000)

  return <p>Delay</p>
}
