export const SITE = {
  website: "https://catesc.dev/", // replace this with your deployed domain
  author: "Catalina Escalona",
  profile: "",
  desc: "A blog for learning in public.",
  title: "Catalina Escalona",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 12,
  postPerPage: 12,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Vienna", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
