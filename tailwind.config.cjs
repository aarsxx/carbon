/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                customPrimary: "rgb(99, 102, 241)",
                customSecondary: "rgb(161, 163, 247)",
                customDarkBg1: "rgb(31, 32, 35)",
                customDarkBg2: "rgb(38, 39, 43)",
                customDarkBg3: "rgb(48, 49, 54)",
                customDarkBg3Hover: "rgb(55, 56, 62)",
                customContentSubtitle: "rgb(178, 184, 205)",
                customGrayBorder: "rgb(255,255,255,0.1)",
                customGrayText: "rgb(174, 178, 183)",
                customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
                customDarkBgTransparentDarker: "rgb(0,0,0,0.8)",
                customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
                dark1: "#010409",
                dark1Transparent: "#B3010409",
                dark2: "#0D1117",
                dark3: "#161B22",
                white1: "#FFFFFF",
                white2: "#F4F2F0",
                white3: "#E8EFF6",
                white4: "#A6B0BB",
                blue1: "#89B4FA",
                blue2: "#111926",
                trialText: "#A3A4B5",
                trialBorder: "#2F303E",
                trialField: "#191D22",
                trialFieldText: "#85889C",
            },
            fontFamily: {
                Inter: "Inter",
                Jakartha: "Plus Jakarta Sans",
            },
            screens: {
                xs: "530px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                xll: "1400px",
                "2xl": "1536px",
                "3xl": "1600px",
            },
            boxShadow: {
                glass:
                    "0 0 12px rgba(255, 255, 255, 0.1), inset 0 0 12px rgba(255, 255, 255, 0.1), 0 4px 30px rgba(0, 0, 0, 0.2)",
            },
            animation: {
                scroll:
                    "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
        },
    },
};
