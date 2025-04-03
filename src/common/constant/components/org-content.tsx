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
    title: "Design and Publication Team",
    org_type: "On-Site",
    org_name: "Telkom University Education Movement (TEAM)",
    org_contacts: ["https://instagram.com/"],
    org_location: "Bandung, Indonesia",
    description: "",
    milestones: [],
    start_date: "October 2021",
    end_date: "August 2022",
  },
  {
    title: "Design and Motion Video Division",
    org_type: "Remote",
    org_name: "Menebarmanfaat.id",
    org_contacts: ["https://instagram.com/"],
    org_location: "Jakarta, Indonesia",
    description: "",
    milestones: [],
    start_date: "November 2021",
    end_date: "March 2022",
  },
] as const;
