import React, { Reducer, useReducer } from "react"

type State = {
  name: string
  age: number | null
  hasLicense: boolean
}

type StandardAction<T, P> = {
  type: T
  payload: P
}

type Action =
  | StandardAction<"changeName", { name: string }>
  | StandardAction<"changeAge", { age: number | null }>
  | StandardAction<"toggleHasLicense", {}>
  | StandardAction<"reset", {}>

const initialState: State = {
  name: "",
  age: null,
  hasLicense: false
}

const reducer: Reducer<State, Action>  = (state, action) => {
  switch (action.type) {
    case "changeName": {
      const { payload } = action
      // if (state.name === payload.name) return state
      return { ...state, name: payload.name }
    }
    case "changeAge": {
      const { payload } = action
      // if (state.age === payload.age) return state
      return { ...state, age: payload.age }
    }
    case "toggleHasLicense": {
      return { ...state, hasLicense: !state.hasLicense }
    }
    case "reset": {
      return initialState
    }
    default: return state
  }
}

export const UseReducer = () => {
  // これもhooksなので、もちろんreducer関数含めて外出しできる
  const [state, dispatch] = useReducer(reducer, initialState)

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
        <button onClick={() => { dispatch({ type:"reset", payload: {} })}}>reset</button>
        <input
          type="checkbox"
          checked={state.hasLicense}
          onChange={() => { dispatch({ type: "toggleHasLicense", payload: {} })}}
          // 1. hasLicenseというboolを扱うstateをuseReducerに生やしてこのチェックボックスを操作できるようにしてみましょう
          // 2. 余裕のある人はhooksを外に切り出してみましょう
        />
      </div>
    </>
  )
}
