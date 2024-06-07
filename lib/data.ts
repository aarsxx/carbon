import React from "react";
import {FaApple, FaReact, FaSpotify, FaSwift} from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rubicGameImage from "@/public/2048-game.png";
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import {FaBrave} from "react-icons/fa6";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        title: "Senior Software Engineer Backend",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://epidemicsound.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Epidemic Sound."),
            " Stockholm, Sweden"
        ),
        description:
            "implement algorithms with Django & Golang for digital signal processing, with a focus on audio.",
        icon: React.createElement(FaSpotify),
        date: "2022 Aug - 2022 Dec",
    },
    {
        title: "iOS Engineer",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://bravebrowser.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Brave Browser."),
            " San Fransisco, California"
        ),
        description:
            "Develop bookmark saving feature that integrates functionalities for user management, browser config, session management.\n" +
            "Migrate and replace core feature from Swift to obj-c",
        icon: React.createElement(FaBrave),
        date: "2022 Aug - 2022 Dec",
    },
    {
        title: "Junior iOS Engineer",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://developeracademy.apps.binus.ac.id/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Apple Developer Academy ID."),
            " Jakarta, Indonesia"
        ),
        description:
            "Generate creative and innovative app concepts and conduct in-depth user research to understand user needs, behaviors, a motivations. Make the product into high-fidelity prototypes and Mvp. \n" +
            "Conduct product tests to gather feedback, identify usability issues, and iterate on tech",
        icon: React.createElement(FaApple),
        date: "2022 Aug - 2022 Dec",
    },
    {
        title: "iOS Engineer Intern",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.bukalapak.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "BukaLapak."),
            " Jakarta, Indonesia"
        ),
        description:
            "Handle the seamless migration of internal tools within the Customer Experience from Objective-C to Swift. Ensure the\n" +
            "maintenance of feature parity and preservation of all pre-existing functionalities throughout the entire transition process.",
        icon: React.createElement(FaSwift),
        date: "Aug 2020 - Dec 2022",
    },

    {
        title: "Bachelor of Science in Computer Science",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://socs.binus.ac.id/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Bina Nusantara University."),
            " Jakarta, Indonesia"
        ),
        description:
            "Graduated with a Bachelor of Computer Science, securing a GPA of 3.42/4.0. Gained foundational knowledge in Software Engineering & Data Science.",
        icon: React.createElement(LuGraduationCap),
        date: "2016 Sep - 20 June 2020",
    },
]

export const experiencesDataZn = [
    {
        title: "高级后端软件工程师",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://epidemicsound.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Epidemic Sound."),
            " 瑞典斯德哥尔摩"
        ),
        description: "使用Django和Golang为数字信号处理实现算法，重点是音频。",
        icon: React.createElement(FaSpotify),
        date: "2022年8月 - 2022年12月",
    },
    {
        title: "iOS工程师",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://bravebrowser.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Brave Browser."),
            " 加利福尼亚州旧金山"
        ),
        description: "开发集成用户管理、浏览器配置、会话管理功能的书签保存功能。\n将核心功能从Swift迁移到Objective-C。",
        icon: React.createElement(FaBrave),
        date: "2022年8月 - 2022年12月",
    },
    {
        title: "初级iOS工程师",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://developeracademy.apps.binus.ac.id/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Apple Developer Academy ID."),
            " 印度尼西亚雅加达"
        ),
        description: "生成创意和创新的应用概念，并进行深入的用户研究以了解用户需求、行为和动机。将产品制成高保真原型和MVP。\n进行产品测试以收集反馈，识别可用性问题，并在技术上进行迭代。",
        icon: React.createElement(FaApple),
        date: "2022年8月 - 2022年12月",
    },
    {
        title: "iOS工程师实习生",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.bukalapak.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "BukaLapak."),
            " 印度尼西亚雅加达"
        ),
        description: "在客户体验中无缝迁移内部工具，从Objective-C迁移到Swift。确保在整个过渡过程中保持功能一致性并保留所有现有功能。",
        icon: React.createElement(FaSwift),
        date: "2020年8月 - 2022年12月",
    },
    {
        title: "计算机科学学士",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://socs.binus.ac.id/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Bina Nusantara University."),
            " 印度尼西亚雅加达"
        ),
        description: "毕业于计算机科学学士学位，GPA为3.42/4.0。获得了软件工程和数据科学的基础知识。",
        icon: React.createElement(LuGraduationCap),
        date: "2016年9月 - 2020年6月20日",
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "Extra Card",
        title_zh: '',
        description:
            "",
        desc_zh: "",
        tags: ["React", "TypeScript", "Tailwind", 'Framer Motion'],
        imageUrl: '',
        projectUrl: '',
        demoUrl: '',
    },
]

export const skillsData = [
    "Go",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Java",
    "PHP",
    "Laravel",
    "React",
    "React Native",
    "Next",
    "Node",
    "MySql",
    "PgSql",
    "MongoDB",
    "HTML",
    "CSS",
    "Sass",
    "TDD",
] 
