import {
  AchievementsContent,
  AchievementsContentProps,
} from "../components/achievement-content";
import {
  EducationsContent,
  EducationsContentProps,
} from "../components/education-content";
import { OrgsContent, OrgsContentProps } from "../components/org-content";
import {
  SkillsContent,
  SkillsContentProps,
} from "../components/skills-content";
import { WorksContent, WorksContentProps } from "../components/works-content";

export interface AboutMeContentProps {
  description: string;
  story: string;
  work_experiences: ReadonlyArray<WorksContentProps>;
  org_experiences: ReadonlyArray<OrgsContentProps>;
  education_experiences: ReadonlyArray<EducationsContentProps>;
  achievements: ReadonlyArray<AchievementsContentProps>;
  skills: ReadonlyArray<SkillsContentProps>;
}

export const AboutMeContent: Readonly<AboutMeContentProps> = {
  description:
    "I am a software engineer passionate about developing and researching technology and AI products, as well as creating a technology community to improve the quality of human life. My interest in business also leads me to aspire to become an entrepreneur or founder someday.",
  story:
    "I am a software engineer passionate about developing and researching technology and AI products, as well as creating a technology community to improve the quality of human life. My interest in business also leads me to aspire to become an entrepreneur or founder someday.",
  work_experiences: WorksContent,
  org_experiences: OrgsContent,
  education_experiences: EducationsContent,
  achievements: AchievementsContent,
  skills: SkillsContent,
} as const;
