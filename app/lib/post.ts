export type Article = {
  id: number;
  title: string;
  slug: string,
  desc: string;
  category: string;
  content: string;
};

export const articles: Article[] = [
  {
    id: 1,
    title: "GTA 6 Leak",
    slug: "gta-6-leak",
    desc: "Map details leaked online",
    category: "Tech",
    content:
      "Recent GTA 6 leaks suggest a massive map expansion including Vice City and surrounding islands. Players might experience improved AI systems, realistic police behavior, and dynamic weather that changes gameplay in real time."
  },
  {
    id: 2,
    title: "From Monsters Theory",
    slug: "from-monsters-theory",
    desc: "Hidden story explained",
    category: "Film",
    content:
      "The monsters in From series may actually be cursed humans trapped in a loop for centuries. Some theories suggest the town itself is a psychological experiment where time resets every night."
  },
  {
    id: 3,
    title: "Red Sea Mystery",
    slug: "red-sea-mystery",
    desc: "Strange natural event",
    category: "Facts",
    content:
      "A rare algae bloom turned parts of the Red Sea into a deep red color. Scientists say it is caused by Noctiluca scintillans, a microscopic organism that glows at night and affects marine life."
  },
  {
    id: 4,
    title: "AI Tool Boom",
    slug: "ai-tool-boom",
    desc: "New AI tools changing world",
    category: "Tech",
    content:
      "AI tools are rapidly transforming industries such as design, programming, education, and filmmaking. Experts believe automation will replace repetitive jobs but also create new creative roles."
  },
  {
    id: 5,
    title: "Movie Secret Scene",
    slug: "movie-secret-scene",
    desc: "Hidden ending explained",
    category: "Film",
    content:
      "Many movies hide secret post-credit scenes that reveal future sequels or hidden storylines. Studios like Marvel popularized this technique to keep audiences engaged after the main story ends."
  },
  {
    id: 6,
    title: "Human Brain Facts",
    slug: "human-brain-facts",
    desc: "How memory works",
    category: "Facts",
    content:
      "The human brain stores memories through neural connections called synapses. Sleep plays a critical role in strengthening memory and removing unnecessary information from the brain."
  },
  {
    id: 7,
    title: "Cyber Attack Rise",
    slug: "cyber-attack-rise",
    desc: "Hackers are evolving",
    category: "Tech",
    content:
      "Cyber attacks are becoming more advanced with AI-powered hacking tools. Companies are now investing heavily in cybersecurity systems to protect sensitive user data and financial systems."
  },
  {
    id: 8,
    title: "Netflix Hidden Codes",
    slug: "netflix-hidden-codes",
    desc: "Secret categories exist",
    category: "Film",
    content:
      "Netflix has hidden category codes that allow users to access thousands of secret genres. These codes unlock niche content that is not visible in the normal browsing interface."
  },
  {
    id: 9,
    title: "Ocean Mystery Signals",
    slug: "ocean-mystery-signals",
    desc: "Unknown sea signals detected",
    category: "Facts",
    content:
      "Scientists have detected unexplained low-frequency signals coming from deep ocean regions. Some believe they are caused by natural tectonic activity, while others explore unknown marine phenomena."
  },
  {
    id: 10,
    title: "Future of AI Jobs",
    slug: "future-of-ai-jobs",
    desc: "What jobs will disappear",
    category: "Tech",
    content:
      "AI is expected to replace many repetitive jobs such as data entry and basic customer service. However, it will also create demand for AI trainers, automation engineers, and digital creators."
  },
  {
    id: 11,
    title: "Film Theory Shock",
    slug: "film-theory-shock",
    desc: "Big twist revealed",
    category: "Film",
    content:
      "A popular film theory suggests that the entire storyline is a reversed timeline, meaning the ending actually happens at the beginning. This completely changes how viewers interpret the movie."
  }
];