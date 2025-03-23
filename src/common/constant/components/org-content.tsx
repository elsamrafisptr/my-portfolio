export interface OrgsContentProps {
  title: string;
  org_type: string;
  org_name: string;
  org_contacts: string[];
  org_location: string;
  description: string;
  milestones: string[];
  start_date: string;
  end_date: string;
}

export const OrgsContent: ReadonlyArray<OrgsContentProps> = [
  {
    title: "Fullstack Developer",
    org_type: "Remote",
    org_name: "KAP TNN (PT. Itialus Solusi Perkasa)",
    org_contacts: ["https://kaptnn.com"],
    org_location: "Jakarta Selatan, Indonesia",
    description: "",
    milestones: [],
    start_date: "November 2024",
    end_date: "Present",
  },
  {
    title: "Fullstack Developer",
    org_type: "Remote",
    org_name: "KAP TNN (PT. Itialus Solusi Perkasa)",
    org_contacts: ["https://kaptnn.com"],
    org_location: "Jakarta Selatan, Indonesia",
    description: "",
    milestones: [],
    start_date: "November 2024",
    end_date: "Present",
  },
] as const;
