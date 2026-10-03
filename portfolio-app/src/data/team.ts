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
    skills: ["Java", "Spring Boot", "PostgreSQL", "React", "System Architecture"],
    avatarInitial: "MS",
    image: "/mohamed.jpg",
    github: "https://github.com/mohamedcody",
    linkedin: "#"
  },
  {
    id: "ahmed",
    nameKey: "Ahmed Esam",
    roleKey: "Ahmed_Role",
    bioKey: "Ahmed_Bio",
    skills: ["React", "JavaScript", "Material UI", "CSS", "UI/UX"],
    avatarInitial: "AE",
    image: "/ahmed.jpg",
    github: "#",
    linkedin: "https://www.linkedin.com/in/ahmed-esam-0bb173297/"
  }
];
