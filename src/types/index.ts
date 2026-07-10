export interface ExperienceItem {
  period: string
  role: string
  description: string
  tags: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  location: string
  items: string[]
}

export interface CourseItem {
  title: string
  provider: string
  items: string[]
}

export interface ProjectItem {
  title: string
  image: string
  url: string
  tags: string[]
}

export interface SkillGroup {
  category: string
  icon: string
  items: string[]
}
