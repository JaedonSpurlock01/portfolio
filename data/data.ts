export const lastUpdated = "Janurary 9, 2025";

export const socials = {
  email: "jaedonaspurlock@outlook.com",
  linkedin: "https://www.linkedin.com/in/jaedon-spurlock/",
  github: "https://github.com/JaedonSpurlock01",
  instagram: "https://www.instagram.com/jaedonspurlock",
  youtube: "https://www.youtube.com/channel/UC_kzjV049b2XQlKe306re5g",
} as const;

export const info = {
  name: "Jaedon Spurlock",
  role: "Software Engineer",
  resume: "/resume.pdf",
  location: "San Diego Metropolitan Area",
  about:
    "I'm a software engineer with experience in web development and embedded systems. I'm interested in full-stack web development, infrastructure, devops, and embedded systems.",
} as const;

export const work = [
  {
    company: "Lockheed Martin",
    position: "Incoming Software Engineer Intern",
    location: "Orlando, Florida",
    date: "May 2025",
    imageSrc: "/welfie.png",
    href: "https://www.linkedin.com/company/welfie/",
    description:
      "Incoming intern for the Rotary-Mission-Systems (RMS) team in Orlando, Florida. I interviewed for this position in-person at the SHPE convention center.",
  },
  {
    company: "Welfie",
    position: "Software Engineer Intern",
    location: "San Diego, California",
    date: "May 2024 - Aug 2024",
    imageSrc: "/welfie.png",
    href: "https://www.linkedin.com/company/welfie/",
    description:
      "Developed a cross-platform mental health app with React Native, improving workflows by 30% with documentation and agile methods. Led a team to create a Python and Selenium-based testing framework, boosting test coverage by 70%. Deployed CI/CD pipelines using Google Cloud, Docker, and Linux, while optimizing website production code.",
  },
  {
    company: "CodeDay",
    position: "Open Source Contributor",
    location: "Remote",
    date: "Oct 2023 - Nov 2023",
    imageSrc: "",
    href: "",
    description:
      "Improved reliability of an open-source project by implementing a test case with JavaScript and Mocha. Led a team of 3 to verify conversions from kWh to BTU energy units, resulting in increased confidence in data integrity.",
  },
] as const;

export const leadership = [
  {
    club: "Google Developer Student Club",
    position: "President",
    location: "CSUSM",
    date: "May 2024 - Present",
    description:
      "Building new infrastructure for long-term expansion and establishing fundamental technical skills for software engineers at CSUSM. I’m covering new documentation, testing frameworks, full-stack development, and devops. We focus on contributions to large, open-source projects to help push our students into the industry level.",
  },
  {
    club: "SKALE",
    position: "Co-founder",
    location: "CSUSM",
    date: "Aug 2024 - Present",
    description:
      "Helped develop and initiate SKALE, a project-based infrastructure program to revitalize student engagement and innovation through multi-disciplinary engineering projects at CSUSM. We raised over $100k+ in organization funding and helped over 90% of our students receive job offers in the industry. In addition, we secured first-time, new engineering spaces on campus, establishing a place for students to grow and connect.",
  },
  {
    club: "Robotics",
    position: "Technical Lead",
    location: "CSUSM",
    date: "May 2024 - Present",
    description:
      "Help lead multiple robotics projects in collaboration with SKALE. Right now the three main projects are a remote-controlled car, robotic arm, and micromouse. These small projects are used to help introduce new students to robotics and software development.",
  },
  {
    club: "Association for Computer Machinery",
    position: "Technical Lead",
    location: "CSUSM",
    date: "Jan 2025 - Present",
    description:
      "Participate in student-led events such as hackathons and industry panels.",
  },
  {
    club: "Leetcode Club",
    position: "Technical Lead",
    location: "CSUSM",
    date: "Aug 2024 - Present",
    description:
      "Participate in student-led events such as hackathons and industry panels.",
  },
] as const;

export const education = [
  {
    school: "California State University, San Marcos",
    degree: "Bachelors of Science in Software Engineering",
    gpa: "3.95/4.00",
    date: "Aug 2022 - Present",
    imageSrc: "/education/csusm.png",
    href: "https://www.csusm.edu/",
    desc: "Courses: Data Structures & Algorithms, Software Design & Development, Database Management Systems, Calculus I-II, Real-Time Concepts For Embedded Systems, Physics | GPA: 3.95/4.00",
  },
] as const;

export const skills = {
  languages: [
    "Python",
    "C++",
    "TypeScript",
    "CSS",
    "HTML",
    "JSON",
    "Yaml",
    "GoLang",
  ],
  frameworks: ["React", "React Native", "NodeJS", "ROS2", "Express", "NextJS"],
  tools: [
    "AWS",
    "Google Cloud",
    "MongoDB",
    "VSCode",
    "Docker",
    "Git",
    "GitHub",
    "Postman",
    "PostgreSQL",
  ],
} as const;

export const projects = [
  {
    title: "Routify",
    description:
      "City pathfinding visualizer website used to understand pathfinding algorithms",
    websiteUrl: "https://www.routify.cc",
    githubUrl: "https://www.github.com/jaedonspurlock01/routify",
    imageSrc: "/projects/routify.gif",
    date: "Jan 2024 - Mar 2024",
    tags: [
      "JavaScript",
      "ReactJS",
      "Nominatim API",
      "Overpass API",
      "Amazon S3",
    ],
    features: [
      "Search any city in the world",
      "Choose between DFS, BFS, A*, and Dijkstra algorithms",
      "Customize the color scheme",
      "Change animation speed realtime",
    ],
  },
  {
    title: "GDSC Website",
    description:
      "Student organization website for GDSC to learn and develop software engineering. This project was built with an emphasis on high quality software, including industry-standard design patterns such as the SSOT, Singleton, and MVC patterns. In addition, there are CI/CD pipelines built into the frontend and backend services.",
    websiteUrl: "https://gdsc-csusm.com/",
    githubUrl: "https://github.com/csusmGDSC/csusmgdsc-web",
    imageSrc: "/projects/gdscweb.png",
    date: "Jun 2024 - Present",
    tags: ["TypeScript", "React", "Vite", "Golang", "PostgreSQL"],
    features: [
      "Complete self-built secure authentication package",
      "CRUD operations with users, events, and projects",
      "Role-based authorization for user management",
      "Admin dashboard for event management",
      "Event reminders with email and push notifications",
    ],
    archived: false,
  },
  {
    title: "Melo",
    description:
      "Music app inspired by Spotify and Youtube Music. Puts emphasis on scalability and performance with playlist sharing.",
    websiteUrl: "https://melosong.netlify.app/",
    githubUrl: "https://github.com/cis444-team-1",
    imageSrc: "/projects/melo.png",
    date: "Mar 2024 - Present",
    tags: [
      "TypeScript",
      "ReactJS",
      "Vite",
      "Amazon S3",
      "Amazon Cloudfront",
      "PostgreSQL",
    ],
    features: [
      "Search for music, playlists, or albums",
      "Save music into playlists",
      "Play music with shuffle and repeat modes",
      "Share playlists to other users",
    ],
    archived: false,
  },
  {
    title: "Dreamlog",
    description:
      "Dream journal mobile application with local-first architecture and in-depth sleep and dream recall analysis.",
    websiteUrl: "",
    githubUrl: "https://github.com/jaedonspurlock01/dreamlog",
    imageSrc: "/projects/dreamlog.webp",
    date: "Aug 2024 - Sep 2024",
    tags: ["React Native", "TypeScript", "Echo", "Supabase"],
    features: [""],
    archived: true,
  },
  // {
  //   title: "Subscription Tracker App",
  //   description:
  //     "Subscription tracker app that tracks and notifies users of their subscriptions",
  //   websiteUrl: "",
  //   githubUrl: "",
  //   imageSrc: "/projects/melo.png",
  //   date: "Mar 2024 - Present",
  //   tags: [
  //     "TypeScript",
  //     "ReactJS",
  //     "Vite",
  //     "Amazon S3",
  //     "Amazon Cloudfront",
  //     "PostgreSQL",
  //   ],
  //   features: ["Search for music, playlists, or albums"],
  //   archived: true,
  // },
  {
    title: "Reside",
    description:
      "Real-estate app concept for students to find the cheapest student housing near campus.",
    websiteUrl: "",
    githubUrl: "",
    imageSrc: "/projects/reside.webp",
    date: "Mar 2024 - Present",
    tags: [
      "TypeScript",
      "ReactJS",
      "Vite",
      "Amazon S3",
      "Amazon Cloudfront",
      "PostgreSQL",
    ],
    features: ["Search for music, playlists, or albums"],
    archived: true,
  },
  {
    title: "University Rover",
    description:
      "Assembly and software development of the unversity rover platform",
    websiteUrl: null,
    githubUrl: "",
    imageSrc: "/projects/rover.jpg",
    date: "Oct 2024 - Present",
    tags: [
      "ROS2",
      "Python",
      "Raspberry PI",
      "Jetson Nano",
      "Autonomous Systems",
    ],
    features: [
      "Autonomous navigation",
      "Remote control through ssh terminal",
      "Navigate across different terrains",
    ],
    archived: true,
  },
  {
    title: "Robotic Car Platform",
    description:
      "Software development of remote-controlled 4-wheeled robotic car",
    websiteUrl: null,
    githubUrl: "https://github.com/JaedonSpurlock01/robotcar",
    imageSrc: "/projects/robotcar.webp",
    date: "April 2024 - May 2024",
    tags: ["C++", "ROS", "Raspberry PI", "SDL API"],
    features: ["Bluetooth control with controller"],
    archived: false,
  },
  {
    title: "Mapping Drone",
    description:
      "Software development of mapping drone that maps out the CSUSM campus, which is used as a simulation model for the autonomous golf cart.",
    websiteUrl: null,
    githubUrl: null,
    imageSrc: "/placeholder.svg",
    date: "April 2025 - Present",
    tags: ["C++", "ROS"],
    features: [],
    archived: false,
  },
  {
    title: "Autonomous Golf Cart",
    description:
      "Software development of autonomous golf cart that navigates the CSUSM campus and picks up and drops off students.",
    websiteUrl: null,
    githubUrl: null,
    imageSrc: "/placeholder.svg",
    date: "April 2025 - Present",
    tags: ["ROS2", "ZEDX", "Autonomous Navigation", "Jetson Orin Nano"],
    features: [],
    archived: false,
  },
  {
    title: "Micromouse",
    description:
      "Software development of maze solver robot. Used to introduce students to robotics and software development.",
    websiteUrl: null,
    githubUrl: null,
    imageSrc: "/placeholder.svg",
    date: "April 2025 - Present",
    tags: ["C++", "ROS", "Raspberry PI", "SDL API"],
    features: [],
    archived: false,
  },
  {
    title: "Engineering Space",
    description:
      "Contributed to the development of a new first-time engineering space on campus for students at CSUSM to grow, innovate, and build. This space set the precedent for student-led driven passion and innovation in the university that was not initiated by faculty and administrators.",
    websiteUrl: null,
    githubUrl: null,
    imageSrc: "/projects/space.jpg",
    date: "Janurary 2025 - Present",
    tags: ["3D Printing", "Soldering"],
    features: [
      "Bambu 3D Printing Lab",
      "Collaborative Workspaces",
      "Robotics Tools & Workshops",
    ],
    archived: false,
  },
];

export const organizations = [
  {
    title: "Project-Based Infrastructure",
    description:
      "Secured $100k+ in funding across different organizations to create and sustain university-wide infrastructure",
    imageSrc: "/clubs/infrastructure.png",
  },
  {
    title: "Robotics Club",
    description:
      "Increased membership by 150% by engaging over 15+ students in ROS2 related projects",
    imageSrc: "/clubs/robotics.png",
  },
  {
    title: "Google Developer Student Club",
    description:
      "Onboarded 20+ new students by facilitating hands-on technical projects and skills such as ReactJS, TypeScript, and Python",
    imageSrc: "/clubs/gdsc.png",
  },
  {
    title: "Leetweb Club",
    description:
      "Organized weekly leetcode coding problems for students to improve their interviewing skills and problem-solving abilities",
    imageSrc: "/clubs/leetweb.PNG",
  },
  {
    title: "Society of Hispanic Professional Engineers Club",
    description:
      "Supported and participated in SHPE-related events, including the SHPE National Convention",
    imageSrc: "/clubs/shpe.png",
  },
  // {
  //   title: "Engineering Spaces",
  //   description:
  //     "Supported the acquirement of new engineering spaces on campus, providing a conducive environment for engineers to learn and grow",
  //   imageSrc: "/projects/routify.gif",
  // },
];

export const hiking = [
  {
    name: "Raptor Ridge via Mule Hill Trail",
    day: "25",
    month: "JAN",
    description: "A nice flat, half marathon training hike near lake hodges.",
    difficulty: "Medium",
    imageSrc: "/hiking/01-25-25.jpg",
    distance: "10.57 mi",
    elevation: "561 ft",
    duration: "1h 50m",
    link: "https://www.alltrails.com/trail/us/california/raptor-ridge-via-mule-hill-trail",
  },
  {
    name: "Afternoon hike at Fry Koegel Trail",
    day: "1",
    month: "MAR",
    description:
      "A challenging hike around Potato Chip rock mountain in Escondido, CA.",
    difficulty: "Hard",
    imageSrc: "/hiking/03-1-25.jpg",
    distance: "13.40 mi",
    elevation: "2,654 ft",
    duration: "3h 30m",
    link: "https://www.alltrails.com/trail/us/california/raptor-ridge-via-mule-hill-trail",
  },
];
