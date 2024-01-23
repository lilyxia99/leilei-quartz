import { QuartzComponentConstructor, QuartzComponentProps } from "./types";
export default (() => {
  function YourComponent() {
    return <button id="btn">Click me</button>
  }
 
  YourComponent.beforeDOM = `
  console.log("hello from before the page loads!")
  `
 
  YourComponent.afterDOM = `
  document.getElementById('btn').onclick = () => {
    alert('button clicked!')
  }
  `
  return YourComponent
}) satisfies QuartzComponentConstructor

