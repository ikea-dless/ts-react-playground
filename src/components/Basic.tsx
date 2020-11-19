import React from "react"

// 1. 型を付けてみましょう
// 下のFunctionComponentという関数の型を付けてみましょう
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L543-L549

// MEMO:
// propsは中身を抽出できる。以下のBasicコンポーネントはどちらも同じ出力
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// const Basic = (props) => <p>props.name</p>
// const Basic = ({ name }) => <p>name</p>
// propsを渡す際は中身を展開して渡すこともできる。以下のコンポーネントは同じ出力
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// const obj = { name: "ikeda" }
// <Basic name={obj.name} />
// <Basic { ...obj } />

export const Basic = ({ name, age }) => (
  <div>
    <h3>基本</h3>
    <dl>
      <dt>名前</dt>
      <dd>{ name }さん</dd>
      <dt>年齢</dt>
      <dd>{ age }歳</dd>
      <dt>日付</dt>
      { /* ブレースの中で、javascriptを書くことができます */ }
      <dd>{ new Date().toLocaleDateString() }</dd>
    </dl>
  </div>
)
