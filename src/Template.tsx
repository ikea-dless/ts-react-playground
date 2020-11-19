import React from "react"
import { Basic } from "./components/Basic"
import { Fragment } from "./components/Fragment"
import { List } from "./components/List"
import { Children } from "./components/Children"
import { UseState } from "./components/UseState"
import { UseRef } from "./components/UseRef"
import { UseEffect } from "./components/UseEffect"
import { CustomHook } from "./components/CustomHook"
import { UseReducer } from "./components/UseReducer"
import { Hocs } from "./components/Hocs"
import { RenderProps } from "./components/RenderProps"

export const Template = () => (
  <div>
    <h1>React + TS実践</h1>
    <Basic
      name="太郎"
      age={25}
    />
    <Fragment />
    <List
      items={[
        { label: "東京都", value: 1 },
        { label: "埼玉県", value: 2 }
      ]}
    />
    <Children>
      <div style={{marginRight: "10px"}}>たくさん</div>
      <div style={{marginRight: "10px"}}>childrenを</div>
      <div style={{marginRight: "10px"}}>表示する</div>
    </Children>
    <UseState />
    <UseRef />
    <UseEffect />
    <CustomHook />
    {/* 以下余裕あれば */}
    <UseReducer />
    <Hocs />
    <RenderProps />
    <div style={{paddingBottom: 100}}></div>
  </div>
)
