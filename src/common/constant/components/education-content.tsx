export interface EducationsContentProps {
  title: string;
  education_type: string;
  education_name: string;
  education_contacts: string[];
  education_location: string;
  description: string;
  milestones: string[];
  start_date: string;
  end_date: string;
}

export const EducationsContent: ReadonlyArray<EducationsContentProps> = [
  {
    title: "Fullstack Developer",
    education_type: "Remote",
    education_name: "KAP TNN (PT. Itialus Solusi Perkasa)",
    education_contacts: ["https://kaptnn.com"],
    education_location: "Jakarta Selatan, Indonesia",
    description: "",
    milestones: [],
    start_date: "November 2024",
    end_date: "Present",
  },
] as const;
