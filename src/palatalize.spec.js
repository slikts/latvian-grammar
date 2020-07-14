import palatalize from "./palatalize";
import decline from "./decline";
import { genders } from "./util";

const { feminine } = genders;

it("skips exceptions", () => {
  expect(palatalize("zars", decline("zars"))).toBe("zar");
  expect(palatalize("tētis", decline("tētis"))).toBe("tēt");
  expect(palatalize("flote", decline("flote", feminine))).toBe("flot");
  expect(palatalize("kaķis", decline("kaķis"))).toBe("kaķ");
  expect(palatalize("aste", decline("aste", feminine))).toBe("ast");
});

it("palatalizes", () => {
  expect(palatalize("lācis", decline("lācis"))).toBe("lāč");
  expect(palatalize("briedis", decline("briedis"))).toBe("briež");
  expect(palatalize("brālis", decline("brālis"))).toBe("brāļ");
  expect(palatalize("vāze", decline("vāze", feminine))).toBe("vāž");
  expect(palatalize("krāsns", decline("krāsns", feminine))).toBe("krāšņ");
});
