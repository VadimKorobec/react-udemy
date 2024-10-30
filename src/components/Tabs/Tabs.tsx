import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";

type ExampleKeys = keyof typeof EXAMPLES;

interface TabsProps {
  selectedTopic: string;
  onSelect: (topic: ExampleKeys) => void;
  children: React.ReactNode;
}

function Tabs({ children, onSelect, selectedTopic }: TabsProps) {
  return (
    <>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => onSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => onSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => onSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => onSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {children}
    </>
  );
}

export default Tabs;
