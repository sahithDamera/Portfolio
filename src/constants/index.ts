import { backend, cp, docker, frontend, kafka, PowerBi } from '../assets';
import { Ssms,python, sql, git, javascript, mongodb, nodejs, reactjs, tailwind, typescript } from '../assets';
import { java, azure, gcp, tableau, kubernetes, excel, jenkins, scala, plsql} from '../assets';
import { github, Azure_Migration, Microsoft_Fabric, CICD, Polyp} from '../assets/index';

export const resumeLink = "https://drive.google.com/file/d/1w44WWfsoPJLbrmhy0VsyYaKUf7BxxJIS/preview";



export const aboutMe = "Hello, I'm Sahith, a dedicated Data Engineer, with Master's in Data Science, thriving in the dynamic environment. My journey has been incredibly rewarding, allowing me to take ownership of projects and experience rapid professional growth through continuous learning. Driven by a passion for Extracting, Transforming, Loading and problem-solving the data. With over 3 years of experience on cloud technologies mainly Azure, AWS and GCP, I'm deeply committed to refining my skills and optimizing solutions. My curiosity for exploring new technologies has led me to diverse projects, including Migration of Data from on premsis to Azure cloud, developing Python modules, and creating visualizations using PowerBi and Tableue. Each project presents a unique opportunity for me to expand my technical repertoies and push the boundaries of innovation. Let's connect and explore opportunities to collaborate on exciting ventures together!"

export const skills = [
    {title: "Data Analyst", icon: cp}, 
    {title: "Data Engineer", icon: frontend}, 
    {title: "Devops Engineer", icon: backend}, 
    // {title: "AWS Solutions Architect", icon: aws}
];

export const frameworks = [
    {title: 'Azure', icon: azure, invert: false }, 
    {title: 'GCP', icon: gcp, invert: false }, 
    {title: 'excel', icon: excel, invert: false }, 
    {title: 'PowerBi', icon: PowerBi, invert: false }, 
    {title: 'Kubernetes', icon: kubernetes, invert: false },
    {title: 'jenkins', icon: jenkins, invert: true }, 
    {title: 'Git', icon: git, invert: false },
    {title: 'Docker', icon: docker, invert: false }, 
    {title: 'Kafka', icon: kafka, invert: true }, 
    // {title: 'Spring Boot', icon: springboot, invert: false }, 
]

export const languages = [
    {title: 'Python', icon: python, invert: false }, 
    // {title: 'C++', icon: cpp, invert: false }, 
    // {title: 'C', icon: c, invert: false }, 
    {title: 'Java', icon: java, invert: false }, 
    {title: 'Javascript', icon: javascript, invert: false }, 
    {title: 'scala', icon: scala, invert: false },
    {title:'SSMS',icon:Ssms,invert:false}, 
    {title: 'SQL', icon: sql, invert: true }, 
    {title: 'MongoDB', icon: mongodb, invert: false },
    {title: 'PLSQL', icon: plsql, invert: false },
    

];

export const websites = [
    {
        title: 'Data Engineer / Associate System Enginner', 
        description: 'Led complex data engineering projects at Tata Consultancy Services, optimizing data flows and achieving a 99.8% uptime for an AWS-based pipeline. I automated data migration processes, reducing manual effort by 60% and downtime by 40%, while leveraging technologies like AWS, Jenkins, Kafka, and SQL for streamlined operations.', 
        stack: [python, java, scala, azure, gcp, PowerBi, git ],
        link: '',
        source: ""
    },
    {
        title: 'Software Engineer', 
        description: 'As a Software Engineer, I fostered a DevOps culture, improving project delivery times by 15%, and enhanced data accuracy and processing efficiency by maintaining Tableau data sources. Additionally, I automated tasks with Python, implemented Docker and Kubernetes for scalable deployments, and optimized data interactions with Sqoop and Hive.', 
        stack: [ java, docker, kubernetes, jenkins, tableau ],
        link: '',
        source: ""
    },
    {
        title: 'Portfolio', 
        description: 'My humble portfolio website', 
        stack: [reactjs, typescript],
        link: '',
        source: ""
    },
]

export const projects = [
    {
        title: "Azure Migration",
        description: "The project implements an Azure Data Engineering pipeline using Azure Data Factory, Azure Synapse Analytics, Azure Databricks, and Power BI to migrate an on-premise SQL Server database to the cloud. It includes data transformation, loading, and visualization, emphasizing automation and security.",
        stack: [azure, Ssms, python, PowerBi],
        source: "",
        media: Azure_Migration
    },
    {
        title: "Building CI/CD Pipeline",
        description: "The project implements a CI/CD pipeline using Jenkins, Docker, Maven, SonarQube, and Kubernetes, with a focus on Argo CD for lifecycle management. It includes setting up and configuring each tool, building and analyzing a Java application, and automating deployment.",
        stack: [jenkins, docker, kubernetes, github, git],
        source: "",
        media: CICD
    },
    {
        title: "Bing News Data Analytics using Microsoft Fabric",
        description: "This project creates a news data analytics platform with Microsoft Fabric, covering data ingestion from Bing, transformation, sentiment analysis, and reporting. It involves tools like Data Factory, Synapse Data Engineering, Synapse Data Science, Power BI, and Data Activator to perform the entire process, from data collection to dashboard creation and alert configuration.",
        stack: [azure, PowerBi, python ],
        source: "",
        media: Microsoft_Fabric
    },
    {
        title: "Automatic Segmentation of Polyps using Colonoscopy",
        description: "This project presents an effective U-Net architecture based on pretrained deep CNNs for detecting polyps in colonoscopy and endoscopy images. The model, integrated with data augmentation and patch extraction, achieves high precision and sensitivity, with a great mean IoU score and dice loss.",
        stack: [python],
        source: "https://github.com/sahithdamera",
        media: Polyp
    },

]