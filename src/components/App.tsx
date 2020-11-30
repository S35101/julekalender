import { Fragment, useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { Random } from "../Random";
import { Message } from "./Message";

const timeout = 1000 * 60;
const random = new Random(87236459834);

const names = new Array<string[]>(8)
  .fill(["Ludwig", "Kristian", "Markus"])
  .flat();

random.shuffle(names);

export const App = () => {
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    const handle = setInterval(() => setDate(Date.now()), timeout);
    return () => clearInterval(handle);
  }, []);

  return (
    <Fragment>
      <Snowfall />
      <Message date={date} names={names} />
    </Fragment>
  );
};
