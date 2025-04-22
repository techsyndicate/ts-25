import About from "./about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Syndicate | About Us",
};

export default function () {
  return <About />;
}
