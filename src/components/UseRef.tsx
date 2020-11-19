import React, { useRef } from "react"

export const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const focusInput = () => { inputRef?.current?.focus() }
  const isDisplay = useRef(false)
  return (
    <>
      <h3>Hooks: useRef</h3>
      <ul>
        <li><a href="https://ja.reactjs.org/docs/hooks-reference.html#useref">doc</a></li>
        <li><a href="https://ja.reactjs.org/docs/refs-and-the-dom.html">advanced guide</a></li>
        <li><a href="https://ja.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables">インスタンス変数のように使う</a></li>
      </ul>
      <p>
        DOMノード or Reactの要素に命令的にアクセスするものです。<br/>
        また、reactコンポーネントに閉じたミュータブルな値でもあります。<br/>
        インスタンス変数のように使う用途以外は、基本refの出番はないと言いたいです。<br/>
        (現状だと実際にはちょいちょい使うことはありそうです)
      </p>
      <input
        type="text"
        ref={inputRef}
      />
      <button onClick={focusInput}>focus</button>
      
      {/* useStateとは違い、値を更新してもリレンダーされない */}
      <p>{`isDisplay: ${isDisplay.current.toString()}`}</p>
      <button onClick={() => { isDisplay.current = true }}>toggle</button>
    </>
  )
}
