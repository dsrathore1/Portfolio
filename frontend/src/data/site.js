export const PROFILE = {
  name: "Digpal Singh Rathore",
  shortName: "Digpal",
  initials: "DSR",
  role: "MLOps Enthusiast · Security-focused Engineer",
  headline: "Building intelligent systems, one deployment at a time.",
  summary:
    "M.Tech student in Information Security & Privacy at SVNIT Surat. Exploring MLOps, machine learning, cloud infrastructure and secure software engineering.",
  university: "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat",
  degree: "Master of Technology — Information Security and Privacy",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "dsrathorebsw1234@gmail.com",
  github: "https://github.com/dsrathore1",
  linkedin: "https://www.linkedin.com/in/dsrathore22/",
  hashnode: "https://hashnode.com/@dsrathore1",
};

export const FEATURED_REPOSITORIES = [
  "CipherVault",
  "SAGE",
  "SVMForge",
  "PulsarGuard",
  "Federated Learning IDS",
];

export const PROJECTS = [
  {
    slug: "ciphervault",
    repo: "CipherVault",
    title: "CipherVault",
    category: "Security",
    summary: "A cryptography-focused application exploring secure hashing and public-key cryptographic workflows.",
    description: "CipherVault is a security-focused application project. Its portfolio entry highlights the cryptographic workflows and application engineering scope without claiming features beyond the repository.",
    highlights: ["SHA hashing", "RSA and ECC learning scope", "Next.js + FastAPI"],
    stack: ["Next.js", "JavaScript", "FastAPI", "Cryptography"],
  },
  {
    slug: "sage",
    repo: "SAGE",
    title: "SAGE",
    category: "MLOps",
    summary: "Predictive maintenance using the AI4I dataset, developed as an end-to-end MLOps learning project.",
    description: "SAGE explores a practical machine-learning lifecycle for predictive maintenance, including data preparation, model experimentation and reproducible development workflows.",
    highlights: ["AI4I predictive maintenance dataset", "Experiment tracking", "Reproducible ML workflow"],
    stack: ["Python", "Scikit-learn", "MLflow", "Docker"],
  },
  {
    slug: "svmforge",
    repo: "SVMForge",
    title: "SVMForge",
    category: "Machine Learning",
    summary: "An ML application focused on model development, serving and operational practices.",
    description: "SVMForge is an applied machine-learning project designed to connect model development with a usable application and operational workflow.",
    highlights: ["SVM model workflow", "FastAPI", "Experiment tracking"],
    stack: ["Python", "FastAPI", "Next.js", "MLflow"],
  },
  {
    slug: "pulsarguard",
    repo: "PulsarGuard",
    title: "PulsarGuard",
    category: "DevSecOps",
    summary: "A security-oriented engineering project exploring DevSecOps, cloud, CI/CD and observability.",
    description: "PulsarGuard brings together security engineering and modern delivery practices, with an emphasis on CI/CD, cloud infrastructure and observability.",
    highlights: ["Security-first development", "CI/CD", "Observability"],
    stack: ["Python", "Docker", "AWS", "CI/CD"],
  },
  {
    slug: "federated-learning-ids",
    repo: "Federated Learning IDS",
    title: "Federated Learning IDS",
    category: "AI + Security",
    summary: "A privacy-preserving intrusion-detection research project combining federated learning with lightweight encryption concepts.",
    description: "This academic project investigates federated learning for intrusion detection and privacy-aware model collaboration, using a simulated SDN context.",
    highlights: ["Flower federated learning", "Intrusion detection", "Privacy-preserving design"],
    stack: ["Python", "Flower", "TensorFlow", "CICIDS2017"],
  },
];

export const SKILLS = [
  { group: "Machine Learning & MLOps", items: ["Python", "Scikit-learn", "TensorFlow", "MLflow", "Model serving", "Experiment tracking"] },
  { group: "Security & Privacy", items: ["Information Security", "Cryptography", "Federated Learning", "Intrusion Detection", "Privacy-preserving systems"] },
  { group: "Cloud & DevOps", items: ["Docker", "GitHub Actions", "CI/CD", "AWS learning path", "Prometheus", "Grafana"] },
  { group: "Development", items: ["JavaScript", "Next.js", "FastAPI", "Git", "REST APIs", "SQL fundamentals"] },
];

export const CODING_PLATFORMS = [
  { name: "LeetCode", url: "https://leetcode.com/u/dsrathore01/", focus: "Interview-style problem solving" },
  { name: "Codeforces", url: "https://codeforces.com/profile/knightxops", focus: "Competitive programming and algorithms" },
  { name: "AtCoder", url: "https://atcoder.jp/users/dsrathore1", focus: "Algorithmic contests and implementation" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/dsrathore1", focus: "DSA practice and concept revision" },
  { name: "CodeChef", url: "https://www.codechef.com/users/digpalsingh_13", focus: "Competitive programming practice" },
];

export const DSA_TOPICS = [
  "Arrays & Strings", "Hashing", "Binary Search", "Recursion", "Backtracking",
  "Trees", "Graphs", "Greedy", "Dynamic Programming", "Heaps", "Tries",
];

export const GOALS = [
  { title: "AWS Solutions Architect – Associate", type: "Certification target", status: "Planned" },
  { title: "AWS Machine Learning", type: "Certification target", status: "Planned" },
  { title: "Google Summer of Code", type: "Open-source contribution goal", status: "Target" },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/blogs", label: "Blogs" },
  { href: "/coding", label: "Coding" },
  { href: "/contact", label: "Contact" },
];
