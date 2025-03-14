// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Warsaw",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-09.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "YouTube",
              url: "https://youtube.com",
            },
            {
              name: "Gmail",
              url: "https://mail.google.com",
            },
            {
              name: "Calendar",
              url: "https://calendar.google.com",
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "Scrimba",
              url: "https://scrimba.com/home",
            },
            {
              name: "Digitized",
              url: "https://digitized.pl/",
            },
          ],
        },
        {
          name: "streams",
          links: [
            {
              name: "daddylive",
              url: "https://daddylive.mp",
            },
            {
              name: "sports",
              url: "https://champagne.pages.dev/online-streaming--dl/live-sports/",
            }
          ],
        },
      ],
    },
    {
      name: "Text",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "General",
          links: [
            {
              name: "Company Docs",
              url: "https://livechatinc.atlassian.net/wiki/spaces/COMP/overview?homepageId=499417308",
            },
            {
              name: "Unleash",
              url: "https://us.app.unleash-hosted.com/ushh0020/projects/livechat/features/agent-orchestrator-reply-suggestions",
            },
            {
              name: "GitHub",
              url: "https://github.com/livechat/ai-agents-engine",
            },
            {
              name: "Workflows",
              url: "https://platform.labs.text.com/console",
            },
            {
              name: "Tasks",
              url: "https://github.com/orgs/livechat/projects/15/views/2",
            },
            {
              name: "Grafana",
              url: "https://monitoring.text.com/login",
            },
            {
              name: "Tableau",
              url: "https://dub01.online.tableau.com/#/site/livechattableaucom/views/ResponseSuggestion/CompareUsageoverview?:iid=1",
            },
          ],
        },
        {
          name: "Labs",
          links: [
            {
              name: "LangFuse",
              url: "https://www.kaggle.com",
            },
            {
              name: "AgentApp",
              url: "https://my.labs.livechatinc.com/home",
            },
            {
              name: "ArgoCD",
              url: "https://deploy.labs.text.com/login?return_url=https%3A%2F%2Fdeploy.labs.text.com%2Fapplications",
            },
            {
              name: "Text Dev Platform",
              url: "https://platform.labs.text.com/console/flow/new",
            },
          ],
        },
        {
          name: "PROD",
          links: [
            {
              name: "LangFuse",
              url: "https://langfuse.internal.text.com/",
            },
            {
              name: "ArgoCD",
              url: "https://deploy.text.com/login?return_url=https%3A%2F%2Fdeploy.text.com%2Fapplications",
            },
          ],
        },
      ],
    },
    {
      name: "Dialogy",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "General",
          links: [
            {
              name: "GitHub",
              url: "https://github.com/Dialogly/dialogly-ai-engine",
            },
            {
              name: "LangSmith",
              url: "https://smith.langchain.com/",
            },
            {
              name: "Doppler",
              url: "https://dashboard.doppler.com/login",
            },
            {
              name: "Qdrant",
              url: "https://cloud.qdrant.io/accounts/220dbdee-6d40-4e0e-b666-c132f725551a/clusters",
            },
            {
              name: "DialogyAI",
              url: "http://dialogy.ai",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
