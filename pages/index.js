"use client";
import React from "react";
import {
  GuestHeaderMegaMenu,
  HeroBullets,
  GetInTouchSimple,
  EmailBanner,
  FeaturesCards,
} from "/components/mantine";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function Home() {
  return (
    <MantineProvider>
      <GuestHeaderMegaMenu />
      <HeroBullets />
      <FeaturesCards />
      <GetInTouchSimple />
      <EmailBanner />
    </MantineProvider>
  );
}
