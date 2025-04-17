import { Metadata } from "next";
import ResourcesPage from './learn'

export const metadata: Metadata = {
  title: 'Tech Syndicate | Learn'
}

export default function() {
  return (<ResourcesPage></ResourcesPage>)
}