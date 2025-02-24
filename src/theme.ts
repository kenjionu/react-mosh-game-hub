import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
theme: {
  semanticTokens: {
    colors: {
      primary: { value: "#FF0000", description: "Primary brand color" },
      secondary: { value: "#00FF00", description: "Secondary brand color" },
    }
  },
  tokens: {
    fonts: {
      heading: { value: `'Figtree', sans-serif` },
      body: { value: `'Figtree', sans-serif` },
    },
    fontSizes: {
      h1: { value: "48px" },
      h2: { value: "36px" },
      h3: { value: "24px" },
      h4: { value: "20px" },
    },
  },
  textStyles: {
    h1: {
      fontSize: "48px",
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: "36px",
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    h4: {
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    
  },
},
})

export const system = createSystem(defaultBaseConfig, customConfig)
