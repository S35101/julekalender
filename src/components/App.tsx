import { useEffect, useState } from "react";
import { Message } from "./Message";

const timeout = 1000 * 60;

export const App = () => {
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    const handle = setInterval(() => setDate(Date.now()), timeout);
    return () => clearInterval(handle);
  }, []);

  return (
    <div>
      <Message date={date} names={["Ludwig", "Kristian", "Markus"]} />
    </div>
  );
};