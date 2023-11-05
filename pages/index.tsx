import { useEffect, useState } from "react";
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { MantineProvider, createTheme } from "@mantine/core";
import { DoubleNavbar } from "@/components/sidebar/Navbar";
import Hero from "@/components/Hero/Hero";
import Form from "@/components/Form/Form";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  const [activeBtn, setActiveBtn] = useState(false);

  const onHandleActiveBtn = (data: boolean) => {
    setActiveBtn(data);
  };

  const hideOverlay = () => {
    setActiveBtn(false);
  };

  console.log(activeBtn);

  return (
    <>
      <div onClick={hideOverlay} className={activeBtn ? "overlay" : ""}></div>
      {activeBtn && <Form />}
      <MantineProvider theme={theme}>
        <DoubleNavbar />
        <Hero onHandleActiveBtn={onHandleActiveBtn} />
      </MantineProvider>
    </>
  );
}
