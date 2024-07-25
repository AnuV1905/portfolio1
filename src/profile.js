// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Anushka Verma",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About";
const about = {
  paragraph:
    "I am an undergraduate student entering my third year at the National Institute of Technology Patna, with a passion for software development, website building, and UI/UX design. I am focused on enhancing my problem-solving skills and algorithms in C++ and have actively contributed to a significant web development project, while also creating sample UI projects that emphasize user-centric design principles.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "C++",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    //svg: "public/c 1.svg",
    faClass: "fab fa-cuttlefish",
  },{
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  }, 
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Firebase",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "Azure",
    // svg: '',
    faClass: "fab fa-accusoft",
  },
  {/*{
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  }*/},
  {/*{
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  }*/},
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "SecureShe Project",
    skills: ["HTML, CSS, JS, Firebase"],
    url: "https://github.com/AnuV1905/Mavericks---SecureShe",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project2",
    name: "SecureShe UI",
    skills: ["Figma, Adobe Illustrator"],
    url: "https://www.figma.com/design/IvEbkYpMMJMDfGFkMJW8rq/Mavericks-ui?node-id=0-1&t=DXpsPBtAOPqwF0T3-1",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Java Portfolio",
    skills: ["HTML, JS, Node"],
    url: "https://github.com/AnuV1905/Javaportfolio",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project3",
    name: "Aspects UI & UX",
    skills: ["Figma, Adobe Illustrator"],
    url: "https://www.figma.com/design/iSJ1losGJvBP9zXbJ3hOOf/ASPECTS?t=r0ZsZURfNwV3uO5w-1",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project4",
    name: "DigWells UI",
    skills: ["Figma"],
    url: "https://www.figma.com/design/YLtVjfLUmxBp40397QnBff/WEB?node-id=0-1&t=IOmV9gnfGoZlMpIx-1",
  },
  {/*{
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Project 5",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Project 6",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/kaustubhai",
  },*/}
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Docs";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Resume",
    url: "https://drive.google.com/file/d/1gV9e1-rqXcV9MLGjBK48wvG0yoiPSSFC/view?usp=drive_link",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc2",
    name: "Web development Workshop - Microsoft Learn",
    url: "https://drive.google.com/file/d/12yvZdruGdyDUlimvzVNCY5IlwwFSaHBv/view?usp=drive_link",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc3",
    name: "CS50x Puzzle Day 2024",
    url: "https://drive.google.com/file/d/138b6WVxCibxko_MDLQCgCQ1Fg9dPU7Vf/view?usp=drive_link",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc4",
    name: "Postman API Day",
    url: "https://certificate.givemycertificate.com/c/1a4b30d7-488e-455f-80aa-cda8677a8e04",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc5",
    name: "CS50x Puzzle Day 2023",
    url: "https://drive.google.com/file/d/134D2JdQt0E0hhNcu7hFcfsmtmf1SF1eF/view?usp=drive_link",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
