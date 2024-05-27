import blogApiImg from "../assets/project-screenshots/blog-api.png";
import inventoryApp from "../assets/project-screenshots/inventory-application.jpg";
import resumeBuilder from "../assets/project-screenshots/resume-builder.png";
import todoList from "../assets/project-screenshots/todo-list.png";
import extractionGame from "../assets/project-screenshots/extraction-game.gif";

const projects = [
  {
    title: "Blog API",
    description:
      "The Blog API allows users to create, read, update, and delete blog posts and comments. It includes user authentication and authorization features to ensure secure access to the blog functionalities, as well as CORS policies to limit access to certain client URLs.",
    features: [
      "User authentication and authorization with PassportJS and JWTs w/ refresh tokens",
      "Secure password storage with bcryptJS",
      "Create, read, update, and delete endpoints for blog posts, users, and comments",
      "Limit access to certain client URLs with CORS policies",
    ],
    tech: ["Javascript", "NodeJS", "Express", "MongoDB"],
    img: blogApiImg,
    repo_link: "https://github.com/sourdoughbredd/blog-api",
    live_link: "https://blog-client-bb.netlify.app",
    private_repo: false,
  },
  {
    title: "Inventory Application",
    description:
      "The Inventory Application is designed to help beer sellers manage their inventory of different beer products. It provides features to add, update, delete, and view details of breweries, beer types, beers, and individual beer SKUs. The application is built using Node.js and Express, with a MongoDB database for storage.",
    features: [
      "CRUD operations for breweries, beer types, beers, and beer SKUs with data interconnectivity protections",
      "Uses Country State City API to constrain location choices when creating new breweries.",
      "Admin password required to submit CRUD operations",
      "MVC (Model-View-Controller) architecture for efficient separation of concerns and maintainable code structure",
      "Server-side form sanitization and validation with express-validator",
    ],
    tech: ["Javascript", "NodeJS", "Express", "Pug", "MongoDB"],
    img: inventoryApp,
    repo_link: "https://github.com/sourdoughbredd/inventory-application",
    live_link: "https://inventory-application-bb.fly.dev/",
    private_repo: false,
  },
  {
    title: "Resumé Builder",
    description:
      "The Resume Builder application allows users to create and customize their resumes through a user-friendly interface. This project showcases advanced React techniques, state management, form handling, and integration with Vite for a seamless development experience.",
    features: [
      "Dynamic Form Handling: Implemented using React's state and effect hooks to manage form data and real-time updates using prop hoisting/drilling (before I learned about Context API).",
      "Real-Time Preview: Utilized React's component lifecycle to provide instant feedback on resume changes.",
      "Component-Based Architecture: Designed the application with reusable React components for maintainability and scalability.",
      "Styling with CSS Modules: Ensured modular and scoped styling using CSS modules.",
      "Build and Bundling with Vite: Leveraged Vite for fast development and optimized production builds.",
    ],
    tech: ["HTML/CSS/JS", "React", "CSS Modules"],
    img: resumeBuilder,
    repo_link: "https://github.com/sourdoughbredd/resume-builder",
    live_link: "https://resume-builder-bb.netlify.app/",
    private_repo: false,
  },
  {
    title: "To-Do List",
    description:
      "The To-Do List application allows users to manage their tasks efficiently. Users can add, edit, delete, and organize tasks into different projects. The application is built completely with vanilla HTML/CSS/JS and utilizes Webpack for module bundling.",
    features: [
      "Add Tasks: Users can add new tasks with a description, importance, and due date.",
      "Edit Tasks: Tasks can be edited to update their details.",
      "Delete Tasks: Users can delete tasks that are no longer needed.",
      "Project Management: Tasks can be organized into different projects for better management.",
    ],
    tech: ["HTML", "CSS", "Javascript"],
    img: todoList,
    repo_link: "https://github.com/sourdoughbredd/todo-list",
    live_link: "https://sourdoughbredd.github.io/todo-list/",
    private_repo: false,
  },
  {
    title: "Extraction Game",
    description:
      "A game where the player must extract from the map with the valuable loot. The game features fully randomized map generation, saving/loading games, and vision constriction to make the loot harder to find.",
    features: [
      "Random map generation using the binary space partitioning (BSP) algorithm. Replay the same map by entering the same seed.",
      "Save game state and resume during future session.",
      "Vision constricted to a small radius to make navigation harder.",
      "Ability to expand vision radius for a few seconds (once per game).",
    ],
    tech: ["Java"],
    img: extractionGame,
    repo_link: "",
    live_link: "",
    private_repo: true,
  },
];

export default projects;
