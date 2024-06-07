"use client"
import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "../lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
    const { ref } = useSectionInView("About")
    const t = useTranslations("AboutSection")
    const sectionLan = useTranslations("SectionName")
    const activeLocale = useLocale()

    return (
        <motion.section
            ref={ref}
            className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>{sectionLan("about")}</SectionHeading>
            {activeLocale == "zh" ? (
                <p>{t("desc")}</p>
            ) : (
                <>
                    <p className="mb-3">
                        My journey into programming started during my undergrad at Bina Nusantara University. Through internships, I gained hands-on experience in iOS development, sparking my passion for creating impactful technology. Now, as a Software Engineer at Epidemic Sound, I focus on implementing algorithms for digital signal processing using Django and Golang.
                    </p>
                    <p className="mb-3">
                        I specialize in technologies like React, React Native, Django, and Golang, and I'm fluent in Bahasa, English, and proficient in Chinese. Beyond work, I was also recognized at the Apple WWDC Swift Student Challenge. I enjoy sharing my tech discoveries on GitHub and YouTube and unwinding with cooking, movies, and workouts.
                    </p>
                </>
            )}
        </motion.section>
    )
}

