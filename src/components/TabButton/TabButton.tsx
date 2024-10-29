import "./TabButton.css";

interface TabButtonProps {
  children: React.ReactNode;
}

function TabButton({ children }: TabButtonProps) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}

export default TabButton;
