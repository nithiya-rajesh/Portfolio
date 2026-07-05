// Single source of truth for all portfolio content.
// Edit values here — every section reads from this file.

export const profile = {
  name: "Nithiya Rajendran",
  handle: "nithiya-rajesh",
  roles: ["Security Researcher", "Penetration Tester", "AI in Offensive Security"],
  tagline:
    "I break systems to make them stronger — blending traditional VAPT methodology with AI-driven offensive techniques.",
  location: "India",
  availability: "Open to security roles & research collaborations",
};

export const links = {
  github: "https://github.com/nithiya-rajesh",
  linkedin: "https://www.linkedin.com/in/nithya-rajendran/",
  medium: "https://medium.com/@nithiya.rajesh1998",
  devto: "https://dev.to/nithiyarajesh",
  email: "nithiya.rajesh1998@gmail.com",
};

export const about = [
  "I'm a security professional focused on Vulnerability Assessment and Penetration Testing (VAPT) across web architectures, API ecosystems, and network infrastructure.",
  "My current research sits at the intersection of AI and offensive security — LLM vulnerabilities, prompt injection, and using machine learning to assist exploit generation.",
  "I'm also expanding my AppSec practice into AWS and Azure cloud environments, and I write up what I learn along the way.",
];

// team: "red" = offense, "blue" = defense, "neutral" = tooling/enabling
export const skills = [
  {
    group: "Web & API Security",
    team: "red",
    items: ["Burp Suite", "OWASP ZAP", "Postman", "GraphQL"],
  },
  {
    group: "AI & Offensive ML",
    team: "red",
    items: ["Python", "TensorFlow", "LangChain", "OpenAI API"],
  },
  {
    group: "Network & Infrastructure",
    team: "red",
    items: ["Nmap", "Metasploit", "Wireshark", "Active Directory"],
  },
  {
    group: "Cloud & DevSecOps",
    team: "blue",
    items: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
];

export const projects = [
  {
    name: "Full-Scale-VAPT",
    domain: "VAPT",
    team: "red",
    description:
      "Real-time pentesting project covering full-stack web and network environments end to end.",
    repo: "https://github.com/nithiya-rajesh/Full-Scale-VAPT",
    tags: ["Web", "Network", "Reporting"],
  },
  {
    name: "AI-Red-Teaming",
    domain: "AI / ML",
    team: "red",
    description:
      "Research and proofs-of-concept for LLM prompt injection and ML model bypass techniques.",
    repo: "https://github.com/nithiya-rajesh/AI-Red-Teaming",
    tags: ["LLM", "Prompt Injection", "PoC"],
  },
  {
    name: "Pentesting-Labs",
    domain: "Practice",
    team: "red",
    description:
      "Curated collection of solved challenges from TryHackMe, Hack The Box, and custom Docker labs.",
    repo: "https://github.com/nithiya-rajesh/Pentesting-Labs",
    tags: ["HTB", "THM", "Docker"],
  },
  {
    name: "SecAuto-Scripts",
    domain: "Automation",
    team: "neutral",
    description:
      "Python and Bash scripts for automating reconnaissance and vulnerability scanning workflows.",
    repo: "https://github.com/nithiya-rajesh/SecAuto-Scripts",
    tags: ["Python", "Bash", "Recon"],
  },
  {
    name: "Cloud-Security-Hardening",
    domain: "Cloud",
    team: "blue",
    description:
      'Terraform and CloudFormation for building "secure by default" cloud infrastructure.',
    repo: "https://github.com/nithiya-rajesh/Cloud-Security-Hardening",
    tags: ["Terraform", "AWS", "IaC"],
  },
  {
    name: "API-Security-Suite",
    domain: "API",
    team: "red",
    description:
      "Specialized tools and methodology for testing REST and GraphQL endpoints.",
    repo: "https://github.com/nithiya-rajesh/API-Security-Suite",
    tags: ["REST", "GraphQL", "Tooling"],
  },
];

export const certifications = [
  { name: "CompTIA Security+", status: "Certified", issuer: "CompTIA" },
  { name: "Certified in Cybersecurity (CC)", status: "Certified", issuer: "ISC2" },
  { name: "CCNA", status: "Certified", issuer: "Cisco" },
  { name: "CEH", status: "In Progress", issuer: "EC-Council" },
];

export const stats = [
  { value: "VAPT", label: "Core discipline" },
  { value: "6+", label: "Security projects" },
  { value: "3", label: "Certifications held" },
  { value: "AI", label: "Red-team research" },
];
