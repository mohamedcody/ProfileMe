export interface TeamMember {
  id: string;
  nameKey: string;
  roleKey: string;
  bioKey: string;
  skills: string[];
  avatarInitial: string;
  image?: string;
  github?: string;
  linkedin?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "mohamed",
    nameKey: "Mohamed Saad",
    roleKey: "Founder_Role",
    bioKey: "Founder_Bio",
    skills: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Docker", "System Architecture"],
    avatarInitial: "MS",
    image: "/profile.jpg",
    github: "https://github.com/mohamedcody",
    linkedin: "https://www.linkedin.com/in/mohamed-saad-394b98372/?isSelfProfile=true"
  },
  {
    id: "ahmed",
    nameKey: "Ahmed Esam",
    roleKey: "Ahmed_Role",
    bioKey: "Ahmed_Bio",
    skills: ["React", "JavaScript", "Material UI", "CSS", "UI/UX"],
    avatarInitial: "AE",
    image: "/ahmed.jpg",
    github: "https://github.com/AhmedEsam-415",
    linkedin: "https://www.linkedin.com/in/ahmed-esam-0bb173297/"
  }
];
