import React, { useState } from "react"

export const UseState = () => {
  const initialState: string = ""
  // useStateはstate自体とstateを変更する関数をタプルで返す
  const [text, setText] = useState(initialState)

  return (
    <div>
      <h3>Hooks: useState</h3>
      <ul>
        <li><a href="https://ja.reactjs.org/docs/hooks-state.html">doc</a></li>
      </ul>
      <textarea
        value={text}
        onChange={(e) => { setText(e.target.value) }}
      />
      文字数: 1. ここに表示してみましょう
    </div>
  )
}
