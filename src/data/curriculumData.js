/**
 * Curriculum Data Repository for MSEC & Anna University Regulations
 * Contains course definitions, auto-credits, course types, and inclusion flags.
 */

export const CURRICULUM_DATA = {
  // -------------------------------------------------------------
  // MSEC Autonomous — R2024
  // -------------------------------------------------------------
  MSEC_R2024: {
    BE_CSE: {
      1: {
        verified: true,
        courses: [
          { code: "HS24111", name: "Technical English & Professional Skills", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA24112", name: "Matrices, Calculus & Linear Algebra", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PH24113", name: "Engineering Physics & Semiconductor Physics", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CY24114", name: "Engineering Chemistry & Energy Science", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24115", name: "Problem Solving and Python Programming", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24121", name: "Physics & Chemistry Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24122", name: "Python Programming Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "MC24101", name: "Heritage of Tamils / Mandatory Value Course", credits: 1, type: "Mandatory Course", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "HS24211", name: "Professional Communication & Workplace Skills", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA24212", name: "Transforms, Complex Variables & Differential Equations", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PH24213", name: "Physics for Information Science", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24214", name: "Basic Electrical & Electronics Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24215", name: "Programming in C and Data Structures", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24216", name: "Engineering Graphics & Computer Aided Design", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24221", name: "C & Data Structures Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24222", name: "Engineering Practices Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "MC24201", name: "Tamils and Technology", credits: 1, type: "Mandatory Course", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "MA24311", name: "Discrete Mathematics & Probability Theory", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24312", name: "Object Oriented Programming in Java", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24313", name: "Database Management Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24314", name: "Computer Architecture and Organization", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24315", name: "Software Engineering Principles", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24321", name: "Java Programming Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24322", name: "Database Management Systems Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24323", name: "Aptitude & Logical Reasoning I", credits: 1, type: "Value Added Course", includedInGPA: true, includedInCGPA: true }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "MA24411", name: "Probability, Statistics and Queueing Theory", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24412", name: "Design and Analysis of Algorithms", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24413", name: "Operating Systems Architecture", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24414", name: "Computer Networks & Protocols", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24415", name: "Theory of Computation & Automata", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24421", name: "Operating Systems & OS Kernel Lab", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24422", name: "Networks Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "MC24401", name: "Environmental Sciences & Sustainability", credits: 0, type: "Audit Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "CS24511", name: "Internet of Things & Embedded Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24512", name: "Compiler Design & Code Generation", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24513", name: "Object Oriented Software Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24501", name: "Professional Elective I (Cloud Computing / Mobile App Dev)", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24502", name: "Professional Elective II (Cyber Security / Cryptography)", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24501", name: "Open Elective I", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "CS24521", name: "IoT and Embedded Systems Lab", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24522", name: "Mobile Application Development Lab", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "CS24611", name: "Artificial Intelligence & Machine Learning", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24612", name: "Distributed & Parallel Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24601", name: "Professional Elective III (Full Stack Development)", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24602", name: "Professional Elective IV (Big Data Analytics)", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24601", name: "Open Elective II", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "CS24621", name: "Machine Learning & AI Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24631", name: "Mini Project & Product Development", credits: 2, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "CS24711", name: "Human Values & Professional Ethics", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS24712", name: "Deep Learning Architectures", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24701", name: "Professional Elective V (BlockChain Technologies)", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24702", name: "Professional Elective VI (Natural Language Processing)", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24701", name: "Open Elective III", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "CS24731", name: "Project Work Phase I / Industrial Internship", credits: 3, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "CS24831", name: "Project Work Phase II / Major Project", credits: 10, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      }
    },

    BE_MECH: {
      1: {
        verified: true,
        courses: [
          { code: "U24EN101", name: "Technical English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA101", name: "Mathematical Foundation for Engineers", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH105", name: "Physics for Mechanical Engineering I", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY105", name: "Chemistry for Mechanical Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA101", name: "தமிழர்மரபு / Heritage of Tamils", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS101", name: "Programming in C", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE105", name: "Basics of Electrical and Electronics Engineering", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24BS101", name: "Physics and Chemistry Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP110", name: "Communication Skill Lab - I", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED111", name: "Design Thinking - Building Innovation & Solutioning Mindset", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "U24EN201", name: "Professional English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA205", name: "Fourier Series, Complex Analysis and Calculus", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH205", name: "Physics for Mechanical Engineering II", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA201", name: "தமிழரும் தொழில்நுட்பமும் / Tamils and Technology", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY201", name: "Green and Sustainable Chemistry", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS201", name: "Python Programming", credits: 4.5, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE205", name: "Engineering Graphics for Mechanical Engineering", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME101", name: "Engineering Practices Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP210", name: "Communication Skill Lab - II", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED211", name: "Design Thinking - Decoding Innovation Opportunity", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "U24MA305", name: "Statistics and Numerical Methods for Mechanical Engineers", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME301", name: "Engineering Mechanics", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME302", name: "Engineering Thermodynamics", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME303", name: "Manufacturing Processes", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME304", name: "Engineering Materials and Metallurgy", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC313", name: "Foreign Language (Japanese / French / German)", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24ME305", name: "Fluid Mechanics and Machinery", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME306", name: "Computer Aided Machine Drawing", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP310", name: "General Aptitude & Logical Reasoning", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED311", name: "Innovation Tool Kits", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM312", name: "Introduction To Problem Solving", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "U24MC413", name: "Indological Studies", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24ME401", name: "Manufacturing Technology", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME402", name: "Metrology and Measurements", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME403", name: "Strength of Materials", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME404", name: "Thermal Engineering", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME405", name: "Hydraulics and Pneumatics", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP410", name: "Critical and Creative Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED411", name: "Idea & Simulation Lab", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM412", name: "Hypothesis", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "OE24511", name: "Open Elective I", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24511", name: "Professional Elective I", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24512", name: "Professional Elective II", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME501", name: "Design of Machine Elements", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME502", name: "Theory of machines", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME503", name: "Heat and Mass Transfer", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME504", name: "CAD /CAM LAB", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP510", name: "Analytical and Logical Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME505", name: "Summer Internship", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED511", name: "Prototype & Market Validation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM512", name: "Domain Specific Experiments/Methodology/Algorithms", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC513", name: "Fitness for Life - Yoga, Food Nutrition", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "OE24611", name: "Open Elective II", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24611", name: "Professional Elective III", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24612", name: "Professional Elective IV", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME601", name: "Design of Transmission System", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MG602", name: "Project Management", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC613", name: "Integrated Disaster Management", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24ME602", name: "Finite Element Analysis", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP610", name: "Employability Skills & Problem Solving Techniques", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED611", name: "Building a Business Model, GTM & Startup Journey", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM612", name: "Technical Writing And Research Ethics", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "OE24711", name: "Open Elective III", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24711", name: "Professional Elective V", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24712", name: "Professional Elective VI", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24MG701", name: "Engineering Economics and Finance Management", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME701", name: "Artificial Intelligence and Robotics for Mechanical Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC713", name: "Constitution of India", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24ME702", name: "Mechatronics and IoT", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME703", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM712", name: "Data Collection, Analysis And Interpretation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "U24ME801", name: "Project Work", credits: 8, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      }
    },

    BE_ECE: {
      1: {
        verified: true,
        courses: [
          { code: "HS24111", name: "Technical English", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA24112", name: "Matrices and Calculus", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PH24113", name: "Physics for Electronics Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CY24114", name: "Chemistry for Electronics Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24115", name: "Python Programming", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24121", name: "Circuits & Devices Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24122", name: "Python Programming Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "HS24211", name: "Professional Communication", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA24212", name: "Vector Calculus & Complex Functions", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24213", name: "Electronic Devices & Circuit Theory", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24214", name: "Electric Circuits and Network Analysis", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24221", name: "Analog Circuits Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24222", name: "Engineering Practices Lab", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "MA24314", name: "Linear Algebra & Random Processes", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24311", name: "Signals and Systems", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24312", name: "Digital Electronics & Logic Design", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24313", name: "Electronic Circuits I", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24314", name: "Electromagnetic Fields", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24321", name: "Digital Circuits Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24322", name: "Electronic Circuits Laboratory I", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "EC24411", name: "Digital Signal Processing", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24412", name: "Communication Theory & Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24413", name: "Linear Integrated Circuits", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24414", name: "Transmission Lines & Waveguides", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24421", name: "Digital Signal Processing Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24422", name: "Linear Integrated Circuits Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "EC24511", name: "Microprocessors and Microcontrollers", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24512", name: "VLSI Design & Architecture", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24513", name: "Wireless Communication Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24521", name: "Professional Elective I (Embedded Systems)", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24521", name: "Open Elective I", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "EC24521", name: "Microprocessor & Microcontroller Lab", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24522", name: "VLSI Design Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "EC24611", name: "Antennas and Microwave Engineering", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24612", name: "Optical Communication & Networks", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24621", name: "Professional Elective II (5G / 6G Communications)", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24621", name: "Open Elective II", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "EC24621", name: "Advanced Communication Systems Lab", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "EC24631", name: "Mini Project / Design Project", credits: 2, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "EC24711", name: "Satellite Communication & Radar Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24721", name: "Professional Elective III (Robotics & Automation)", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24722", name: "Professional Elective IV (Medical Electronics)", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "EC24731", name: "Project Work Phase I", credits: 3, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "EC24831", name: "Project Work Phase II", credits: 10, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      }
    },

    BE_EEE: {
      1: {
        verified: true,
        courses: [
          { code: "HS24111", name: "Technical English", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA24112", name: "Matrices and Calculus", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PH24113", name: "Physics for Electrical Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CY24114", name: "Chemistry for Electrical Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24115", name: "Python Programming", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24121", name: "Electrical Circuits Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "HS24211", name: "Professional Communication", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA24212", name: "Differential Equations and Vector Calculus", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24213", name: "Electric Circuit Analysis", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24214", name: "Electron Devices and Circuits", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24221", name: "Electric Machines Laboratory I", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "MA24315", name: "Numerical Methods & Transform Techniques", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24311", name: "Electrical Machines I", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24312", name: "Electromagnetic Theory", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24313", name: "Analog Electronics", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24321", name: "Electrical Machines Lab I", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "EE24411", name: "Electrical Machines II", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24412", name: "Transmission and Distribution", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24413", name: "Measurements & Instrumentation", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24421", name: "Electrical Machines Lab II", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "EE24511", name: "Power Electronics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24512", name: "Control Systems", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24513", name: "Microprocessors & Microcontrollers", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24521", name: "Power Electronics Lab", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "EE24611", name: "Power System Analysis", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24612", name: "Solid State Drives", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24631", name: "Mini Project Work", credits: 2, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "EE24711", name: "High Voltage Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE24731", name: "Project Work Phase I", credits: 3, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "EE24831", name: "Project Work Phase II", credits: 10, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      }
    },

    BE_CIVIL: {
      1: {
        verified: true,
        courses: [
          { code: "U24EN101", name: "Technical English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA101", name: "Mathematical foundation for Engineers", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH101", name: "Physics for Civil Engineering -I", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY101", name: "Chemistry for Civil Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA101", name: "தமிழர்மரபு / Heritage of Tamils", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS101", name: "Programming in C", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE101", name: "Basics of Electrical, Electronics & Instrumentation Engineering", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24BS101", name: "Physics and Chemistry Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP110", name: "Communication Skills Lab I", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED111", name: "Design Thinking - Building Innovation and Solutioning Mindset", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "U24EN201", name: "Professional English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA201", name: "Probability and Statistics for Civil Engineers", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH201", name: "Physics for Civil Engineering II", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE201", name: "Elements of Civil Engineering and Mechanics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA201", name: "தமிழரும் தொழில்நுட்பமும் / Tamils and Technology", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS201", name: "Python Programming", credits: 4.5, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE207", name: "Engineering Graphics for Civil Engineering", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME101", name: "Engineering Practices Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP210", name: "Communication Skills Lab II", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED211", name: "Design Thinking-Decoding Innovation Opportunity", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "U24MA301", name: "Transforms and Partial Differential Equations and Numerical methods", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY201", name: "Green and Sustainable Chemistry", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE302", name: "Fluid Mechanics", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE303", name: "Strength of Materials I", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE304", name: "Engineering Surveying", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE305", name: "Water Supply Engineering", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP310", name: "General Aptitude & Logical Reasoning", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED311", name: "Innovation tool kits", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM312", name: "Research Overview", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC313", name: "Foreign Language (Japanese / French)", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "U24CE401", name: "Strength of Materials II", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE402", name: "Highway and Railway Engineering", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE403", name: "Applied Hydraulics Engineering", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE404", name: "Soil Mechanics", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE405", name: "Waste Water Engineering", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE406", name: "Construction Materials", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP410", name: "Critical and Creative Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED411", name: "Idea & simulation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM412", name: "Conceptualization", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC413", name: "Indological Studies", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "U24CE501", name: "Design of Reinforced Concrete Structural Elements", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE502", name: "Structural Analysis I", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE503", name: "Foundation Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24501", name: "Professional Elective I", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24502", name: "Professional Elective II", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24501", name: "Open Elective I", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE504", name: "Computer Aided Building Drawing", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE505", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP510", name: "Analytical and Logical Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED511", name: "Prototype & Market Validation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM512", name: "Data Exploration", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC513", name: "Fitness for Life-Yoga, Food nutrition", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "U24CE601", name: "Design of Steel Structural Elements", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE602", name: "Structural Analysis II", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE603", name: "Concrete Technology", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24601", name: "Professional Elective III", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24602", name: "Professional Elective IV", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24601", name: "Open Elective II", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE604", name: "Concrete and Highway Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP610", name: "Employability Skills & Problem Solving Techniques", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED611", name: "Building a Business Model, GTM and Market Journey", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM612", name: "Design & Modelling", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC613", name: "Integrated Disaster Management", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "U24CE701", name: "Estimation, Costing and Valuation Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE702", name: "Hydrology and Water Resources Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE703", name: "Construction Planning and Management", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24701", name: "Professional Elective V", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24702", name: "Professional Elective VI", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24701", name: "Open Elective III", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE704", name: "Computer Aided Design and Drawing", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE705", name: "Internship", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM712", name: "Testing", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC713", name: "Constitution of India", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "U24CE801", name: "Project Work", credits: 8, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      }
    },

    BTECH_IT: {
      1: {
        verified: true,
        courses: [
          { code: "HS24111", name: "Technical English", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA24112", name: "Matrices and Calculus", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PH24113", name: "Physics for Information Science", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24115", name: "Problem Solving and Python Programming", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "GE24122", name: "Python Programming Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "HS24211", name: "Professional Communication", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA24212", name: "Transforms and Partial Differential Equations", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "IT24213", name: "Programming in C and Data Structures", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "IT24221", name: "Data Structures Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "MA24311", name: "Discrete Mathematics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "IT24312", name: "Object Oriented Programming", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "IT24313", name: "Database Management Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "IT24411", name: "Operating Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "IT24412", name: "Design and Analysis of Algorithms", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "IT24413", name: "Computer Networks", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "IT24511", name: "Web Technology & Frameworks", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "IT24512", name: "Cloud Computing Architectures", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "IT24611", name: "Mobile Computing & Applications", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "IT24612", name: "Information Security", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "IT24711", name: "Big Data Analytics", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "IT24731", name: "Project Work Phase I", credits: 3, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "IT24831", name: "Project Work Phase II", credits: 10, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      }
    },

    BTECH_AIDS: {
      1: {
        verified: true,
        courses: [
          { code: "HS24111", name: "Technical English", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA24112", name: "Linear Algebra & Matrices", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "AD24113", name: "Python Programming for Data Science", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "AD24121", name: "Python for Data Science Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "MA24212", name: "Calculus & Optimization Techniques", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "AD24213", name: "Data Structures & Algorithms for AI", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "MA24311", name: "Probability & Statistics for AI", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "AD24312", name: "Foundations of Artificial Intelligence", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "AD24313", name: "Database Engineering & SQL", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "AD24411", name: "Machine Learning Algorithms", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "AD24412", name: "Data Warehousing & Visualization", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "AD24511", name: "Deep Learning Foundations", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "AD24512", name: "Computer Vision & Image Processing", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "AD24611", name: "Natural Language Processing", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "AD24612", name: "Reinforcement Learning & AI Ethics", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "AD24711", name: "Generative AI & LLM Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "AD24731", name: "AI Capstone Project Phase I", credits: 3, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "AD24831", name: "AI Capstone Project Phase II", credits: 10, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      }
    }
  },

  // -------------------------------------------------------------
  // Anna University — R2023
  // -------------------------------------------------------------
  AU_R2023: {
    BE_CSE: {
      1: {
        verified: true,
        courses: [
          { code: "HS3151", name: "Professional English - I", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA3151", name: "Matrices and Calculus", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PH3151", name: "Engineering Physics", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CY3151", name: "Engineering Chemistry", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "HS3251", name: "Professional English - II", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PH3256", name: "Physics for Information Science", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "BE3251", name: "Basic Electrical and Electronics Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "GE3251", name: "Engineering Graphics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3251", name: "Programming in C", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3271", name: "Programming in C Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "MA3354", name: "Discrete Mathematics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3351", name: "Digital Principles and Computer Organization", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3352", name: "Foundations of Data Science", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3301", name: "Data Structures", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3391", name: "Object Oriented Programming", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3361", name: "Data Structures Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3381", name: "Object Oriented Programming Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "CS3451", name: "Introduction to Operating Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3491", name: "Artificial Intelligence and Machine Learning", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3492", name: "Database Management Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3401", name: "Algorithms", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3461", name: "Operating Systems Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3481", name: "Database Management Systems Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "CS3591", name: "Computer Networks", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3501", name: "Compiler Design", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CB3491", name: "Cryptography and Network Security", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3551", name: "Distributed Computing", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "CCS334", name: "Big Data Analytics", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "CCS343", name: "Deep Learning", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "CS3691", name: "Embedded Systems and IoT", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "GE3791", name: "Human Values and Ethics", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS3711", name: "Summer Internship / Industry Project", credits: 2, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "CS3811", name: "Project Work / Main Project Phase II", credits: 10, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      }
    }
  },

  // -------------------------------------------------------------
  // Anna University — R2025
  // -------------------------------------------------------------
  AU_R2025: {
    BE_CSE: {
      1: {
        verified: true,
        courses: [
          { code: "HS2511", name: "Communicative English & Global Skills", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "MA2511", name: "Linear Algebra & Multivariable Calculus", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PH2511", name: "Quantum Physics for Computing", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS2511", name: "Computational Thinking & Algorithmic Problem Solving", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS2512", name: "Python & Data Processing Lab", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "MA2521", name: "Probability & Discrete Mathematics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "CS2521", name: "Modern Data Structures in C++", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "EE2521", name: "Digital Logic & Computer Hardware", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true }
        ]
      }
    }
  }
};

/**
 * Fallback generator for unverified combinations to ensure robust app behavior
 */
export function getCurriculum(regulationId, programmeId, semesterNum) {
  const reg = CURRICULUM_DATA[regulationId];
  if (reg && reg[programmeId] && reg[programmeId][semesterNum]) {
    return reg[programmeId][semesterNum];
  }
  
  // Return unverified fallback structure
  return {
    verified: false,
    courses: [
      { code: "DEMO101", name: "Sample Core Subject I (Demo)", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
      { code: "DEMO102", name: "Sample Engineering Course II (Demo)", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
      { code: "DEMO103", name: "Sample Professional Elective (Demo)", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
      { code: "DEMO104", name: "Sample Laboratory Practical (Demo)", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
    ]
  };
}
