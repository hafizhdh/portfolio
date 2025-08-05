"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  Code2,
  Palette,
  Server,
  Database,
  Wrench,
  Zap,
  Star,
  Menu,
  X,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set())
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleExperiences, setVisibleExperiences] = useState<Set<number>>(new Set())
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set())
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleEducation, setVisibleEducation] = useState<Set<number>>(new Set())
  const educationRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  const toggleExperience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index)
  }

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setMobileMenuOpen(false)
  }

  const experiences = [
    {
      title: "Web Developer",
      company: "PT Telekomunikasi Selular (Telkomsel)",
      period: "September 2024 - December 2024",
      location: "Jakarta, Indonesia",
      description:
        "Developed and maintained web application using modern web technologies. Collaborated with vendor to implement new features and fix bugs.",
      achievements: [
        "Conducted in-depth analysis of competing web applications to identify strengths, weaknesses, threats, and opportunities",
        "Optimized UI/UX application for improved user experience and efficiency",
        "Implemented a robust email notification system for automation users alert",
        "Developed advanced search and filter functionalities to streamline user data access and analysis, handling 100+ daily queries",
        "Reviewed and managed 300+ issues in User Acceptance Test (UAT), ensuring application features met user requirements",
      ],
      status: "Internship",
    },
    {
      title: "Teaching Assistant of Automata and Theory of Language",
      company: "Universitas Indonesia",
      period: "February 2024 - May 2024",
      location: "Depok, Indonesia",
      description:
        "Assisted professor in teaching Automata and Theory of Language course. Evaluated student assignments and provided constructive feedback to improve students' level of understanding.",
      achievements: [
        "Evaluated 150+ student assignments and provided constructive feedback to improve students' level of understanding",
        "Conduct assistance sessions to clarify course concepts and assess student understanding",
        "Facilitated group discussion to encourage active learning and critical thinking among students",
        "Collaborated with the course instructor to ensure the smooth running of the course, including exam administration and student assignments",
      ],
      status: "Part-time",
    },
  ]

  const projects = [
    {
      title: "Freshgrade",
      description: "A pocket application for detecting fruit freshness",
      shortDesc: "Mobile app for fruit freshness and diseases detection using AI",
      technologies: ["Express.js", "PostgreSQL", "Cloud Run (GCP)", "FastAPI", "Google Cloud Storage"],
      features: [
        "Implemented backend using Express.js and ML service for inference using FastAPI.",
        "Deployed backend and ML service to Google Cloud Run",
        "Implemented logging and monitoring using Google Cloud Logging",
        "Managed user data securely using Google Cloud Storage",
      ],
      github: "https://github.com/Bangkit-FreshGrade/freshgrade-backend",
      demo: "",
      image: "/freshgrade.png",
      role: "Backend and Cloud Engineer",
    },
    {
      title: "Pegon",
      description: "Digital platform for preserving pegon script",
      shortDesc: "A web platform for preserving and learning pegon script",
      technologies: ["Nest.js", "PostgreSQL", "Next.js", "React", "Prisma", "Resend"],
      features: [
        "Migrated backend from headless CMS to Nest.js and PostgreSQL with Prisma ORM",
        "Enhanced UI/UX such as implementing light and dark mode",
        "Integrated email notifications using Resend for user document acceptance/rejection",
        "Utilized Scrum methodology for project management with team of 4 developers",
        "Writing unit tests using Jest with 90% coverage",
      ],
      github: "",
      demo: "https://www.pegon.cs.ui.ac.id",
      image: "/pegon.png",
      role: "Full Stack Developer",
    },
    {
      title: "Marketplace",
      description: "Multi-tenant marketplace platform",
      shortDesc: "Building a multi-tenant marketplace platform with microservices architecture",
      technologies: ["Docker", "Kubernetes", "AWS EC2", "Express.js", "Winston", "HAProxy"],
      features: [
        "Migrated monolithic application to microservices architecture",
        "Integrated structured logging using Winston",
        "Containerized service with docker and managed with Kubernetes on AWS EC2 instances",
        "Build HA cluster with 2 master nodes and 1 HAProxy load balancer",
      ],
      github: "https://github.com/hafizhdh/aaw-marketplace",
      demo: "",
      image: "/marketplace.png",
      role: "Backend and Cloud Engineer",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universitas Indonesia",
      period: "2021 - 2025",
      location: "Depok, Indonesia",
      description:
        "Comprehensive computer science program covering algorithms, data structures, software engineering, and system design.",
      achievements: [
        "Graduated Cum Laude (GPA: 3.75/4.0)",
        "Thesis: Information Extraction System Development for Indonesian Processed Food Packaging",
      ],
    },
    {
      degree: "Cloud Computing Learning Path by Bangkit",
      institution: "Bangkit Academy by Google, GoTo, and Traveloka",
      period: "2024",
      location: "Jakarta, Indonesia",
      description:
        "Intensive 12-week program focused on cloud computing and backend development using Google Cloud Platform.",
      achievements: ["Building and managing Freshgrade project", "Obtained Google Cloud Engineer Certification"],
    },
  ]

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "Go"],
    },
    {
      title: "Frontend Development",
      icon: Palette,
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Express.js", "Nest.js", "Django", "Spring Boot", "REST APIs"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "Redis", "MySQL", "Supabase"],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "Docker", "AWS", "GCP", "Postman", "Kubernetes"],
    },
    {
      title: "Other Skills",
      icon: Zap,
      skills: ["Agile", "Scrum", "Testing", "Microservices"],
    },
  ]

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleProjects((prev) => new Set([...prev, index]))
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        },
      )

      observer.observe(ref)
      return observer
    })

    const experienceObservers = experienceRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleExperiences((prev) => new Set([...prev, index]))
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        },
      )

      observer.observe(ref)
      return observer
    })

    const skillObservers = skillRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSkills((prev) => new Set([...prev, index]))
              }, index * 100)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        },
      )

      observer.observe(ref)
      return observer
    })

    const educationObservers = educationRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleEducation((prev) => new Set([...prev, index]))
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
      experienceObservers.forEach((observer) => observer?.disconnect())
      skillObservers.forEach((observer) => observer?.disconnect())
      educationObservers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 pixel-grid">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b transition-colors duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Muhammad Hafizha Dhiyaulhaq</h1>
            <div className="flex items-center space-x-6">
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                <button
                  onClick={() => scrollToSection("summary")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Summary
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Skills
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-primary/10 rounded-md transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col space-y-4 pb-4">
              <button
                onClick={() => scrollToSection("summary")}
                className="text-left hover:text-primary transition-colors cursor-pointer py-2"
              >
                Summary
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left hover:text-primary transition-colors cursor-pointer py-2"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-primary transition-colors cursor-pointer py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-left hover:text-primary transition-colors cursor-pointer py-2"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left hover:text-primary transition-colors cursor-pointer py-2"
              >
                Skills
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 space-y-16">
        {/* Summary Section */}
        <section id="summary" className="text-center space-y-6">
          <div className="relative w-48 h-48 mx-auto">
            <Image
              src="/Muhammad Hafizha Dhiyaulhaq.png"
              alt="Profile Photo"
              width={192}
              height={192}
              className="pixelated rounded-full object-cover border-4 border-primary/20"
              priority
              onError={(e) => console.error('Profile image failed to load:', e)}
            />
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold">Hi, I&apos;m Hafiz!</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Software Engineer and recent Universitas Indonesia CS graduate with a strong foundation in algorithms,
              data structures, and object-oriented design. Proven ability to build clean, scalable, and maintainable
              code through projects utilizing Python, JavaScript, and SQL. Brings a unique interest in leveraging AI and
              machine learning to create intelligent features.
            </p>
            <div className="flex justify-center items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hafizadhyaulhaq16@gmail.com" className="hover:text-primary transition-colors">
                  hafizadhyaulhaq16@gmail.com
                </a>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/hafizhdh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Github
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://linkedin.com/in/hafizhdh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-0.5"></div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => {experienceRefs.current[index] = el}}
                  className={`relative flex items-center mb-12 transform transition-all duration-700 ease-out ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${
                    visibleExperiences.has(index)
                      ? "translate-y-0 opacity-100"
                      : index % 2 === 0
                        ? "translate-x-8 opacity-0"
                        : "-translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-8 w-6 h-6 bg-primary rounded-full border-4 border-background md:left-1/2 md:-ml-3 z-10 transition-all duration-500 ${
                      visibleExperiences.has(index) ? "scale-100" : "scale-75"
                    }`}
                  >
                    <div className="absolute inset-1 bg-background rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                      <CardHeader className="relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{exp.period}</span>
                            <Separator orientation="vertical" className="h-4" />
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <CardTitle className="flex items-center justify-between group-hover:text-primary transition-all duration-300">
                            {exp.title}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleExperience(index)}
                              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                              {expandedExperience === index ? (
                                <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                              ) : (
                                <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                              )}
                            </Button>
                          </CardTitle>
                          <CardDescription className="flex items-center space-x-2 mt-3 mb-3">
                            <Briefcase className="w-4 h-4" />
                            <span className="group-hover:text-primary transition-colors duration-300">
                              {exp.company}
                            </span>
                          </CardDescription>
                          <Badge variant="outline" className="text-xs hover:bg-primary/10 transition-all duration-300">
                            {exp.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="relative">
                        <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                          {exp.description}
                        </p>

                        {expandedExperience === index && (
                          <div className="space-y-4 animate-in slide-in-from-top-4 duration-500">
                            <div className="transform transition-all duration-300 hover:translate-x-1">
                              <h4 className="font-semibold text-sm text-primary">Responsibilities:</h4>
                              <ul className="list-none space-y-2 text-sm text-muted-foreground">
                                {exp.achievements.map((achievement, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start space-x-2 hover:text-foreground transition-colors duration-300"
                                    style={{
                                      animationDelay: `${i * 100}ms`,
                                    }}
                                  >
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => {projectRefs.current[index] = el}}
                className={`transform transition-all duration-700 ease-out ${
                  visibleProjects.has(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="pixelated object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex space-x-2">
                        {project.github && (
                          <Button
                            variant="secondary"
                            size="sm"
                            asChild
                            className="backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white border-white/30"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button
                            variant="secondary"
                            size="sm"
                            asChild
                            className="backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white border-white/30"
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center justify-between group-hover:text-primary transition-colors duration-300">
                      {project.title}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleProject(index)}
                        className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                      >
                        {expandedProject === index ? (
                          <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                        )}
                      </Button>
                    </CardTitle>
                    <CardDescription className="group-hover:text-foreground/80 transition-colors duration-300 mb-2">
                      {project.shortDesc}
                    </CardDescription>
                    <Badge
                      variant="outline"
                      className="text-xs hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {project.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                          style={{
                            animationDelay: `${i * 100}ms`,
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs hover:bg-primary/10 transition-all duration-300">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {expandedProject === index && (
                      <div className="space-y-4 animate-in slide-in-from-top-4 duration-500">
                        <div className="transform transition-all duration-300 hover:translate-x-1">
                          <h4 className="font-semibold mb-2 text-primary">Description</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>

                        <div className="transform transition-all duration-300 hover:translate-x-1">
                          <h4 className="font-semibold mb-2 text-primary">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                                style={{
                                  animationDelay: `${i * 50}ms`,
                                }}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="transform transition-all duration-300 hover:translate-x-1">
                          <h4 className="font-semibold mb-2 text-primary">Key Features</h4>
                          <ul className="list-none space-y-2 text-sm text-muted-foreground">
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-2 hover:text-foreground transition-colors duration-300"
                                style={{
                                  animationDelay: `${i * 100}ms`,
                                }}
                              >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-2 mt-6 md:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 bg-transparent"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 bg-transparent"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Education Section */}
        <section id="education" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-0.5"></div>

              {education.map((edu, index) => (
                <div
                  key={index}
                  ref={el => { educationRefs.current[index] = el }}
                  className={`relative flex items-center mb-12 transform transition-all duration-700 ease-out ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${
                    visibleEducation.has(index)
                      ? "translate-y-0 opacity-100"
                      : index % 2 === 0
                        ? "translate-x-8 opacity-0"
                        : "-translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-8 w-6 h-6 bg-primary rounded-full border-4 border-background md:left-1/2 md:-ml-3 z-10 transition-all duration-500 ${
                      visibleEducation.has(index) ? "scale-100" : "scale-75"
                    }`}
                  >
                    <div className="absolute inset-1 bg-background rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                      <CardHeader className="relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{edu.period}</span>
                            <Separator orientation="vertical" className="h-4" />
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-all duration-300">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="flex items-center space-x-2">
                            <Star className="w-4 h-4" />
                            <span className="group-hover:text-primary transition-colors duration-300">
                              {edu.institution}
                            </span>
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="relative">
                        <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                          {edu.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-primary">Key Achievements:</h4>
                          <ul className="list-none space-y-2 text-sm text-muted-foreground">
                            {edu.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-2 hover:text-foreground transition-colors duration-300"
                                style={{
                                  animationDelay: `${i * 100}ms`,
                                }}
                              >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  ref={(el) => {skillRefs.current[categoryIndex] = el}}
                  className={`transform transition-all duration-700 ease-out ${
                    visibleSkills.has(categoryIndex) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${categoryIndex * 200}ms`,
                  }}
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-muted-foreground">{category.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                          style={{
                            animationDelay: `${skillIndex * 100}ms`,
                            transform: visibleSkills.has(categoryIndex) ? "translateY(0)" : "translateY(20px)",
                            opacity: visibleSkills.has(categoryIndex) ? 1 : 0,
                            transition: `all 0.5s ease-out ${skillIndex * 100}ms`,
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; 2025 Muhammad Hafizha Dhiyaulhaq. Built with Next.js and shadcn/ui.</p>
        </div>
      </footer>
    </div>
  )
}
