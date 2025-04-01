export interface Project {
    id: number
    title: string
    shortDescription: string
    description: string
    image: string
    tags: string[]
    features: string[]
    demoLink: string
    githubLink: string
  }
  
  export type ProjectCategory = "Software Development" | " Machine Learning / Data Analysis / CNN" | "AI / Gen - AI" | "Devops / Cloud"
  
  export interface Projects {
    [key: string]: Project[]
  }
  
  export const categories: ProjectCategory[] = [
    "Software Development",
    " Machine Learning / Data Analysis / CNN",
    "AI / Gen - AI",
    "Devops / Cloud"
  ]
  
  export const projects: Projects = {
    "Software Development": [
      {
        id: 1,
        title: "Next Enti",
        shortDescription: "A personalized career advisor web-app enhanced by AI",
        description: "A modern web application for managing and tracking daily tasks and activities.",
        image: "/logo white.png",
        tags: ["React","LLM", "Python", "Flask", "Firebase", "MUI", "Open AI","Postman"],
        features: [
          "Inventory management system",
          "Real-time stock tracking",
          "Secure payment processing",
          "Order management dashboard",
          "Customer analytics",
        ],
        demoLink: "#",
        githubLink: "#",
      },
      {
        id: 2,
        title: "MovieRevApp",
        shortDescription: "A simple and responsive React-based movie search app using the OMDB API, offering interactive UI elements and dynamic search functionality.",
        description: "A movie search application built with React that allows users to search for movies by title using the OMDB API, featuring a responsive design and interactive movie cards.",
        image: "/MovieRev.png",
        tags: ["CSS Variables", "Importing CSS Files", "Flex and Position Properties", "Rendering HTML through JavaScript", "Smooth Animations", "BEM Method", "Responsive Design"],
        features: [
            "Movie Search: Search for movies by title using the OMDB API.",
            "Responsive Design: Optimized for various screen sizes using CSS media queries.",
            "Interactive UI: Dynamic search and movie cards with hover effects.",
        ],
        demoLink: "https://github.com/sahithi-cloud/MovieApp---React.github.io.git",
        githubLink: "https://github.com/sahithi-cloud/MovieApp---React.github.io.git",
      },
      {
        id: 4,
        title: "Salesforce",
        shortDescription: "Salesforce API integration project demonstrates CSV report extraction and object model parsing in Python.",
        description: "A CRM solution for managing customer relationships and business processes.",
        image: "/salesforce.jpg",
        tags: ["Salesforce", "Project Management", "Custom Objects", "Screen Flow"],
        features: [        "Creation of projects from templates",
          "Dynamic task generation from templates",
          "Screen flow for streamlined project setup",
          "Permissions management for security"],
        demoLink: "https://github.com/SatyaJaidev/salesforce",
        githubLink: "https://github.com/SatyaJaidev/salesforce",
      },
    ],
    " Machine Learning / Data Analysis / CNN": [
      {
        id: 5,
        title: "Budget Analysis",
        shortDescription: "Data Analysis project generating reports from CSV files using Generative AI with LangChain, Llama, and Groq.",
        description: "Data Analysis project generating reports from CSV files using Generative AI with LangChain, Llama, and Groq.",
        image: "/analysis.png",
        tags: ["Generative AI", "LangChain", "Groq API", "Python", "Power BI"],
        features: [    "Generative AI for report generation",
          "Integration with LangChain and Groq API",
          "Efficient data parsing from CSV",
          "Interactive visualizations",
          "Custom analytics",
          "Data export",
    "Interactive dashboards and reports in Power BI"
        ],
        demoLink: "https://github.com/SatyaJaidev/Data-Analysis",
        githubLink: "https://github.com/SatyaJaidev/Data-Analysis",
      },
      {
        id: 6,
        title: "Web Scraping",
        shortDescription: "Web scraping project focused on analyzing sales data using Python and SQL with visualization in Power BI.",
        description: "Web scraping project focused on analyzing sales data using Python and SQL with visualization in Power BI.",
        image: "/IREngine.jpg",
        tags: ["Web Scraping", "Python", "SQL", "Power BI"],
        features: [
          "Data scraping and cleaning with Python",
          "SQL for data manipulation and storage",
          "Feature engineering",
          "Model optimization",
          "Performance metrics",
        ],
        demoLink: "https://github.com/sahithi-cloud/IR-Search-Engine.git",
        githubLink: "https://github.com/sahithi-cloud/IR-Search-Engine.git",
      },
      {
        id: 7,
        title: "Glaucoma Detection Using CNN and CDR",
        shortDescription: "A machine learning-based glaucoma detection system utilizing fundus images and cup-to-disc ratio analysis with a CNN for early diagnosis.",
        description: "A project aimed at detecting glaucoma in its early stages by analyzing complete eye fundus images using a convolutional neural network (CNN), and enhancing detection accuracy by combining results with the calculated cup-to-disc ratio.",
        image: "/CNN.png",
        tags: ["Machine Learning", "Python", "OpenCV", "CNN"],
        features: [
            "Detection of glaucoma using complete eye fundus images",
            "Calculation and integration of cup-to-disc ratio (CDR)",
            "Deep learning model based on a pre-trained CNN architecture",
            "Early-stage glaucoma diagnosis for timely intervention",
          ],
        demoLink: "https://github.com/sahithi-cloud/Glacoma-Detection---Integrated-CNN.git",
        githubLink: "https://github.com/sahithi-cloud/Glacoma-Detection---Integrated-CNN.git",
      },
    ],
    "AI / Gen - AI": [
      {
        id: 9,
        title: "Software Project Management using LLM's",
        shortDescription: "Explores DevSecOps automation within virtual teams using Scrum and Waterfall methodologies to enhance project management.",
        description: "Explores DevSecOps automation within virtual teams using Scrum and Waterfall methodologies to enhance project management.",
        image: "/genai.png",
        tags: ["DevSecOps", "Scrum", "Waterfall", "Project Management"],
        features: [
          "Implementation of DevSecOps for enhanced security and efficiency",
          "Integration of Scrum and Waterfall methodologies",
          "Focus on automation and continuous integration/continuous deployment"
        ],
        demoLink: "https://github.com/ssrivastav01/DevSecOps-Automation-Led-by-GenAI-Virtual-Teams-using-Scrum-and-Waterfall",
        githubLink: "https://github.com/ssrivastav01/DevSecOps-Automation-Led-by-GenAI-Virtual-Teams-using-Scrum-and-Waterfall",
      },
    ],
    "Devops / Cloud": [
      {
        id: 13,
        title: "DevSecOps",
        shortDescription: "Explores DevSecOps automation within virtual teams using Scrum and Waterfall methodologies to enhance project management.",
        description: "Explores DevSecOps automation within virtual teams using Scrum and Waterfall methodologies to enhance project management.",
        image: "/devops.png",
        tags: ["DevSecOps", "Docker", "Scrum", "Waterfall", "Project Management"],
        features: [
          "Implementation of DevSecOps for enhanced security and efficiency",
          "Integration of Scrum and Waterfall methodologies",
          "Focus on automation and continuous integration/continuous deployment"
        ],
        demoLink: "https://github.com/ssrivastav01/DevSecOps-Automation-Led-by-GenAI-Virtual-Teams-using-Scrum-and-Waterfall",
        githubLink: "https://github.com/ssrivastav01/DevSecOps-Automation-Led-by-GenAI-Virtual-Teams-using-Scrum-and-Waterfall",
      },
    ],
  } 