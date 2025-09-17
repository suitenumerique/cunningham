import path from "path";
import fs from "fs";
import Config from "Config";
import { run } from "ThemeGenerator";
import { cleanup } from "tests/Utils";

jest.mock("../Paths", () => ({
  workPath: () => __dirname,
}));

describe("CssGenerator", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    cleanup(__dirname);
  });

  afterEach(() => {
    cleanup(__dirname);
  });

  const testSelector = async (opt: string) => {
    const cssTokensFile = path.join(__dirname, Config.tokenFilename + ".css");
    expect(fs.existsSync(cssTokensFile)).toEqual(false);
    await run(["", "", "-g", "css", opt, "html"]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toMatchInlineSnapshot(`
"html {
	--c--globals--colors--primary: #055FD2;
	--c--globals--colors--secondary: #DA0000;
	--c--globals--colors--ternary-900: #022858;
	--c--globals--colors--ogre-odor-is-orange-indeed: #FD5240;
	--c--globals--font--sizes--m: 1rem;
	--c--globals--font--weights--medium: 400;
	--c--globals--font--families--base: Roboto;
	--c--globals--spacings--s: 1rem;
	--c--globals--transitions--ease: linear;
	--c--globals--input--border-color: var(--c--theme--colors--ternary-900);
	--c--contextuals--background--primary: #055FD2;
	--c--contextuals--content--primary: #055FD2;
	--c--contextuals--border--primary: #055FD2;
	--c--theme--colors--primary: #055FD2;
	--c--theme--colors--secondary: #DA0000;
	--c--theme--colors--ternary-900: #022858;
	--c--theme--colors--ogre-odor-is-orange-indeed: #FD5240;
	--c--theme--font--sizes--m: 1rem;
	--c--theme--font--weights--medium: 400;
	--c--theme--font--families--base: Roboto;
	--c--theme--spacings--s: 1rem;
	--c--theme--transitions--ease: linear;
	--c--theme--input--border-color: var(--c--theme--colors--ternary-900);
	--c--components--button--font-family: Times New Roman,Helvetica Neue,Segoe UI;
}
.cunningham-theme--dark{
	--c--globals--colors--primary: black;
}
.cunningham-theme--custom{
	--c--globals--colors--primary: green;
}
"
`);
  };

  it("Runs with -s options.", async () => {
    await testSelector("-s");
  });

  it("Runs with --selector options.", async () => {
    await testSelector("--selector");
  });

  it("Runs with  --utility-classes options.", async () => {
    const cssTokensFile = path.join(__dirname, Config.tokenFilename + ".css");
    expect(fs.existsSync(cssTokensFile)).toEqual(false);
    await run(["", "", "-g", "css", "-s", "html", "--utility-classes"]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toMatchInlineSnapshot(`
"html {
	--c--globals--colors--primary: #055FD2;
	--c--globals--colors--secondary: #DA0000;
	--c--globals--colors--ternary-900: #022858;
	--c--globals--colors--ogre-odor-is-orange-indeed: #FD5240;
	--c--globals--font--sizes--m: 1rem;
	--c--globals--font--weights--medium: 400;
	--c--globals--font--families--base: Roboto;
	--c--globals--spacings--s: 1rem;
	--c--globals--transitions--ease: linear;
	--c--globals--input--border-color: var(--c--theme--colors--ternary-900);
	--c--contextuals--background--primary: #055FD2;
	--c--contextuals--content--primary: #055FD2;
	--c--contextuals--border--primary: #055FD2;
	--c--theme--colors--primary: #055FD2;
	--c--theme--colors--secondary: #DA0000;
	--c--theme--colors--ternary-900: #022858;
	--c--theme--colors--ogre-odor-is-orange-indeed: #FD5240;
	--c--theme--font--sizes--m: 1rem;
	--c--theme--font--weights--medium: 400;
	--c--theme--font--families--base: Roboto;
	--c--theme--spacings--s: 1rem;
	--c--theme--transitions--ease: linear;
	--c--theme--input--border-color: var(--c--theme--colors--ternary-900);
	--c--components--button--font-family: Times New Roman,Helvetica Neue,Segoe UI;
}
.cunningham-theme--dark{
	--c--globals--colors--primary: black;
}
.cunningham-theme--custom{
	--c--globals--colors--primary: green;
} .clr-primary { color: var(--c--globals--colors--primary); }
.clr-secondary { color: var(--c--globals--colors--secondary); }
.clr-ternary-900 { color: var(--c--globals--colors--ternary-900); }
.clr-ogre-odor-is-orange-indeed { color: var(--c--globals--colors--ogre-odor-is-orange-indeed); }
.bg-primary { background-color: var(--c--globals--colors--primary); }
.bg-secondary { background-color: var(--c--globals--colors--secondary); }
.bg-ternary-900 { background-color: var(--c--globals--colors--ternary-900); }
.bg-ogre-odor-is-orange-indeed { background-color: var(--c--globals--colors--ogre-odor-is-orange-indeed); }
.bg-primary { background-color: var(--c--contextuals--background--primary); }
.fw-medium { font-weight: var(--c--globals--font--weights--medium); }
.fs-m { 
    font-size: var(--c--globals--font--sizes--m); 
    letter-spacing: var(--c--globals--font--letterspacings--m); 
    }
.f-base { font-family: var(--c--globals--font--families--base); }
.m-s { margin: var(--c--globals--spacings--s); }.mb-s { margin-bottom: var(--c--globals--spacings--s); }.mt-s { margin-top: var(--c--globals--spacings--s); }.ml-s { margin-left: var(--c--globals--spacings--s); }.mr-s { margin-right: var(--c--globals--spacings--s); }
.p-s { margin: var(--c--globals--spacings--s); }.pb-s { margin-bottom: var(--c--globals--spacings--s); }.pt-s { margin-top: var(--c--globals--spacings--s); }.pl-s { margin-left: var(--c--globals--spacings--s); }.pr-s { margin-right: var(--c--globals--spacings--s); }
.border-clr-primary { border-color: var(--c--contextuals--border--primary); }
.border-thin-primary { border: 1px solid var(--c--contextuals--border--primary); }
.clr-content-primary { color: var(--c--contextuals--content--primary); }
"
`);
  });
});
