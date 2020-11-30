import { useEffect, useState } from "react";

export interface PresentProps {
  day: number;
  name: string;
}

export const Gift = ({ day, name }: PresentProps) => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(false);
  }, [day]);

  if (!opened) {
    return (
      <div className="gift" onClick={() => setOpened(true)}>
        🎁
      </div>
    );
  }

  return <span>{name}!</span>;
};
