import React, { FC, CSSProperties } from "react"

// レンダープロップ

const BaseComponent: FC = () => <p>render propsです</p>

type StyleProps = {
  styles: CSSProperties
  render: () => JSX.Element
}
const Style: FC<StyleProps> = ({ styles, render }) => (
  <div style={{...styles}}>
    { render() }
  </div>
)

export const RenderProps = () => (
  <>
    <h3>レンダープロップ</h3>
    <a href="https://ja.reactjs.org/docs/render-props.html">doc</a>
    <p>&#8251;今となってはhooksがrender propsのポジションなので、こんなものもあったな〜という感じで大丈夫です</p>
    <Style
      styles={{color: "blue"}}
      render={() => <BaseComponent />}
    />
  </>
)
