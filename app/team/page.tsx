import Team from "./team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Syndicate | Team",
};

export default function () {
  return <Team></Team>;
}
