import { useContext, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext() {
  const [text, setText] = useState(false);
  const [likes, setLike] = useState(0);

  const handleClick = () => {
    setText(!text);

    if (!text) {
      alert("Content button is clicked");
    }
  };

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color: theme?"grey":"black",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div style={themeStyle}>
      {text && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, hic?Recusandae expedita vitae voluptates modi!</p>
      )}
      <button onClick={handleClick}>Content</button>
      <h3>{likes}</h3>
      <button onClick={() => setLike(likes + 1)}>Likes</button>
    </div>
  );
}

export default UseContext;