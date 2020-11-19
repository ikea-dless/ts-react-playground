import React from "react"
import { ProfileState, useProfile } from "../hooks/useProfile"

const initialState: ProfileState = {
  name: "",
  age: null,
  hasLicense: false
}

export const UseReducer = () => {
  // これもhooksなので、もちろんreducer関数含めて外出しできる
  const [state, dispatch] = useProfile(initialState)

  return (
    <>
      <h3>Hooks: useReducer</h3>
      <ul>
        <li><a href="https://ja.reactjs.org/docs/hooks-reference.html#usereducer">doc</a></li>
      </ul>
      <p>
        useStateと同じくstateを管理するhookです。<br/>
        &gt; 通常、useReducer が useState より好ましいのは、複数の値にまたがる複雑な state ロジックがある場合や、前の state に基づいて次の state を決める必要がある場合です。<br/>
        とあるので、あまり出番はなさそうです。ドキュメントに沿っていない使い方をしたくなった場合は見直しの機運かもしれませんね。
      </p>
      <div>
        <input
          type="text"
          value={state.name}
          onChange={(e) => {
            dispatch({ type: "changeName", payload: { name: e.target.value } })
          }}
        />
        <br/>
        <input
          type="number"
          // null合体演算子: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
          value={state.age ?? ""}
          onChange={(e) => {
            const { value } = e.target
            const age = value === "" ? null : parseInt(value, 10)
            dispatch({ type: "changeAge", payload: { age } })
          }}
        />
        <input
          type="checkbox"
          // 1. hasLicenseというboolを扱うstateをuseReducerに生やしてこのチェックボックスを操作できるようにしてみましょう
          // 2. 余裕のある人はhooksを外に切り出してみましょう
          checked={state.hasLicense}
          onChange={() => {
            dispatch({ type: "changeHasLicense", payload: { hasLicense: !state.hasLicense } })
          }}
        />
      </div>
    </>
  )
}
