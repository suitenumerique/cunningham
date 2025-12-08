import { buildRefs, getThemesFromGlobals } from "./index";

describe("buildRefs", () => {
  it("should replace raw values by ref keys", () => {
    expect(
      buildRefs({
        theme: {
          colors: {
            "primary-500": "blue",
          },
        },
      }),
    ).toEqual({
      theme: {
        colors: {
          "primary-500": "ref(theme.colors.primary-500)",
        },
      },
    });
  });
});

describe("getThemesFromGlobals", () => {
  it("should return a theme from a set of globals", () => {
    const themes = getThemesFromGlobals({
      colors: { "brand-500": "blue" },
      font: { families: { base: "Comic Sans MS" } },
    });

    expect(Object.keys(themes)).toEqual(["light", "dark"]);
    expect(themes.light.globals.colors["brand-500"]).toEqual("blue");
    expect(themes.dark.globals.colors["brand-500"]).toEqual("blue");
    expect(themes.light.globals.font.families.base).toEqual("Comic Sans MS");
    expect(themes.dark.globals.font.families.base).toEqual("Comic Sans MS");
    expect(themes.light.contextuals).toBeDefined();
    expect(themes.dark.contextuals).toBeDefined();
  });

  it("should allow to prefix the theme names", () => {
    const themes = getThemesFromGlobals({}, { prefix: "custom" });

    expect(Object.keys(themes)).toEqual(["custom-light", "custom-dark"]);
  });

  it("should allow to get theme for a subset of variants", () => {
    const themes = getThemesFromGlobals({}, { variants: ["light"] });

    expect(Object.keys(themes)).toEqual(["light"]);
  });

  it("should allow to override/extend themes", () => {
    const themes = getThemesFromGlobals(
      {},
      {
        overrides: {
          components: {
            button: {
              "font-family": "Papyrus",
            },
          },
        },
      },
    );

    expect(themes.light.components.button["font-family"]).toEqual("Papyrus");
  });
});
