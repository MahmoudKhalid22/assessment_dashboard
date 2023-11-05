import { useEffect, useState } from "react";
import { Title, MantineProvider, Button } from "@mantine/core";

import classes from "./Hero.module.scss";

type PROPS = {
  onHandleActiveBtn: (data: boolean) => void;
};

const Hero: React.FC<PROPS> = ({ onHandleActiveBtn }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    onHandleActiveBtn(true);
  }, [active]);
  return (
    <MantineProvider
      theme={{
        components: {
          Title: Title.extend({
            classNames: {
              root: classes.heading,
            },
          }),
        },
      }}
    >
      <div className={classes.right}>
        <div className={classes.container}>
          <Title order={3}>Monitored accounts</Title>

          <button
            onClick={() => setActive((active) => !active)}
            className={classes.add}
          >
            <span>+</span>
          </button>
        </div>
        <hr />
        <div className={classes.middle}>
          <div></div>
          <h3>No accounts</h3>
          <p>
            Add a new account to start monitoring them for KYC compliance
            purposes
          </p>
          <button>
            <button
              onClick={() => setActive((active) => !active)}
              className={classes.addMiddle}
            >
              <span>+</span>
            </button>
          </button>
        </div>
      </div>
    </MantineProvider>
  );
};

export default Hero;
