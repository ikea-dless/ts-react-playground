import React, { useState, useEffect, FC } from "react"

// https://ja.reactjs.org/docs/hooks-effect.html

export const UseEffect: FC = () => {
  const [text, setText] = useState("")
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // 1. テキストエリアを編集したときだけ、ログを出したい
    console.log(text)
  }, [text])

  return (
    <div>
      <h3>Hooks: useEffect</h3>
      <div>
        <textarea
          value={text}
          onChange={(e) => { setText(e.target.value) }}
        />
      </div>
      <div>
        <input
          type="number"
          value={count}
          onChange={(e) => { setCount(parseInt(e.target.value || "0", 10)) }}
        />
      </div>
      { count > 0 && <Mount /> }
    </div>
  )
}

const Mount: FC = () => {
  useEffect(() => {
    // 1. コンポーネントマウント時に1回だけ mounted! を吐き出したい
    // 2. コンポーネントアンマウント時に1回だけ unmounted! を吐き出したい
    console.log("mounted!")
    return () => console.log("unmounted!")
  }, [])
  
  useEffect(() => {
    // 1. コンポーネントマウント時に1回だけ mounted! を吐き出したい
    // 2. コンポーネントアンマウント時に1回だけ unmounted! を吐き出したい
    console.log("mounted!")
    return () => console.log("unmounted!")
  }, [])

  return <p>マウントされてます</p>
}
