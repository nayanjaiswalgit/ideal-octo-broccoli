import { useState } from "react";

const ToggleableContent = ({ render }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <h2>Hello</h2>
      {render({isOpen, toggle})}
    </div>
  );
};
export default ToggleableContent;
