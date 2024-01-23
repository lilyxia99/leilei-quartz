import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Comments({ fileData, displayClass }: QuartzComponentProps) {
  return (
    <div class={`comments ${displayClass ?? ""}`}>
      <h3>Comments</h3>
      <input></input>
    </div>
  )
}

export default (() => Comments) satisfies QuartzComponentConstructor