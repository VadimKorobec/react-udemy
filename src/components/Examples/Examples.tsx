import { useState } from "react";
import TabButton from "../TabButton/TabButton";

import { EXAMPLES } from "../../data";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState<string>(
    "Please click a button"
  );

  const handleSelect = (selectedButton: keyof typeof EXAMPLES) => {
    setSelectedTopic(selectedButton);
  };

  const isValidTopic = selectedTopic in EXAMPLES;
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {isValidTopic ? (
        <>
          <h3>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].title}</h3>
          <p>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].code}</code>
          </pre>
        </>
      ) : (
        <p>Please select a topic to see details.</p>
      )}
    </section>
  );
}

export default Examples;
