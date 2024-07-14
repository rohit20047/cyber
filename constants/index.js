import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  webDev,
  java,
  dsa,
  machineLearning,
  uiUx,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Courses Offered",
    url: "#features",
  },
  {
    id: "1",
    title: "Certified In",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Services Offered",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "About Us",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "DSA COMPETITIONS",
    url: "#DSACompetitionsInfo",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [webDev, java, dsa, machineLearning, uiUx];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Web Development",
    text: "Gain practical work experience in web development through our internship program, where you'll dive into crafting and improving web-based systems. This opportunity presents real-world projects and engaging challenges, providing hands-on experience in dynamic fields like web and app development. Join our award-winning innovation team and embark on a journey towards success in a supportive and enriching environment.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light:true,
  },
  {
    id: "1",
    title: "Android Development",
    text: "Gain practical work experience in Android development through our internship program, where you'll dive into crafting and enhancing mobile applications. This opportunity presents real-world projects and engaging challenges, providing hands-on experience in dynamic fields like mobile app development and UI/UX design. Join our award-winning innovation team and embark on a journey towards success in a supportive and enriching environment.",
    
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    light: true,
  },
  {
    id: "2",
    title: "Data Science",
    text: "Get hands-on experience in data science with our internship program. You'll work on real-world projects, analyzing and interpreting complex datasets. This program offers engaging challenges in areas like machine learning, statistical analysis, and data visualization. Become a part of our award-winning innovation team and take the first step towards a successful career in a supportive and enriching environment.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Java Programming",
    text: "Embark on a journey to master Java programming with our internship program. You'll engage in real-world projects, developing and optimizing Java-based applications. This program offers practical challenges and hands-on experience in areas such as software development, object-oriented programming, and system architecture. Join our award-winning innovation team and lay the foundation for a successful career in a supportive and enriching environment.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "DSA(C++) Programming",
    text: "Advance your skills in Data Structures and Algorithms (DSA) with our C++ programming internship program. You'll tackle real-world projects, honing your expertise in algorithm design, data management, and problem-solving. This program provides practical challenges and hands-on experience in core areas like sorting, searching, and optimizing data structures. Join our award-winning innovation team and build a successful career in a supportive and enriching environment.",
    iconUrl: benefitIcon1,
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Python Programming",
    text: "Enhance your Python programming skills with our internship program. You'll work on real-world projects, focusing on areas like automation, web development, and data analysis. This program offers practical challenges and hands-on experience, helping you master Python's versatile capabilities. Join our award-winning innovation team and set the stage for a successful career in a supportive and enriching environment.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  }, {
    id: "6",
    title: "UI/UX Design",
    text: "Explore the world of UI/UX design with our internship program. You'll work on real-world projects, creating user-friendly and visually appealing interfaces. This program offers practical challenges and hands-on experience in areas like user research, wireframing, prototyping, and usability testing. Join our award-winning innovation team and pave the way for a successful career in a supportive and enriching environment.",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    light: true,
  },
  {
    id: "7",
    title: "Artificial intelligence",
    text: "Dive into the field of artificial intelligence with our internship program. You'll engage in real-world projects, developing and applying AI models and algorithms. This program offers practical challenges and hands-on experience in areas like machine learning, natural language processing, and computer vision. Join our award-winning innovation team and embark on a journey towards a successful career in a supportive and enriching environment.",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    light: true,
  },
  {
    id: "8",
    title: "Machine learning",
    text: "Immerse yourself in the world of machine learning with our internship program. You'll work on real-world projects, building and refining predictive models and algorithms. This program offers practical challenges and hands-on experience in areas like supervised and unsupervised learning, neural networks, and data analysis. Join our award-winning innovation team and take the first step towards a successful career in a supportive and enriching environment.",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    backgroundUrl: "./src/assets/benefits/card-3.svg",

  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
