import React, { FC } from "react"

// 1. childrenとして渡されているコンポーネントを表示できるようにしましょう

export const Children: FC = ({ children }) => (
  <>
    <h3>Children</h3>
    <a href="https://ja.reactjs.org/docs/composition-vs-inheritance.html">コンポジション vs 継承</a>
    <div
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      { children }
    </div>
  </>
)
