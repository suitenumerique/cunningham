import path from "path";
import fs from "fs";
import Config from "Config";
import { run } from "ThemeGenerator";
import { cleanup } from "tests/Utils";

jest.mock("../Paths", () => ({
  workPath: () => __dirname,
}));

describe("JsGenerator", () => {
  beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    cleanup(__dirname);
  });

  afterEach(() => {
    cleanup(__dirname);
  });

  it("generates valid JS file.", async () => {
    const tokensFile = path.join(__dirname, Config.tokenFilename + ".js");
    expect(fs.existsSync(tokensFile)).toEqual(false);
    await run(["", "", "-g", "js"]);
    expect(fs.existsSync(tokensFile)).toEqual(true);
    // Verify file content exists and contains expected structure
    const content = fs.readFileSync(tokensFile).toString();
    expect(fs.readFileSync(tokensFile).toString()).toMatchInlineSnapshot(`
"export const tokens = {"themes":{"default":{"globals":{"colors":{"primary":"#055FD2","secondary":"#DA0000","ternary-900":"#022858","ogre-odor-is-orange-indeed":"#FD5240"},"font":{"sizes":{"m":"1rem"},"weights":{"medium":400},"families":{"base":"Roboto"}},"spacings":{"s":"1rem"},"transitions":{"ease":"linear"},"input":{"border-color":"#022858"}},"contextuals":{"background":{"primary":"#055FD2"},"content":{"primary":"#055FD2"},"border":{"primary":"#055FD2"}},"theme":{"colors":{"primary":"#055FD2","secondary":"#DA0000","ternary-900":"#022858","ogre-odor-is-orange-indeed":"#FD5240"},"font":{"sizes":{"m":"1rem"},"weights":{"medium":400},"families":{"base":"Roboto"}},"spacings":{"s":"1rem"},"transitions":{"ease":"linear"},"input":{"border-color":"#022858"}},"components":{"button":{"font-family":"Times New Roman,Helvetica Neue,Segoe UI"}}},"dark":{"globals":{"colors":{"primary":"black"}}},"custom":{"globals":{"colors":{"primary":"green"}}}}};
"
`);
    expect(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(0);
    expect(content).toContain("export const tokens = {");
    expect(content).toContain("themes");
    expect(content).toContain("default");
    expect(content).toContain("dark");
    expect(content).toContain("custom");
  });
});
