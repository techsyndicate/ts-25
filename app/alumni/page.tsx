import { Metadata } from "next";
import Alumni from "./alumni";
import members from "@/data/alumni.json";

export const metadata: Metadata = {
  title: 'Tech Syndicate | Alumni'
}

export default function AlumniPage() {
  return <Alumni members={members} />;
}