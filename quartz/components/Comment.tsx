import { QuartzComponentConstructor, QuartzComponentProps } from "./types";
import { useState } from 'preact/hooks'; // Import useState if you are using functional components

function Comments({ fileData, displayClass }: QuartzComponentProps) {
  const [commentText, setCommentText] = useState(''); // Using useState to manage the comment text

  // Function to handle input changes
  const handleInputChange = (event: Event) => {
    const target = event.target as HTMLInputElement; // Type casting to HTMLInputElement
    setCommentText(target.value); // Updating state
  };

  // Function to handle button click
  const handleButtonClick = () => {
    alert('Button clicked');
    console.log('Comment:', commentText); // Logging the comment
    // Add further logic to process the commentText
  };

  return (
    <div class={`comments ${displayClass ?? ""}`}>
      <h3>Comments</h3>
      <input type="text" onInput={handleInputChange} value={commentText}></input>
      <button type="button" onClick={()=>console.log("yes")}>Comment</button>
    </div>
  );
}

export default (() => Comments) satisfies QuartzComponentConstructor;
