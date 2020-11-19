import React from "react"

export const List = ({ items }) => (
  <>
    <h3>リストとkey</h3>
    <a href="https://ja.reactjs.org/docs/lists-and-keys.html">doc</a>
    <ul>
      { /* 1. 配列のすべての要素を表示しましょう */ }
      <li>{`${items[0].label}: ${items[0].value}`}</li>
    </ul>
  </>
)
