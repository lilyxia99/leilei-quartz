// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import darkmodeScript from "./scripts/comments.inline"
import styles from "./styles/darkmode.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Comments({ fileData }: QuartzComponentProps) {
  return (
    <div>
      <input></input>
      <button id="btn">Test Button</button>
    </div>
  )
}

Comments.beforeDOMLoaded = darkmodeScript
Comments.css = styles

export default (() => Comments) satisfies QuartzComponentConstructor
