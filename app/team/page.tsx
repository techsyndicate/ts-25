import Team from "./team";
import { Metadata } from "next";
import members from "@/data/members.json";

export const metadata: Metadata = {
  title: "Tech Syndicate | Team",
};

export default function TeamPage() {
  return <Team members={members} />;
}
