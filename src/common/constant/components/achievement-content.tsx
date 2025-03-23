export interface AchievementsContentProps {
  title: string;
  achievement_producer: string;
  producer_contacts: string[];
  credentials_id: string;
  credentials_url: string;
  description: string;
  milestones: string[];
}

export const AchievementsContent: ReadonlyArray<AchievementsContentProps> = [
  {
    title: "Fullstack Developer",
    achievement_producer: "KAP TNN (PT. Itialus Solusi Perkasa)",
    producer_contacts: ["https://kaptnn.com"],
    credentials_id: "",
    credentials_url: "",
    description: "",
    milestones: [],
  },
  {
    title: "Fullstack Developer",
    achievement_producer: "KAP TNN (PT. Itialus Solusi Perkasa)",
    producer_contacts: ["https://kaptnn.com"],
    credentials_id: "",
    credentials_url: "",
    description: "",
    milestones: [],
  },
] as const;
