import React from "react"

/*
reactコンポーネントのrenderは必ず親の要素を1つだけ必要とします。

この例は2つの親が存在しているため、レンダーできません
const Component = () => (
  <div></div>
  <div></div>
)

この例は配列で要素を複数返します。この場合、レンダーできます。
配列なので、カンマが必要となり少々気持ち悪いです。
const Component = () => [
  <h3></h3>,
  <div>
    <p></p>
  </div>
]

任意の要素で囲ってやることでこれを回避できます。
const Component = () => (
  <div>
    <h3></h3>
    <div>
      <p></p>
    </div>
  </div>
)

しかし、余計な階層が1つ増えてしまいました。
*/

// 1. Basicコンポーネントで不要な要素を探して、Fragmentに置き換えてみましょう

export const Fragment = () => (
  // ショートシンタックス
  // <> === <React.Fragment>
  // </> === </React.Fragment>
  <>
    <h3>React Fragment</h3>
    <ul>
      <li><a href="https://ja.reactjs.org/docs/fragments.html">doc</a></li>
    </ul>
    <p>DOMに不要なノードを追加することなく、複数の要素をまとめられます</p>
    <div>
      <p>fragmentの例です</p>
    </div>
  </>
)
