import "./TabButton.css";

interface TabButtonProps {
  children: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
}

function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
