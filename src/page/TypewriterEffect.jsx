import { useState, useEffect } from "react";

const TypewriterEffect = ({ children }) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullText = children;
    const speed = deleting ? 100 : 200;

    const timeout = setTimeout(() => {
      if (!deleting && i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        setI(i + 1);
      } else if (deleting && i > 0) {
        setText(fullText.slice(0, i - 1));
        setI(i - 1);
      } else {
        setDeleting(!deleting);
      }
    }, i === fullText.length || i === 0 ? 1000 : speed);

    return () => clearTimeout(timeout);
  }, [i, deleting, children]);

  return (
    <span style={{ whiteSpace: "nowrap" }}>
      {text}
    </span>
  );
};

export default TypewriterEffect;
