import blogApiImg from "../assets/project-screenshots/blog-api2.png";
import inventoryApp from "../assets/project-screenshots/inventory-application.jpg";
import resumeBuilder from "../assets/project-screenshots/resume-builder.png";
import todoList from "../assets/project-screenshots/todo-list.png";
import extractionGame from "../assets/project-screenshots/extraction-game.gif";
import shoppingCart from "../assets/project-screenshots/shopping-cart.png";
import weatherApp from "../assets/project-screenshots/weather-app.png";
import battleship from "../assets/project-screenshots/battleship.png";
import signupForm from "../assets/project-screenshots/sign-up-form.png";
import bearMaps from "../assets/project-screenshots/bear-maps.png";
import laundryMate from "../assets/project-screenshots/laundry-mate.jpg";
import regenDoor from "../assets/project-screenshots/regen-door.jpg";

const projects = [
  {
    name: "blog-api",
    title: "Blog API",
    description_short:
      "A comprehensive NodeJS + Express backend for managing a blog.",
    description_long:
      "The Blog API allows users to create, read, update, and delete blog posts and comments. It includes user authentication and authorization features to ensure secure access to the blog functionalities, as well as CORS policies to limit access to certain client URLs.",
    features: [
      "Create, read, update, and delete endpoints for blog posts, users, and comments",
      "User authentication/authorization with PassportJS and JSON Web Tokens (JWTs) w/ refresh tokens",
      "Secure password storage with bcryptJS",
      "Limit access to certain client URLs with CORS policies",
    ],
    tech: ["NodeJS", "Express", "MongoDB"],
    img: blogApiImg,
    links: {
      repo_link: "https://github.com/sourdoughbredd/blog-api",
      live_link: "https://blog-client-bb.netlify.app",
    },
    featured: true,
    type: "web",
    tags: [
      "Backend",
      "RESTful",
      "API",
      "Authentication",
      "CRUD",
      "CORS Policies",
    ],
  },

  {
    name: "extraction-game",
    title: "Extraction Game",
    description_short:
      "A tile-based extraction game with random world generation using binary space partitioning.",
    description_long:
      "A game where the player must extract from the map with the valuable loot. The game features fully randomized map generation using binary space partitioning, saving/loading games, and vision constriction to make the loot harder to find.",
    features: [
      "Random map generation using the binary space partitioning (BSP) algorithm. Replay the same map by entering the same seed.",
      "Save game state and resume during future session.",
      "Vision constricted to a small radius to make navigation harder.",
      "Ability to expand vision radius for a few seconds (once per game).",
    ],
    tech: ["Java"],
    img: extractionGame,
    links: {
      alt: "This code must be kept private. Contact me to request access.",
    },
    featured: true,
    type: "dsa",
    tags: [
      "games",
      "algorithms",
      "data structures",
      "DS&A",
      "binary space partitioning",
    ],
  },

  {
    name: "inventory-application",
    title: "Inventory Application",
    description_short:
      "A NodeJS + Express backend for managing an inventory of beers with views served up with Pug.",
    description_long:
      "The Inventory Application is designed to help beer sellers manage their inventory of different beer products. It provides features to add, update, delete, and view details of breweries, beer types, beers, and individual beer SKUs. The application is built using Node.js and Express, with a MongoDB database for storage.",
    features: [
      "CRUD operations for breweries, beer types, beers, and beer SKUs with data interconnectivity protections",
      "Uses Country State City API to constrain location choices when creating new breweries.",
      "Admin password required to submit CRUD operations",
      "MVC (Model-View-Controller) architecture for efficient separation of concerns and maintainable code structure",
      "Server-side form sanitization and validation with express-validator",
    ],
    tech: ["NodeJS", "Express", "MongoDB", "Pug"],
    img: inventoryApp,
    links: {
      repo_link: "https://github.com/sourdoughbredd/inventory-application",
      live_link: "https://inventory-application-bb.fly.dev/",
    },
    featured: true,
    type: "web",
    tags: ["Backend", "CRUD", "API Integration", "Form Validation"],
  },

  {
    name: "resume-builder",
    title: "Resumé Builder",
    description_short:
      "A React app for automatically building a resumé from form inputs.",
    description_long:
      "The Resume Builder application allows users to create and customize their resumes through a user-friendly interface. This project showcases advanced React techniques, state management, form handling, and integration with Vite for a seamless development experience.",
    features: [
      "Dynamic Form Handling: Implemented using React's state and effect hooks to manage form data and real-time updates using prop hoisting/drilling (before I learned about Context API).",
      "Real-Time Preview: Utilized React's component lifecycle to provide instant feedback on resume changes.",
      "Styling with CSS Modules: Ensured modular and scoped styling using CSS modules.",
    ],
    tech: ["HTML/CSS/JS", "React", "CSS Modules"],
    img: resumeBuilder,
    links: {
      repo_link: "https://github.com/sourdoughbredd/resume-builder",
      live_link: "https://resume-builder-bb.netlify.app/",
    },
    featured: true,
    type: "web",
    tags: ["Frontend", "Form Handling", "Real-Time Preview", "Dynamic Forms"],
  },

  {
    name: "todo-list",
    title: "To-Do List",
    description_short:
      "A simple frontend task tracking app built with vanilla HTML/CSS/JS.",
    description_long:
      "The To-Do List application allows users to manage their tasks efficiently. Users can add, edit, delete, and organize tasks into different projects. The application is built completely with vanilla HTML/CSS/JS and utilizes Webpack for module bundling.",
    features: [
      "Add Tasks: Users can add new tasks with a description, importance, and due date.",
      "Edit Tasks: Tasks can be edited to update their details.",
      "Delete Tasks: Users can delete tasks that are no longer needed.",
      "Project Management: Tasks can be organized into different projects for better management.",
    ],
    tech: ["HTML", "CSS", "Javascript"],
    img: todoList,
    links: {
      repo_link: "https://github.com/sourdoughbredd/todo-list",
      live_link: "https://sourdoughbredd.github.io/todo-list/",
    },
    featured: true,
    type: "web",
  },

  {
    name: "bear-maps",
    title: "Bear Maps",
    description_short:
      "A web mapping application with map rastering and shortest path routing.",
    description_long:
      "Bear Maps is a web mapping application inspired by Google Maps, where users can interact with a map of Berkeley. The application supports features like scrolling, zooming, and route finding, powered by a Java backend.",
    features: [
      "Map Rastering: Converts map data into pixel images for display.",
      "Graph Building: Builds graph representation of entire area from real world dataset.",
      "Routing: Implements the A* shortest path algorithm for navigation.",
    ],
    tech: ["Java"],
    img: bearMaps,
    links: {
      alt: "This code must be kept private. Contact me to request access.",
    },
    featured: false,
    type: "dsa",
    tags: ["mapping", "algorithms", "data structures", "DS&A", "graphs"],
  },

  {
    name: "shopping-cart",
    title: "Shopping Cart",
    description_short:
      "An e-commerce site with cart management using React Context API.",
    description_long:
      "The Shopping Cart Project is an e-commerce site designed to let users browse products, add them to their cart, and manage their cart with ease. Built with modern web technologies like React for the frontend and Vite as the build tool, this application focuses on robust application logic rather than visual aesthetics.",
    features: [
      "Single Page Application (SPA) Principles: Implemented using React Router with a shared layout across all pages.",
      "API Integration: Seamless handling of API calls using the Fake Store API.",
      "State Management: Cart access and management across different pages using the React Context API.",
    ],
    tech: ["HTML/CSS/JS", "React", "FakeStoreAPI"],
    img: shoppingCart,
    links: {
      repo_link: "https://github.com/sourdoughbredd/shopping-cart",
      live_link: "https://shopping-cart-bb.netlify.app/",
    },
    featured: false,
    type: "web",
  },

  {
    name: "weather-app",
    title: "Weather App",
    description_short:
      "A vanilla HTML/CSS/JS Apple weather app clone utilizing the WeatherAPI",
    description_long:
      "The (Apple Clone) Weather App fetches current and forecast weather data from a weather API. Users can search for weather information by entering a city name or airport code. The app displays current weather conditions, hourly weather for the next 24 hours, and a three-day forecast.",
    features: [
      "API Integration: Fetches current and forecast weather data using the WeatherAPI.",
      "Error Handling: Alerts users if no matching location is found or if there are API errors.",
      "Current Weather Display: Shows the current temperature, condition, and location information.",
      "Three-Day Forecast: Displays weather conditions for the next three days.",
    ],
    tech: ["HTML", "CSS", "Javascript", "WeatherAPI"],
    img: weatherApp,
    links: {
      repo_link: "https://github.com/sourdoughbredd/weather-app",
      live_link: "https://sourdoughbredd.github.io/weather-app/",
    },
    featured: false,
    type: "web",
  },

  {
    name: "battleship",
    title: "Battleship",
    description_short:
      "The classic game of Battleship with game logging and playback for debugging.",
    description_long:
      "A web-based implementation of the classic Battleship game. Crafted with precision and a clear coding style, this standalone web app is bundled with Webpack, emphasizing modern web development practices. It also features a simple error logging and game replay system for debugging game crashes.",
    features: [
      "Player vs Computer gameplay",
      "Randomized ship placement for the computer",
      "Drag-and-drop style ship placement for the player",
      "Easy and Medium Computer AI designs",
      "Game Logging and Playback for debugging",
    ],
    tech: ["HTML", "CSS", "Javascript", "Jest"],
    img: battleship,
    links: {
      repo_link: "https://github.com/sourdoughbredd/battleship",
      live_link: "https://sourdoughbredd.github.io/battleship/",
    },
    featured: false,
    type: "web",
  },

  {
    name: "sign-up-form",
    title: "Sign Up Form",
    description_short:
      "A responsive sign-up form with live form validation and aesthitic user feedback.",
    description_long:
      "A responsive sign-up form built with HTML, CSS, and JavaScript. It includes live form validation with a simple and intuitive user feedback.",
    features: [
      "Responsive design via flexbox and media queries",
      "Live form validation with simple and effective user feedback",
    ],
    tech: ["HTML", "CSS", "Javascript"],
    img: signupForm,
    links: {
      repo_link: "https://github.com/sourdoughbredd/sign-up-form",
      live_link: "https://sourdoughbredd.github.io/sign-up-form/",
    },
    featured: false,
    type: "web",
  },

  // ENGINEERING PROJECTS
  {
    name: "laundry-mate",
    title: "Laundry Mate",
    description_short:
      "An IoT device that retrofits any clothes washer/dryer with a reservation and notification system.",
    description_long:
      "The Laundry Mate is a small IoT device that retrofits any clothes washer/dryer with a reservation and notification system. Machines can be reserved in-person via push button or remotely via SMS message. Laundry Mate will sense when your load has begun and will send you status updates via SMS message.",
    features: [
      "Reservation server (Python + Flask) which allows remote reservation via SMS (Twilio API) and in-person reservation via a push button on the Laundry Mate device (MQTT).",
      "Sensing of laundry cycle Start, Spin, and End using accelerometer and a multi-layer state representation of the laundry cycle.",
      "MQTT pub/sub protocol allows Laundry Mate devices to communicate status to the server, which can pass that status along to the user via SMS message.",
    ],
    tech: ["Python", "Flask", "Twilio API", "C++"],
    img: laundryMate,
    links: {
      alt: "Code will be uploaded soon.",
    },
    featured: false,
    type: "engineering",
  },

  {
    name: "regen-door",
    title: "Regenerative Door Opener",
    description_short:
      "An automatic door opener with battery power that is recharged when the door is manually opened.",
    description_long:
      "The Regenerative Door Opener is a battery-powered automatic door opener with regenerative charging. My contribution to the project was the electronics design and build. This system includes many features, including a custom Li-ion battery, A/C power backup, battery management system for safe charging/discharging, and a microcontroller to coordinate it all.",
    features: [
      "Integrated custom 12V Li-Ion battery as main power supply with 12V AC-DC power supply for backup and emergency charging.",
      "Regenerative charging via a pre-built motor driver (meant for RC cars), turning manual door openings into electrical power.",
      "Battery Management System for intelligent charge and discharge control with current sensing for optimal battery health, performance, and safety.",
    ],
    tech: ["Electronics Design"],
    img: regenDoor,
    links: null,
    featured: false,
    type: "engineering",
  },
];

const featuredProjects = projects.filter((project) => project.featured);

export { projects, featuredProjects };
