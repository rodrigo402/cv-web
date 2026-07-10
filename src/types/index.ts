export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  current?: boolean
  summary?: string
  points: string[]
  tags: string[]
}

export interface ProjectCase {
  title: string
  context: string
  solution: string
  role: string
  stack: string[]
  impact: string
}

export interface SkillCategory {
  name: string
  icon: string
  skills: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  location: string
}

export interface CourseItem {
  title: string
  provider: string
}
