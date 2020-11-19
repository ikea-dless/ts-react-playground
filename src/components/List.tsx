import React, { FC } from "react"

type Item = {
  label: string
  value: number
}

type Props = {
  items: Array<Item>
}

export const List: FC<Props> = ({ items }) => (
  <>
    <h3>リストとkey</h3>
    <a href="https://ja.reactjs.org/docs/lists-and-keys.html">doc</a>
    <ul>
      { /* 1. 配列のすべての要素を表示しましょう */ }
      { items.map(({ label, value }) => (
        <li key={label}>{`${label}: ${value}`}</li>
      ))}
    </ul>
  </>
)
