import { useEffect, useState } from "react";

export interface PresentProps {
  name: string;
}

export const Gift = ({ name }: PresentProps) => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(false);
  }, [name]);

  if (!opened) {
    return (
      <div className="gift" onClick={() => setOpened(true)}>
        🎁
      </div>
    );
  }

  return <span>{name}!</span>;
};
