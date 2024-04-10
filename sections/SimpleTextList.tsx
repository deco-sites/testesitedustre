/** @title {{{text}}} */
export interface Item {
  text: string;
}

/** @title {{{title}}} */
export interface SimpleText {
  title: string;
  /** @format textarea */
  items: Array<Item>;
}

export interface Props {
  title?: string;
  /** @format textarea */
  items?: Array<SimpleText>;
}

export default function SimpleTextList({
  title = "All features",
  items = [
    {
      title: "Compose and manage pages",
      items: [
        { text: "Page templates" },
        { text: "Ready-to-use sections" },
        { text: "Ready-to-use integrations" },
        { text: "Reusable blocks" },
        { text: "CMS" },
        { text: "AI assistant" },
        { text: "Themes" },
        { text: "Style editing" },
        { text: "Edge ingrastructure" },
      ],
    },
    {
      title: "Build a tailor made experience",
      items: [
        { text: "deco.cx dev tools" },
        { text: "Extensible sections" },
        { text: "Extensible integrations" },
        { text: "Extensible anything" },
      ],
    },
    {
      title: "Empower your digital experiences",
      items: [
        { text: "Page variantes for segments" },
        { text: "Campaigns" },
        { text: "Custom segments" },
        { text: "A/B tests" },
      ],
    },
    {
      title: "Learn and evolve from the results",
      items: [
        { text: "Track site's metrics" },
        { text: "Track blocks' performance" },
        { text: "Custom segments" },
        { text: "Integrate with analytics" },
      ],
    },
  ],
}: Props) {
  return <></>;
}
