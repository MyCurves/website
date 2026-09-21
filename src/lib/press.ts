export interface PressCoverageItem {
  outlet: string;
  headline: string;
  date: string;
  url: string;
  summary?: string;
}

/** Verified press coverage — only add outlets with a real article URL. */
export const PRESS_COVERAGE: PressCoverageItem[] = [
  {
    outlet: "Bikozulu",
    headline: "Confidence In A Cup",
    date: "11 September 2018",
    url: "https://bikozulu.co.ke/2018/09/11/confidence-in-a-cup/",
    summary:
      "Wendy Karira on building Loving My Curves and helping Kenyan women find confidence through the right fit.",
  },
  {
    outlet: "Nairobi Wire",
    headline: "My Hustle: I Sold Family Plot to Start Lingerie Business",
    date: "17 February 2020",
    url: "https://nairobiwire.com/2020/02/my-hustle-i-sold-family-plot-to-start-lingerie-business.html",
    summary:
      "Wendy Karira shares how she invested in MyCurves and grew a dedicated plus-size lingerie business in Nairobi.",
  },
  {
    outlet: "Riverwood Communications",
    headline: "Inclusion Icons — Wendy Waweru & MyCurves Kenya",
    date: "8 March 2024",
    url: "https://www.linkedin.com/pulse/inclusion-icons-riverwood-communications-ltd-jd9rf",
    summary:
      "Recognised for pioneering curvy-model marketing and encouraging women to embrace every body shape.",
  },
];

// Daily Nation — add when Mathenge provides URL

/** Direct quote from Wendy Karira in Bikozulu, "Confidence In A Cup" (2018). */
export const BIKOZULU_PULL_QUOTE =
  "It's important for confidence, posture and comfort.";

export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/mycurveskenya/";

/** Wendy’s July 2026 founder reflection — dream began 2017, links Bikozulu article. */
export const INSTAGRAM_FOUNDER_STORY_URL =
  "https://www.instagram.com/p/DbY6Ov3OzA4/";

export interface InstagramPostLink {
  url: string;
  label: string;
}

/** Optional secondary posts for Our Story “More from Instagram”. */
export const INSTAGRAM_MORE_POSTS: InstagramPostLink[] = [
  {
    url: "https://www.instagram.com/p/DbfT4yPObPy/",
    label: "Cheers to 50",
  },
  {
    url: "https://www.instagram.com/p/DddZz-sDn70/",
    label: "Founder birthday bra post",
  },
];
