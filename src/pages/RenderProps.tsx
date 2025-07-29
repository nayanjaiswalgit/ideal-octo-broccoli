import React from "react";
import ToggleableContent from "../components/toggleable-content";

const RenderProps = () => {
  return (
    <div>
      <h1>Render Props</h1>
      <ToggleableContent
        render={({ isOpen, toggle }) => (
          <div>
            <button onClick={toggle}>{isOpen ? "Hide" : "Show"} content</button>
            {isOpen && <p>Dynamic Content</p>}
          </div>
        )}
      />
    </div>
  );
};
export default RenderProps;
