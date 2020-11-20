import React, { useState } from "react"

export const ConditionalRendering = () => {
  const [isShow, setIsShow] = useState(false)
  const toggleShow = () => { setIsShow(!isShow) }

  return (
    <>
      <h3>条件付きレンダー</h3>
      <ul>
        <li><a href="https://ja.reactjs.org/docs/conditional-rendering.html">doc</a></li>
        <li><a href="https://ja.reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored">真偽値、null、undefined は無視される</a></li>
      </ul>
      <button onClick={toggleShow}>
        { isShow ? "非表示" : "表示" }
      </button>
      <Show isShow={isShow} />
      { /* ここに式がかけるので、分岐もかける */ }
      { isShow && <div>表示されます</div> }
      { /* ということは、下の結果は？ */ }
      { /* false */ }
      { /* 0 */ }
      { /* null */ }
      { /* undefined */ }
      { /* [] */ }
      { /* true */ }
    </>
  )
}

const Show = ({ isShow }) => {
  if (!isShow) return null

  return <div>Show</div>
}
