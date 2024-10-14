/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import {CgCPlusPlus} from "react-icons/cg";
import {TbLetterC, TbBrandRedux} from "react-icons/tb";
import {SiJquery, SiHaskell} from "react-icons/si";
import {GiCamel} from "react-icons/gi";

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amin Babar",
  title: "Hi all, I'm Amin",
  // subTitle: emoji(
  //   "A skilled Full Stack Software Engineer ⚡ with hands-on experience in building dynamic web applications using <strong>JavaScript</strong>, React, Python, Rails, and AWS. Excited to tackle new challenges and craft efficient, scalable solutions with modern technologies."
  // ),
  resumeLink:
    "https://drive.google.com/file/d/1XN7DeMYANvdXA9S3gV7b2QI1omGYOWVP/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aminbabar",
  linkedin: "https://www.linkedin.com/in/arbabar/",
  gmail: "amin.babar1@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skills",
  subTitle:
    "Mastering a wide array of languages, technologies, and frameworks – I build robust, scalable web applications and solve complex problems with a diverse set of modern tools and platforms.",
  skills: [
    emoji(
      "Languages & Technologies JavaScript(ES6 +), Python, Ruby, C, C++, React.js, Redux, Node.js, Rails, Express.js, MongoDB, PostgreSQL, AWS, GIT, REST APIs, HTML5, CSS3, jQuery, D3.js"
    )
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "redux",
      reactIcon: <TbBrandRedux />
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "rails",
      fontAwesomeClassname: "fas fa-gem"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "jquery",
      reactIcon: <SiJquery />
    },
    {
      skillName: "d3.js",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "ruby",
      fontAwesomeClassname: "fas fa-gem"
    },
    {
      skillName: "c",
      reactIcon: <TbLetterC />
    },
    {
      skillName: "c++",
      reactIcon: <CgCPlusPlus />
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "haskell",
      reactIcon: <SiHaskell />
    },
    {
      skillName: "perl",
      reactIcon: <GiCamel />
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hamilton College",
      logo: require("./assets/images/hamilton-logo.png"),
      subHeader: "Bachelor's in Computer Science",
      duration: "August 2016 - May 2020"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Software Engineering Instructor",
      company: "App Academy",
      companylogo: require("./assets/images/AppAcademyLogo.png"),
      date: "Nov 2021 – June 2024",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Trained 300+ developers in modern web technologies, including React, Redux, JavaScript, Rails, Express.js, Node.js, MongoDB, AWS, Canvas, and D3, while also developing applications using these technologies.",
        "Contributed to the development of in-house software, enabling efficient day-to-day task management for peers at App Academy.",
        "Trained and managed a team of 8 instructors.",
        "Conducted SQL-based statistical analysis to assess and optimize instructor and student performance metrics.",
        "Hired new instructors through behavioral and technical interviews ensuring right fit for the team.",
        "Used Salesforce to generate and manage detailed performance reports.",
        "Led and managed student projects in MERN, Full Stack, and JavaScript, achieving over 70% completion rates.",
        "Lectured on technical content 3 times a week to other Software Engineers",
        "Collaborated with cross-functional teams to ensure successful project delivery"
      ]
    },
    {
      role: "Computer Science and Robotics Department Lead",
      company: "Ranney School",
      companylogo: require("./assets/images/RanneySchoolLogo.png"),
      date: "July 2020 – Nov 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Established the school’s first Computer Science Department and designed a scalable curriculum.",
        "Developed and taught courses in C++, Python, HTML, CSS, and Scratch for middle and upper school students.",
        "Supervised an assistant robotics coach and mentored them in technical project management.",
        "Planned and managed VEX robotics competitions, with teams qualifying for state championship."
      ]
    },
    {
      role: "Research Assistant",
      company: "Tufts",
      companylogo: require("./assets/images/TuftsLogo.jpg"),
      date: "Summer 2019",
      descBullets: [
        "Co-authored a paper titled “Visualization and Workload with Implicit fNIRS-based BCI” which was accepted by the NeuroErgonomics Conference 2024.",
        "Improved and optimized the real-time measurements from the FNIRS device by using machine learning, pandas and NumPy libraries to capture the brain state in different user - oriented tasks.",
        "Created the front-end interface using Tkinter for various tasks to achieve different brain states.",
        "Designed and built a device to affix multiple data probes to test subjects to obtain readings from the prefrontal cortex.",
        "Recruited and run an experiment on 20 people while ensuring minimal changes between different experiments."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Here are some of the projects that I have been working on",
  projects: [
    {
      image: require("./assets/images/adventure_book_logo.png"),
      projectName: "AdventureBook",
      projectDesc:
        "A full-stack social media clone built with React and Rails, featuring user authentication, friend connections, and real-time interactions with posts, comments, and likes. Includes a photo upload system using AWS S3 for secure image storage, with optimized backend responses via Jbuilder for efficient API communication.",
      footerLink: [
        {
          name: "Live Site",
          url: "https://adventure-book-56226fae6061.herokuapp.com/#/"
        },
        {
          name: "Github",
          url: "https://github.com/aminbabar/AdventureBook"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/othello_logo.jpg"),
      projectName: "AI Othello Player with Algorithmic Optimization (Python)",
      projectDesc:
        "Developed an Othello AI using Minimax, Alpha-Beta Pruning, and Iterative Deepening Search (IDS), achieving a 96% win rate. Optimized algorithms for faster decision-making and designed custom heuristics for strategic play, reducing runtime by 70%.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/aminbabar/AI_Othello_Player"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(315) 731-0796",
  email_address: "amin.babar1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
