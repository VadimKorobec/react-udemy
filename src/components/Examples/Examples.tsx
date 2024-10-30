import { useState } from "react";

import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

import { EXAMPLES } from "../../data";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  const handleSelect = (selectedButton: keyof typeof EXAMPLES) => {
    setSelectedTopic(selectedButton);
  };

  const isValidTopic = selectedTopic in EXAMPLES;

  if (!isValidTopic) {
    return <p>Please select a topic to see details.</p>;
  }

  if (isValidTopic) {
    return (
      <>
        <h3>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].title}</h3>
        <p>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].code}</code>
        </pre>
      </>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs selectedTopic={selectedTopic} onSelect={handleSelect}>
        {isValidTopic}
      </Tabs>
    </Section>
  );
}

export default Examples;
