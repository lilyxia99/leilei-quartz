import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Comments({ fileData, displayClass }: QuartzComponentProps) {
  return (
    <div class={`comments ${displayClass ?? ""}`}>
      <h3>Comments</h3>
      {/* The script tag below is for the utterances comment widget */}
      {/*
      <script 
        src="https://utteranc.es/client.js"
        // Using dataset to pass the configuration to the script
        repo="lilyxia99/leilei-quartz"
        issue-term="pathname"
        label="comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
      </script>
  */}
    </div>
  )
}

export default (() => Comments) satisfies QuartzComponentConstructor