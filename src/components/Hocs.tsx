import React, { FC } from "react"

const BaseComponent: FC = () => <p>hocsです</p>

const withStyles = (WrappedComponent: React.ComponentType) => (styles: React.CSSProperties): FC => {
  return (props) => (
    <>
      <h3>高階コンポーネント</h3>
      <a href="https://ja.reactjs.org/docs/higher-order-components.html">doc</a>
      <p>&#8251;今となってはhooksがhocsのポジションなので、こんなものもあったな〜という感じで大丈夫です</p>
      <div style={{...styles}}>
        <WrappedComponent { ...props } />
      </div>
    </>
  )
}

export const Hocs = withStyles(
  BaseComponent
)({ color: "red" })
