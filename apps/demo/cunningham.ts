import { defaultThemes } from "@openfun/cunningham-tokens";

const defaultConfig = {
    themes: {
        dark: {
            components: {
                card: {
                    "border-width": "none",
                    "box-shadow": "rgba(0, 8, 16, 0.3) 0px 16px 24px",
                },
            },
            
        },
    },
  
}

const config = {...defaultConfig, ...defaultThemes};
export default config;




