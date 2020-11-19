import { Reducer, useReducer } from "react"

export type ProfileState = {
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
  | StandardAction<"changeHasLicense", { hasLicense: boolean }>

const reducer: Reducer<ProfileState, Action>  = (state, action) => {
  switch (action.type) {
    case "changeName": {
      const { payload } = action
      if (state.name === payload.name) return state
      return { ...state, name: payload.name }
    }
    case "changeAge": {
      const { payload } = action
      if (state.age === payload.age) return state
      return { ...state, age: payload.age }
    }
    case "changeHasLicense": {
      const { payload } = action
      if (state.hasLicense === payload.hasLicense) return state
      return { ...state, hasLicense: payload.hasLicense }
    }
    default: return state
  }
}

export const useProfile = (initialState: ProfileState) => {
  return useReducer(reducer, initialState)
}
