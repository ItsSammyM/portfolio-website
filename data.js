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
            items: ["JavaScript", "TypeScript", "Rust", "Python", "Java", "C", "C++", "C#"]
        },
        {
            category: "Frameworks & Libraries",
            items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Prisma"]
        },
        {
            category: "Tools & Platforms",
            items: ["Git", "Docker", "AWS", "GitHub Actions", "PostgreSQL"]
        }
    ],

    "experience": [
        {
            "title": "Software Engineer Internship",
            "company": "Hyperproof",
            "date": "June 2023 — August 2023",
            "description": "Led development of the core platform's new microservices architecture, improving deployment frequency by 3×. Collaborated with product and design to ship features used by 50k+ daily active users.",
            "skills": [
                { "name": "System Design", "how": "Owned architecture decisions for the notification service end-to-end" },
                { "name": "TypeScript", "how": "Migrated a 40k-line codebase from JS to TS over 6 months" },
                { "name": "AWS", "how": "Set up Lambda + DynamoDB pipelines for event processing" }
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
            "link": "https://github.com/midnight-machinations/midnight-machinations",
            "website": "",
            "image": "images/Midnight Machinations Title.png",
            "skills": [
                { "name": "Go", "how": "First real Go project — learned channels, interfaces, and the testing package" },
                { "name": "CLI Design", "how": "Iterated on UX based on feedback from early users on Reddit" },
                { "name": "CI/CD", "how": "Set up GitHub Actions for cross-compilation and Homebrew tap publishing" }
            ]
        }
    ],

    "sideProjects": [
        {
            "title": "Circuit Scripting Language",
            "date": "March 2026 - May 2026",
            "description": "Graphical scripting language using logic gates for use in education and video games written with Rust.",
            "link": "https://github.com/ItsSammyM/ChessBattleRoyale",
            "website": "",
            "image": "images/vim-md.png",
            "skills": [
                { "name": "Lua", "how": "Wrote the plugin in Lua for Neovim's native plugin API" },
                { "name": "Vim API", "how": "Learned buffers, windows, and autocmds while building the plugin" }
            ]
        },
        {
            "title": "AI that plays Snake Game",
            "date": "January 2025 - Febuary 2025",
            "description": "Rust based genetic machine learning neural network AI to play “snake”. Achieved 60% grid completion rate.",
            "link": "https://github.com/ItsSammyM/basic_ai_snake",
            "website": "",
            "image": "images/vim-md.png",
            "skills": [
                { "name": "Lua", "how": "Wrote the plugin in Lua for Neovim's native plugin API" },
                { "name": "Vim API", "how": "Learned buffers, windows, and autocmds while building the plugin" }
            ]
        },
        {
            "title": "Satisfiability (SAT) solver",
            "date": "October 2024 - May 2025",
            "description": "Solver for boolean expressions in the command-line to explore NP-Complete algorithmic complexity.",
            "link": "https://github.com/ItsSammyM/poropsitional-logic-calculator",
            "website": "",
            "image": "images/vim-md.png",
            "skills": [
                { "name": "Lua", "how": "Wrote the plugin in Lua for Neovim's native plugin API" },
                { "name": "Vim API", "how": "Learned buffers, windows, and autocmds while building the plugin" }
            ]
        },
        {
            "title": "Chess Battle Royale",
            "date": "June 2021 - August 2021",
            "description": "C# based multiplayer chess for up to 256 players using Monogame Framework, Websockets, and OOP.",
            "link": "https://github.com/ItsSammyM/ChessBattleRoyale",
            "website": "",
            "image": "images/chess_battle_royale.png",
            "skills": [
                { "name": "Lua", "how": "Wrote the plugin in Lua for Neovim's native plugin API" },
                { "name": "Vim API", "how": "Learned buffers, windows, and autocmds while building the plugin" }
            ]
        },
        {
            "title": "Portfolio Website",
            "date": "2024",
            "description": "This very site! Built as a single HTML file with Tailwind CSS, designed for easy GitHub Pages deployment.",
            "link": "",
            "website": "",
            "image": "",
            "skills": [
                { "name": "Tailwind CSS", "how": "Styled the entire site with utility classes and custom design tokens" },
                { "name": "JavaScript", "how": "Built a data-driven rendering system so adding content is just editing JSON" }
            ]
        }
    ]
}