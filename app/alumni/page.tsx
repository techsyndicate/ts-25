import { Metadata } from "next";
import Alumni from "./alumni";

export const metadata: Metadata = {
  title: 'Tech Syndicate | Alumni'
}

export default function() {
  return <Alumni></Alumni>;
}