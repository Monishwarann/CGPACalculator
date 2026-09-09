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
          { code: "U24IP101", name: "Induction Program- Universal Human values", credits: 0, type: "Value Added Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EN101", name: "Technical English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA101", name: "Mathematical foundation for Engineers", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH102", name: "Physics for Information Science I", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY102", name: "Chemistry for Information Science", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA101", name: "தமிழர் மரபு / Heritage of Tamils", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS101", name: "Programming in C", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE102", name: "Engineering Graphics and Computer Application", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME101", name: "Engineering Practices Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP110", name: "Communication skills Laboratory - I", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED111", name: "Design Thinking - Building Innovation and Solutioning Mindset", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "U24IP201", name: "Value Added Course – II (Biology for Engineers)", credits: 0, type: "Value Added Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EN201", name: "Professional English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA202", name: "Probability and Statistics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH202", name: "Physics for Information Science II", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA201", name: "தமிழரும் தொழில்நுட்பமும்/ Tamils and Technology", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC202", name: "Basics of Electrical and Electronics Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY201", name: "Green and Sustainable Chemistry", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS201", name: "Python Programming", credits: 4.5, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24BS101", name: "Physics and Chemistry Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP210", name: "Communication skills Laboratory - II", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED211", name: "Design Thinking - Decoding Innovation Opportunity", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "U24MA302", name: "Discrete Mathematics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS302", name: "Data Structures", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS303", name: "Object Oriented Programming", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC313", name: "Foreign Language (Japanese / French / German)", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24CS301", name: "Foundations of Data Science", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS306", name: "Digital Logic Design", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS304", name: "Data Structures Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS305", name: "Object Oriented Programming Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP310", name: "General Aptitude & Logical Reasoning", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED311", name: "Innovation Tool Kits", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM312", name: "Introduction to Problem Solving", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "U24MA402", name: "Linear Algebra and Numerical Methods", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS401", name: "Operating Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS402", name: "Database Management Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS403", name: "Computer Organization and Computer Architecture", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS404", name: "Design and Analysis of Algorithms", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD401", name: "Artificial Intelligence", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC413", name: "Indological studies", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24CS406", name: "Operating Systems Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS407", name: "Database Management Systems Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP410", name: "Critical and Creative Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED411", name: "Idea and Simulation Lab", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM412", name: "Hypothesis", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "U24CS501", name: "Computer Networks", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS503", name: "Theory of Computation", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24501", name: "Professional Elective I", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24502", name: "Professional Elective II", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24503", name: "Professional Elective III", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24501", name: "Open Elective I", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC513", name: "Fitness for Life-Yoga, Food nutrition", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24CS502", name: "Network Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP510", name: "Analytical and Logical Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME507", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM512", name: "Domain Specific Experiments/ Methodology/ Algorithms", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED511", name: "Prototype and Market Valuation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "OE24601", name: "Open Elective II", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC613", name: "Integrated Disaster management", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24CS601", name: "Embedded Systems and IOT", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS602", name: "Network Essentials", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "PE24601", name: "Professional Elective IV", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24602", name: "Professional Elective V", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP610", name: "Employability Skills & Problem-Solving Techniques", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED611", name: "Building a Business Model, GTM & Startup Journey", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM612", name: "Technical Writing and Research Ethics", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "U24CS701", name: "Information Security", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MG701", name: "Engineering Economics and Finance Management", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "OE24701", name: "Open Elective – III", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC713", name: "Constitution of India", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "PE24701", name: "Professional Elective VI", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24702", name: "Professional Elective VII", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS702", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM712", name: "Data Collection, Analysis, and Interpretation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "U24CS801", name: "Project Work", credits: 8, type: "Project", includedInGPA: true, includedInCGPA: true }
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
          { code: "U24IP101", name: "Induction Program - Universal Human Values", credits: 0, type: "Value Added Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EN101", name: "Technical English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA101", name: "Mathematical Foundation for Engineers", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH103", name: "Physics for Electronics Engineering - 1", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY103", name: "Chemistry for Electrical and Electronics Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA101", name: "தமிழர்மரபு / Heritage of Tamils", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE103", name: "Basics of Electrical Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS101", name: "Programming in C", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24BS101", name: "Physics and Chemistry Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP110", name: "Communication Skills Lab I", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED111", name: "Design Thinking - Building Innovation & Solutioning Mindset", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "U24IP201", name: "Value Added Course – II (Biology for Engineers)", credits: 0, type: "Value Added Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EN201", name: "Professional English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA203", name: "Differential Equations and Transforms", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH203", name: "Physics for Electronics Engineering -II", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY201", name: "Green and Sustainability Chemistry", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA201", name: "தமிழரும் தொழில்நுட்பமும் / Tamils and Technology", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS201", name: "Python Programming", credits: 4.5, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE203", name: "Engineering Graphics for Electronics and Communication Engineering", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME101", name: "Engineering Practices Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP210", name: "Communication Skills Lab II", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED211", name: "Design Thinking - Decoding Innovation Opportunity", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "U24MA303", name: "Random Process and Linear Algebra", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC301", name: "Signals and Systems", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC302", name: "Basic Electric Circuit Analysis", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC303", name: "Electronic Devices and Circuits", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC304", name: "Digital System Design", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD302", name: "Oops and Data Structures Design", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP310", name: "General Aptitude & Logical Reasoning", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED311", name: "Design Thinking Innovation tool kits", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM312", name: "Introduction to Problem Solving", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC313", name: "Foreign Language (Japanese/French)", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "U24MA402", name: "Statistics and Numerical Methods", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC401", name: "Analog and Digital Communication", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC402", name: "Electromagnetic fields", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC403", name: "Linear Integrated Circuits", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE408", name: "Control Systems Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC404", name: "Digital Signal Processing", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC405", name: "Linear Integrated Circuits LAB", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC406", name: "Communication Systems Lab", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP410", name: "Critical and Creative Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED411", name: "Idea & Simulation Lab", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM412", name: "Hypothesis", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC413", name: "Indological studies", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "U24EC501", name: "Transmission lines and RF Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24501", name: "Professional Elective I", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24502", name: "Professional Elective II", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24503", name: "Professional Elective III", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC502", name: "VLSI and chip design", credits: 4.5, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U23EC503", name: "Wireless Communication", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP510", name: "Analytical and Logical Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC511", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM512", name: "Domain Specific Experiments/Methodology/Algorithms", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED511", name: "Prototype & Market Validation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC513", name: "Fitness for Life-Yoga, Food nutrition", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "OE24601", name: "Open Elective I", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24601", name: "Professional Elective IV", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24602", name: "Professional Elective V", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24603", name: "Professional Elective VI", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC601", name: "Embedded Systems and IOT Design", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC602", name: "Networks & Security", credits: 3, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM612", name: "Technical Writing and Research Ethics", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP610", name: "Employability Skills & Problem Solving Techniques", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED611", name: "Business Management - Go To Market & Start-up Journey", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC613", name: "Integrated Disaster Management", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "OE24701", name: "Open Elective II", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24702", name: "Open Elective III", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC713", name: "Constitution Of India", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24MG701", name: "Engineering Economics and Finance Management", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC701", name: "Microwave and Optical Communication", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC702", name: "Artificial Intelligence and Machine learning", credits: 3, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME703", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM712", name: "Data Collection, Analysis and Interpretation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "U24ME801", name: "Project Work", credits: 8, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      }
    },

    BE_EEE: {
      1: {
        verified: true,
        courses: [
          { code: "U24IP101", name: "Induction Program - Universal Human Values", credits: 0, type: "Value Added Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EN101", name: "Technical English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA101", name: "Mathematical Foundation for Engineers", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH104", name: "Physics for Electrical Engineering - I", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY103", name: "Chemistry for Electrical and Electronics Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA101", name: "தமிழர்மரபு / Heritage of Tamils", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME104", name: "Basic Civil and Mechanical Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS101", name: "Programming in C", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24BS101", name: "Physics and Chemistry Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP110", name: "Communication Skills Laboratory-I", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED111", name: "Design Thinking - Building Innovation & Solutioning Mindset", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "U24IP201", name: "Value Added Course – II (Biology for Engineers)", credits: 0, type: "Value Added Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EN201", name: "Professional English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA204", name: "Mathematics for Electrical Engineering", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA201", name: "தமிழரும் தொழில்நுட்பமும் / Tamils and Technology", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH204", name: "Physics for Electrical Engineering -II", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY201", name: "Green and Sustainable Chemistry", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS201", name: "Python Programming", credits: 4.5, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE204", name: "Engineering Graphics for Electrical and Electronics Engineering", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME101", name: "Engineering Practices Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP210", name: "Communication Skills Laboratory-II", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED211", name: "Design Thinking - Decoding Innovation Opportunity", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "U24MA304", name: "Transforms and Partial Differential Equations", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE301", name: "Electrical Machines -I", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC313", name: "Foreign Language (Japanese/French)", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EE302", name: "Electron Devices and Circuit", credits: 4.5, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS308", name: "Data Structure", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE303", name: "Circuit Analysis", credits: 4.5, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE304", name: "Electrical Machines -I Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP310", name: "General Aptitude & Logical Reasoning", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED311", name: "Innovation Tool Kits", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM312", name: "Introduction to Problem Solving", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "U24MA402", name: "Linear Algebra and Numerical Methods", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE401", name: "Electromagnetic Theory", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE402", name: "Digital Logic Circuits", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE403", name: "Electrical Machines - II", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC413", name: "Indological studies", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EE404", name: "Integrated Circuits", credits: 4.5, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE405", name: "Electrical Machines - II laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP410", name: "Critical and Creative Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED411", name: "Idea and Simulation Lab", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM412", name: "Hypothesis", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "U24EE501", name: "Transmission and Distribution", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE502", name: "Measurements and Instrumentation", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "PE24501", name: "Professional Elective I", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24502", name: "Professional Elective II", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE503", name: "Microprocessor and Microcontroller", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE504", name: "Control Systems", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP510", name: "Analytical and Logical Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE505", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM512", name: "Domain Specific Experiments /Methodology/Algorithms", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC513", name: "Fitness for Life-Yoga, Food nutrition", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24ED511", name: "Prototype & Market Validation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "U24EE601", name: "Power System Analysis", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE602", name: "Discrete Time System and Signal Processing", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "OE24601", name: "Open Elective I", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24601", name: "Professional Elective III", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24602", name: "Professional Elective IV", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC613", name: "Integrated Disaster Management", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EE603", name: "Power Electronics", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM612", name: "Data Collection, Analysis And Interpretation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP610", name: "Employability Skills & Problem Solving Techniques", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED611", name: "Business Management-Go to Market & Start-up Journey", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "U24MG701", name: "Engineering Economics and Finance Management", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "OE24701", name: "Open Elective II", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24702", name: "Open Elective III", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24701", name: "Professional Elective V", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24702", name: "Professional Elective VI", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC713", name: "Constitution Of India", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EE701", name: "Renewable Energy Systems", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE702", name: "Power System Operation and Control", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EE703", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM712", name: "Testing", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "U24EE801", name: "Project Work", credits: 8, type: "Project", includedInGPA: true, includedInCGPA: true }
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
          { code: "U24IP101", name: "Induction Program - Universal Human Values", credits: 0, type: "Value Added Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EN101", name: "Technical English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA101", name: "Mathematical Foundation for Engineers", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH102", name: "Physics for Information Science I", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY102", name: "Chemistry for Information Science", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA101", name: "தமிழர்மரபு / Heritage of Tamils", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS101", name: "Programming in C", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE102", name: "Engineering Graphics and Computer Applications", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME101", name: "Engineering Practices Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP110", name: "Communication Skills Lab I", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED111", name: "Design Thinking - Building Innovation & Solutioning Mindset", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "U24IP201", name: "Value Added Course – II (Biology for Engineers)", credits: 0, type: "Value Added Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EN201", name: "Professional English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA202", name: "Probability and Statistics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH202", name: "Physics for Information Science II", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA201", name: "தமிழரும் தொழில்நுட்பமும் / Tamils and Technology", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC202", name: "Basics of Electrical and Electronics Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY201", name: "Green and Sustainable Chemistry", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS201", name: "Python Programming", credits: 4.5, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24BS101", name: "Physics and Chemistry Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP210", name: "Communication Skills Lab - II", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED211", name: "Design Thinking - Decoding Innovation Opportunity", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "U24MA302", name: "Discrete Mathematics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS302", name: "Data Structures", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS303", name: "Object Oriented Programming", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC313", name: "Foreign Language", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24CS301", name: "Foundations of Data Science", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC310", name: "Digital Principles and Computer Organization", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS304", name: "Data Structures Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS305", name: "Object Oriented Programming Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP310", name: "General Aptitude & Logical Reasoning", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED311", name: "Innovation Tool Kits", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM312", name: "Introduction to Problem Solving", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "U24MA401", name: "Linear Algebra and Numerical Methods", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS401", name: "Operating Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS402", name: "Database Management Systems", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS404", name: "Design and Analysis of Algorithms", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC413", name: "Indological Studies", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24IT401", name: "Artificial Intelligence and Machine Learning", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS406", name: "Operating Systems Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS407", name: "Database Management Systems Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP410", name: "Critical and Creative Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED411", name: "Idea & Simulation Lab", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM412", name: "Hypothesis", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "U24IT501", name: "Computational Theory and Compiler Design", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "OE24501", name: "Open Elective I", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24IT502", name: "Computer Networks", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24IT503", name: "Web Technologies", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "PE24501", name: "Professional Elective I", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24502", name: "Professional Elective II", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP510", name: "Analytical and Logical Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24IT504", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM512", name: "Domain Specific Experiments/Methodology/Algorithms", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED511", name: "Prototype & Market Validation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC513", name: "Fitness for Life - Yoga, Food Nutrition", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "U24IT601", name: "Full Stack Web Development", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC613", name: "Integrated Disaster Management", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24CS601", name: "Object Oriented Software Engineering", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24IT603", name: "Embedded Systems and IOT", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "PE24601", name: "Professional Elective III", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24602", name: "Professional Elective IV", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24IT602", name: "Full Stack Web Development Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM612", name: "Ethics Data Collection, Analysis and Interpretation", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP610", name: "Employability Skills & Problem Solving Techniques", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED611", name: "Business Management - Go To Market & Start-up Journey", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "U24IT701", name: "Wireless Networks", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "OE24701", name: "Open Elective - II", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "OE24702", name: "Open Elective - III", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24MG701", name: "Engineering Economics and Finance Management", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC713", name: "Constitution of India", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "PE24701", name: "Professional Elective V", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24702", name: "Professional Elective VI", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24IT702", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM712", name: "Technical Writing and Research", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "U24IT801", name: "Project Work", credits: 8, type: "Project", includedInGPA: true, includedInCGPA: true }
        ]
      }
    },

    BTECH_AIDS: {
      1: {
        verified: true,
        courses: [
          { code: "U24IP101", name: "Induction Program - Universal Human Values", credits: 0, type: "Value Added Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EN101", name: "Technical English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA101", name: "Mathematical Foundation for Engineers", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH102", name: "Physics for Information Science I", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY102", name: "Chemistry for Information Science", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA101", name: "தமிழர்மரபு / Heritage of Tamils", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS101", name: "Programming in C", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24CE102", name: "Engineering Graphics and Computer Application", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24ME101", name: "Engineering Practices Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP110", name: "Communication Skill Lab - I", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED111", name: "Design Thinking - Building Innovation & Solutioning Mindset", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      2: {
        verified: true,
        courses: [
          { code: "U24IP201", name: "Value Added Course – II (Biology for AI Engineers)", credits: 0, type: "Value Added Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24EN201", name: "Professional English", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MA202", name: "Probability and Statistics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24PH202", name: "Physics for Information Science II", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TA201", name: "தமிழரும் தொழில்நுட்பமும் / Tamils and Technology", credits: 1, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC202", name: "Basics of Electrical and Electronics Engineering", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CY201", name: "Green and Sustainable Chemistry", credits: 2, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24CS201", name: "Python Programming", credits: 4.5, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24BS101", name: "Physics and Chemistry Laboratory", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP210", name: "Communication Skill Lab – II", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED211", name: "Design Thinking - Decoding Innovation Opportunity", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      3: {
        verified: true,
        courses: [
          { code: "U24MA302", name: "Discrete Mathematics", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD301", name: "Fundamentals of Data Science and Analytics", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC313", name: "Foreign Language (Japanese / French / German)", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24AD302", name: "OOPS and Data Structures Design", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD303", name: "Database Design and Management", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24EC310", name: "Digital Principles and Computer Organization", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD304", name: "Data Science and Analytics Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP310", name: "General Aptitude & Logical Reasoning", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED311", name: "Innovation Tool Kits", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM312", name: "Introduction To Problem Solving", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      4: {
        verified: true,
        courses: [
          { code: "U24MA402", name: "Linear Algebra and Numerical Methods", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD401", name: "Artificial Intelligence", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD402", name: "Machine Learning", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC413", name: "Indological Studies", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24AD403", name: "Introduction to Operating Systems", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD404", name: "Data Exploration and Visualization", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD405", name: "Artificial Intelligence Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD406", name: "Machine Learning Laboratory", credits: 1.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP410", name: "Critical and Creative Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED411", name: "Idea and Simulation Lab", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM412", name: "Hypothesis", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      5: {
        verified: true,
        courses: [
          { code: "U24AD501", name: "Deep Learning", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "OE24501", name: "Open Elective I", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD502", name: "Big Data Analytics", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD503", name: "Introduction to Java Programming", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "PE24501", name: "Professional Elective I", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24502", name: "Professional Elective II", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD504", name: "Deep Learning Lab", credits: 2, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD505", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP510", name: "Analytical and Logical Thinking Skills", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED511", name: "Prototype & Market Validation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM512", name: "Domain Specific Experiments / Methodology / Algorithms", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC513", name: "Fitness for Life-Yoga, Food Nutrition", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false }
        ]
      },
      6: {
        verified: true,
        courses: [
          { code: "U24CS503", name: "Theory of Computation", credits: 4, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "OE24601", name: "Open Elective II", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC613", name: "Integrated Disaster management", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "U24IT602", name: "Embedded Systems and IOT", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD601", name: "Network Essentials", credits: 4, type: "Theory Cum Practical", includedInGPA: true, includedInCGPA: true },
          { code: "PE24601", name: "Professional Elective III", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24602", name: "Professional Elective IV", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24TP610", name: "Employability Skills & Problem-Solving Techniques", credits: 1, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24ED611", name: "Building a Business Model, GTM & Startup Journey", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM612", name: "Technical Writing and Research Ethics", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      7: {
        verified: true,
        courses: [
          { code: "U24AD701", name: "Information Security", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "U24MG701", name: "Engineering Economics and Finance Management", credits: 3, type: "Theory", includedInGPA: true, includedInCGPA: true },
          { code: "OE24701", name: "Open Elective – III", credits: 3, type: "Open Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24MC713", name: "Constitution of India", credits: 0, type: "Mandatory Course", includedInGPA: false, includedInCGPA: false },
          { code: "PE24701", name: "Professional Elective V", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "PE24702", name: "Professional Elective VI", credits: 3, type: "Professional Elective", includedInGPA: true, includedInCGPA: true },
          { code: "U24AD702", name: "Summer Internship*", credits: 1, type: "Project", includedInGPA: true, includedInCGPA: true },
          { code: "U24RM712", name: "Data Collection, Analysis, and Interpretation", credits: 0.5, type: "Laboratory", includedInGPA: true, includedInCGPA: true }
        ]
      },
      8: {
        verified: true,
        courses: [
          { code: "U24AD801", name: "Project Work", credits: 8, type: "Project", includedInGPA: true, includedInCGPA: true }
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
