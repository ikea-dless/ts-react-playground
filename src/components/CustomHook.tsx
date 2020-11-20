import React, { FC, useState } from "react"
import { useDelay } from "../hooks/useDelay"

// 独自フックの作成
// https://ja.reactjs.org/docs/hooks-custom.html

const useToggle = (init: boolean): [boolean, () => void] => {
  const [bool, setBool] = useState(init)
  const toggle = () => { setBool(!bool) }
  return [bool, toggle]
}

export const CustomHook: FC = () => {
  // 1. booleanのstateを管理するhookを別ファイルに切り出してみましょう
  const [isDisplay, toggleDisplay] = useToggle(false)
  return (
    <>
      <h3>Hooks: CustomHook</h3>
      <button onClick={toggleDisplay}>toggle</button>
      { isDisplay && <Delay />}
    </>
  )
}

const Delay: FC = () => {
  useDelay(() => {console.log("fired!")}, 3000)

  return <p>Delay</p>
}
