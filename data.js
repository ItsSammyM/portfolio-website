const PORTFOLIO_DATA = {
    "name": "Samuel Maselli",
    "tagline": "A passionate programmer since 2019, looking for a full-time software engineering position utilizing his skills in full-stack engineering, web design, game design, mathematics, AI, education, robotics, or hardware integration.",
    "email": "SamuelLMaselli@gmail.com",
    "linkedin": "https://www.linkedin.com/in/samuel-maselli-8a6bb7338/",
    "github": "https://github.com/ItsSammyM",
    "resumeFile": "./resume/current.pdf",

    "skills": [
        {
            category: "Languages",
            items: ["JavaScript", "TypeScript", "Rust", "Python", "Java", "C", "C++", "C#", "HTML", "CSS", "JSX", "JSON"]
        },
        {
            category: "Frameworks & Libraries",
            items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Websockets", "Angular", "JSONata", "WebRTC", "Monogame"]
        },
        {
            category: "Tools & Platforms",
            items: ["Git", "Docker", "AWS", "GitHub Actions", "AWS", "Cloudflare", "CloudFanatic", "Kubernetes"]
        },
        {
            category: "AI Tools",
            items: ["Claude", "Cline", "Github Copilot", "Z.ai", "Deepseek"]
        },
        {
            category: "Other",
            items: ["Unity", "Unreal", "ArcGis Pro", "Arduino"]
        }
    ],

    "experience": [
        {
            "title": "Software Engineer Internship",
            "company": "Hyperproof",
            "date": "June 2023 — August 2023",
            "description": "A remote-first software company that provides automated enterprise compliance management software.",
            "skills": [
                { "name": "Pair Programming", "how": "Pair programmed with team members to efficiently build new features, debug production issues and fix bugs" },
                { "name": "JSON APIs", "how": "Pulled data via API from Azure Active Directory, AWS, GitHub Enterprise into internal object formats" },
                { "name": "JSONata", "how": "Coded Declarative JSONata objects to transfer data from APIs to PDF files for hyperproof output documents." },
                { "name": "Scrum", "how": "Worked on the integrations team containing 15 developers participating in twice-weekly standup meetings."}
            ]
        }
    ],

    "education": [
        {
            "degree": "B.S. Computational Mathematics",
            "school": "Rochester Institute of Technology",
            "date": "2022 - 2025",
            "description": "Dean's List for 6 semesters.",
            "skills": [
                { "name": "Algorithms & Data Structures", "how": "Completed advanced coursework and competitive programming" },
                { "name": "Distributed Systems", "how": "Built a fault-tolerant key-value store for the distributed computing capstone" },
                { "name": "Technical Writing", "how": "Wrote 20+ lab reports and a 40-page senior thesis" }
            ]
        }
    ],

    "majorProjects": [
        {
            "title": "Midnight Machinations",
            "date": "2019 - Present",
            "description": "A web-based social deduction video game with 85 in-game characters using asynchronous rust, secure websockets, running on a virtual private server (VPS), and containing over 43,000 lines of code. With a playerbase of 200 players that participate in game nights several times a week. Games typically have 6 - 20 simultaneous players.",
            "github": "https://github.com/midnight-machinations/midnight-machinations",
            "website": "https://midnightmachinations.net",
            "image": "images/Midnight Machinations Title.png",
            "skills": [
                { "name": "Ticketing", "how": "Orchestrated a small team of devs to implement features and bug fixes through GitHub Issues and meetings." },
                { "name": "Code Review", "how": "Utilized pull request reviews for quality assurance, ensuring code is reliable, and follows design principles." },
                { "name": "CI/CD", "how": "Designed and built a dockerized CI/CD pipeline using GitHub actions and CloudFlare pages to deploy nightly." },
                { "name": "Testing", "how": "Automated scenario tests using Rust's testing framework to maintain game functionality and integrity." },
                { "name": "User Feedback", "how": "Ran playtests and solicited player feedback to find and fix bugs, and streamline UI design."},
                { "name": "React", "how": "Fully internationalized front-end website built using Python and React with over 50 react components." },
                { "name": "Async Rust", "how": "Backend written in async rust using tokio async runtime."},
            ]
        },
        {
            "title": "First Tech Challenge, Team Captain and Head Programmer",
            "date": "September 2019 - June 2022",
            "description": "An international robotics engineering and programming competition where high school students build robots to autonomously solve tasks such as building towers out of lego bricks or putting objects on shelves.",
            "github": "https://github.com/midnight-machinations/midnight-machinations",
            "website": "",
            "image": "",
            "skills": [
                { "name": "Leadership", "how": "Head programmer for 3 teams of 10 students each creating both autonomous code and player controller code." },
                { "name": "Robotics Hardware Integration", "how": "Programmed servos, motors, IMU’s, cameras, remote controllers, in addition to color and distance sensors." },
                { "name": "Calculus Driven Algorithms", "how": "Designed an Euler Integration system to keep track of the robot position based on IMU data." },
                { "name": "Image Processing", "how": "Utilized image processing contour detection libraries to allow the camera to scan for objects to grab." },
                { "name": "Education", "how": "Educated robotics team members and middle-school students on math, computer science, and engineering."}
            ]
        }
    ],

    "sideProjects": [
        {
            "title": "Circuit Scripting Language",
            "date": "March 2026 - May 2026",
            "description": "Graphical scripting language using logic gates for use in education and video games written with Rust.",
            "github": "https://github.com/ItsSammyM/ChessBattleRoyale",
            "website": "",
            "image": "images/Circut Lang Editor.png",
            "skills": [
                { "name": "AI tools", "how": "Using Cline with Vscode to automatically build the entire frontend of the editor." },
                { "name": "Library Design", "how": "Designed Runtime library, exposing types for the scripting lanugage using OOP principals." }
            ]
        },
        {
            "title": "AI that plays Snake Game",
            "date": "January 2025 - Febuary 2025",
            "description": "Rust based genetic machine learning neural network AI to play “snake”. Achieved 60% grid completion rate.",
            "github": "https://github.com/ItsSammyM/basic_ai_snake",
            "website": "",
            "image": "",
            "skills": [
                { "name": "Neural Networks", "how": "Programmed a Neural Network using matrices to represent weights, bias, and activation." },
                { "name": "AI Training", "how": "Wrote an evolution algorithm and a backpropogation algorithm to advance training speeds in gradient decent." }
            ]
        },
        {
            "title": "Satisfiability (SAT) solver",
            "date": "October 2024 - May 2025",
            "description": "Solver for boolean expressions in the command-line to explore NP-Complete algorithmic complexity.",
            "github": "https://github.com/ItsSammyM/poropsitional-logic-calculator",
            "website": "",
            "image": "",
            "skills": [
                { "name": "NP Complete Algorithms", "how": "Created a solver for the class of NP complete problems. Optimized using the concept of knowledge bases." },
                { "name": "Tokenizer & Parser", "how": "Tokenized user entered expressions from the CLI to create a syntax tree for solving." }
            ]
        },
        {
            "title": "Chess Battle Royale",
            "date": "June 2021 - August 2021",
            "description": "C# based multiplayer chess for up to 256 players using Monogame Framework, Websockets, and OOP.",
            "github": "https://github.com/ItsSammyM/ChessBattleRoyale",
            "website": "",
            "image": "images/chess_battle_royale.png",
            "skills": [
                { "name": "Websockets", "how": "Using a C# library to connect to the front and backends of the desktop app using websockets." },
                { "name": "Monogame", "how": "UI designed and rendered using Monogames rendering pipeline" },
                { "name": "Vim API", "how": "Learned buffers, windows, and autocmds while building the plugin" }
            ]
        },
        {
            "title": "Portfolio Website",
            "date": "2024",
            "description": "This very site! Built as a single HTML file with Tailwind CSS, designed for easy GitHub Pages deployment.",
            "github": "https://github.com/ItsSammyM/portfolio-website",
            "website": "https://itssammym.github.io/portfolio-website/",
            "image": "",
            "skills": [
                { "name": "Tailwind CSS", "how": "Styled the entire site with utility classes and custom design tokens" },
                { "name": "JavaScript", "how": "Built a data-driven rendering system so adding content is just editing JSON" },
                { "name": "Agentic Workflows", "how": "CLI AI Tools created the entire website from just a few prompts, as well as creating skills for cross prompt AI sessions."}
            ]
        },
        {
            "title": "Physical Light Up Piano",
            "date": "May 2020",
            "description": "Physical Lights to attach to a MIDI piano that lights up when keys are pressed.",
            "github": "",
            "website": "",
            "image": "images/chess_battle_royale.png",
            "skills": [
                { "name": "Arduino", "how": "Using ArudioC programming lanugage to take USB inputs and convert to colored pixel rgb values." },
                { "name": "USB protocol", "how": "Attached a USB host sheild and used the MIDI protocol to read incoming data into data structres." }
            ]
        },
    ]
}