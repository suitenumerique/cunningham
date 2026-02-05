import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DywkESLE.js";import"./index-Dci2SJTv.js";import{M as r,S as o}from"./index-DLc-htqX.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./preview-DeOn5Y15.js";import"./iframe-DKjxNwjc.js";import"./DocsRenderer-CFRXHY34-CQrKuqBk.js";import"./react-18-0ENLrOAf.js";import"./index-DO9VteM4.js";import"./index-D2FdBkVr.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Migrating/From v3 to v4"}),`
`,e.jsx(n.h1,{id:"objective",children:"Objective"}),`
`,e.jsx(n.p,{children:"The Cunningham color system has been revised with a methodical approach focused on modularity and accessibility. This revision enables the systematic generation of coherent themes, the automatic implementation of display modes (light/dark), the constant maintenance of contrast ratios independently of the selected theme, and the structured allocation of colors according to their role (background, content, border)."}),`
`,e.jsx(n.p,{children:"An algorithm (available soon) has been developed to facilitate the rapid generation and adaptation of color palettes, producing a JSON file compatible with the existing infrastructure and natively supporting both light and dark display modes. This algorithmic solution optimizes Cunningham's adaptability to a wide range of user environments."}),`
`,e.jsx(n.h1,{id:"structure",children:"Structure"}),`
`,e.jsx(n.p,{children:"The color system is structured around two complementary, interdependent palettes:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'The "Color Primitive" palette is the exhaustive repository of color values specific to a given theme, defining all available shades.'}),`
`,e.jsx(n.li,{children:'The "Color Contextual" palette establishes a functional interface between primitive values and user interface components via a semantic abstraction layer.'}),`
`]}),`
`,e.jsx(n.p,{children:"This two-tier architecture facilitates the systematic propagation of changes: any alteration to the primitive palette is automatically reflected in all interface elements without the need for additional adjustments (see Figure 1)."}),`
`,e.jsxs("figure",{children:[e.jsx("img",{src:"docs/migrating/ressources/v3_to_v4/Figure1.gif",alt:"Changing the color primitive palette automatically updates the color contextual palette while maintaining contrast ratios inside components."}),e.jsx("figcaption",{style:{textAlign:"center"},children:e.jsx(n.p,{children:`Figure 1. Changing the color primitive palette automatically updates the
color contextual palette while maintaining contrast ratios inside
components.`})})]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"theme"}),` is a comprehensive color configuration derived from a brand's visual identity. It constitutes a specific implementation of the "Color Primitive" palette with predetermined color values. The Cunningham theme is provided as the default reference.`]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"mode"}),' represents a systematic modulation of luminance and contrast parameters from an established theme, executed through the "Color Contextual" palette. This parametric adjustment accommodates diverse usage contexts while preserving the fundamental chromatic identity. Standard implementations include light and dark modes. These could be supplemented with specialized modes (such as high contrast) to meet specific accessibility needs or style requirements.']}),`
`,e.jsx(n.h1,{id:"palettes",children:"Palettes"}),`
`,e.jsx(n.h2,{id:"color-primitive",children:"Color Primitive"}),`
`,e.jsxs(n.p,{children:["The Color Primitive palette includes 16 colors. Each color is available in 19 distinct shades, except gray, which contains 22. Each shade is referenced by a number between 000 and 1000. A shade of 000 corresponds to pure white, while a shade of 1000 corresponds to pure black. Each intermediate shade value is then defined on the basis of the perceived luminance noted L* in the CIELAB color space (",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/CIELAB_color_space",rel:"nofollow",children:"more info on CIELAB"}),"). Using L* as a reference ensures that each primitive color fits into a predictable tonal scale, regardless of hue or saturation. This ensures consistent contrast levels across all themes, promoting universal accessibility. The correspondence between shade (S) and perceived luminance (L*) is as follows: $S=1000 \\times (1-L^",e.jsx(n.em,{children:")$ with $L^"})," \\in [0;1]$. See Figure 2 for an example."]}),`
`,e.jsxs("figure",{children:[e.jsx("img",{src:"docs/migrating/ressources/v3_to_v4/Figure2.png",alt:"Breakdown of the first 6 colors of a Color Primitive theme. Gray includes 3 complementary shades."}),e.jsx("figcaption",{style:{textAlign:"center"},children:e.jsx(n.p,{children:`Figure 2. Breakdown of the first 6 colors of a "Color Primitive" theme. Gray
includes 3 complementary shades.`})})]}),`
`,e.jsx(n.p,{children:"To optimize visual ergonomics in dark mode, it is necessary to reduce color saturation in the darkest shades (S > 600). This gradual desaturation avoids perceptual glare in dark mode and improves legibility in low ambient light environments."}),`
`,e.jsx(n.p,{children:"An algorithm will soon be available to automatically adjust the parameters of perceived luminance (L*) and saturation (C*) according to a decreasing function for dark shades, while preserving the integrity of the theme's visual identity."}),`
`,e.jsx(n.h2,{id:"color-contextual",children:"Color Contextual"}),`
`,e.jsxs("figure",{children:[e.jsx("img",{src:"docs/migrating/ressources/v3_to_v4/Figure3.png",alt:"Excerpt from the Color Contextual palette for the background.semantic.brand role, with light and dark modes."}),e.jsx("figcaption",{style:{textAlign:"center"},children:e.jsx(n.p,{children:`Figure 3. excerpt from the "Color Contextual" palette for the
background.semantic.brand role, with light and dark modes.`})})]}),`
`,e.jsx(n.p,{children:'The "Color Contextual" palette allows you to classify the various colors of a theme according to their actual use, differentiating between each of the modes (light, dark, etc.). This makes it possible (1) to simplify and limit errors when assigning colors to different components, and (2) to manage multiple modes.'}),`
`,e.jsx(n.p,{children:"This palette introduces the notion of roles, whose format is as follows:"}),`
`,e.jsx(o,{dark:!0,code:`
layer.scope.(intent).variant.(state)
`}),`
`,e.jsx(n.h3,{id:"layer",children:"Layer"}),`
`,e.jsx(n.p,{children:"The layer designates the visual rendering level of an interface element, and is divided into three distinct categories:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Background: Background layer serving as visual support for components (e.g., button background)."}),`
`,e.jsx(n.li,{children:"Content: Informative elements conveying a message (e.g., text, iconography)"}),`
`,e.jsx(n.li,{children:"Border : Peripheral delimitation of components"}),`
`]}),`
`,e.jsx(n.h3,{id:"scope",children:"Scope"}),`
`,e.jsx(n.p,{children:"The scope determines the functional area of application of a color according to the following hierarchy:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Surface: Structural elements of the interface with different levels of elevation (e.g., backgrounds, modals, maps)."}),`
`,e.jsx(n.li,{children:"Semantic: Interactive elements communicating a specific meaning to the user."}),`
`,e.jsx(n.li,{children:"Palette: set of colors for specific applications requiring customization (e.g., color selection for avatars)"}),`
`]}),`
`,e.jsx(n.h3,{id:"intent-optional",children:"Intent (optional)"}),`
`,e.jsx(n.p,{children:"The intent specifies the communicative function associated with the scope. It provides an additional contextual specification of the element's purpose in the interface."}),`
`,e.jsx(n.h3,{id:"variant",children:"Variant"}),`
`,e.jsx(n.p,{children:"The variant establishes a hierarchy of visual importance according to the following taxonomy:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Primary: Overriding importance, attracts priority attention"}),`
`,e.jsx(n.li,{children:"Secondary: Intermediate importance, supports primary elements"}),`
`,e.jsx(n.li,{children:"Tertiary: Subordinate importance, provides additional information"}),`
`,e.jsx(n.li,{children:"On [...]: Color inversion mechanism to ensure legibility of superimposed content (applicable to layer content only)"}),`
`]}),`
`,e.jsx(n.h3,{id:"state-optional",children:"State (optional)"}),`
`,e.jsx(n.p,{children:"The state characterizes the interactional state of an interface element (e.g., Hover, Active, Disabled), making it possible to visually communicate its reactivity to the user."}),`
`,e.jsx(n.h1,{id:"accessibility",children:e.jsx(n.strong,{children:"Accessibility"})}),`
`,e.jsx(n.p,{children:"Accessibility is a fundamental principle guiding the design of this color system. As demonstrated in the Color Primitive section, the methodical standardization of luminance values (L*) ensures consistent contrast ratios, regardless of the theme or display mode selected. This systematic approach eliminates the need to re-evaluate accessibility parameters when implementing new themes, ensuring ongoing compliance with WCAG accessibility standards. The main objective is to establish an accessibility framework that is invariant and resilient in the face of multiple usage contexts."}),`
`,e.jsx(n.h1,{id:"technical-implementation",children:e.jsx(n.strong,{children:"Technical implementation"})}),`
`,e.jsxs(n.p,{children:["Due to all the changes and the token architecture, all CSS variables have changed. You must therefore update your CSS variables. It is absolutely necessary to regenerate your tokens with the command ",e.jsx(n.code,{children:"cunningham -g css,ts,js"})," to get the new CSS variables."]}),`
`,e.jsxs(n.p,{children:["In the case of theme tokens, all primitive values are in ",e.jsx(n.code,{children:"theme.globals"}),`. This corresponds to primitive colors, transitions, fonts, spacings, breakpoints, font weights, font families, etc.
As a result, all contextual values are in `,e.jsx(n.code,{children:"theme.contextuals"}),". This corresponds to background colors, content colors, border colors, palette colors, etc."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`// Old structure
{
  "themes": {
    "default": {
      "theme": {
        "colors": "...",
        "font": "...",
        "spacings": "...",
        "breakpoints": "...",
        ...
      },
      "components": {
        "button": {
          "...": "..."
        }
      }
    }
  }
}


// New structure
{
  "themes": {
    "default": {
      "globals": {
        "colors": "...",
        "font": "...",
        "spacings": "...",
        "breakpoints": "...",
        ...
      },
      "contextuals": {
        "background": {
          "...": "..."
        },
        "content": {
          "...": "..."
        },
        "border": {
          "...": "..."
        }
      },
      "components": {
        "button": {
          "...": "..."
        },
        ...
      }
    }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"migration-steps",children:e.jsx(n.strong,{children:"Migration Steps"})}),`
`,e.jsx(n.h3,{id:"1-update-dependencies",children:e.jsx(n.strong,{children:"1. Update Dependencies"})}),`
`,e.jsxs(n.p,{children:["First, update your ",e.jsx(n.code,{children:"package.json"})," to use version 4.0.0:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "dependencies": {
    "@gouvfr-lasuite/cunningham-react": "^4.0.0"
  }
}
`})}),`
`,e.jsx(n.h3,{id:"2-regenerate-tokens",children:e.jsx(n.strong,{children:"2. Regenerate Tokens"})}),`
`,e.jsx(n.p,{children:"Run the token generation command to get the new CSS variables:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`cunningham -g css,ts,js
`})}),`
`,e.jsx(n.p,{children:"This command will generate the new CSS variables compatible with the new structure."}),`
`,e.jsx(n.h3,{id:"3-update-css-variables-in-your-code",children:e.jsx(n.strong,{children:"3. Update CSS Variables in Your Code"})}),`
`,e.jsx(n.p,{children:"All your references to old CSS variables will need to be updated. The new variables follow this structure:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Old structure (v3) */
.test {
  color: var(--c--theme--colors--primary-500);
}

/* New structure (v4) */
.test {
  color: var(--c--globals--colors--brand-500);
  color: var(--c--contextuals--background--semantic--brand--primary);
  color: var(--c--contextuals--content--semantic--brand--primary);
  color: var(--c--contextuals--border--semantic--brand--primary);
  color: var(--c--contextuals--palette--brand--primary);
}
`})}),`
`,e.jsx(n.h3,{id:"3-update-button-props",children:e.jsx(n.strong,{children:"3. Update Button Props"})}),`
`,e.jsxs(n.p,{children:["For buttons, you need to update the ",e.jsx(n.code,{children:"color"})," and ",e.jsx(n.code,{children:"variant"}),` props to use the new structure.
The color prop corresponds to the primitive color and the variant prop corresponds to the button type.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`/* Old structure (v3) */
<Button color="primary" />

/* New structure (v4) */
<Button color="brand" variant="primary" />
<Button color="neutral" variant="secondary" />
<Button color="error" variant="tertiary" />
<Button color="warning" variant="bordered" />
`})}),`
`,e.jsx(n.h3,{id:"4-verify-accessibility",children:e.jsx(n.strong,{children:"4. Verify Accessibility"})}),`
`,e.jsx(n.p,{children:"The new architecture automatically ensures WCAG accessibility standards compliance through methodical standardization of luminance values (L*). Contrast ratios are now consistent regardless of the selected theme or display mode."}),`
`,e.jsx(n.h2,{id:"migration-benefits",children:e.jsx(n.strong,{children:"Migration Benefits"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enhanced Accessibility"}),": Automatic compliance with WCAG standards"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mode Management"}),": Native support for light/dark modes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visual Consistency"}),": Automatic propagation of color changes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simplified Maintenance"}),": No need to re-evaluate accessibility parameters when adding new themes"]}),`
`]}),`
`,e.jsx(n.h2,{id:"important-notes",children:e.jsx(n.strong,{children:"Important Notes"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mandatory Migration"}),": The update is not optional as all CSS variables have changed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Testing Required"}),": Verify that all your custom components using CSS variables work correctly after migration"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Documentation"}),": Consult the official documentation for new color patterns and best practices"]}),`
`]}),`
`,e.jsx(n.p,{children:"This migration represents a significant but necessary investment to benefit from a more robust, accessible, and maintainable design system."})]})}function y(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{y as default};
