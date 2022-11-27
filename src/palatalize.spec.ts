import palatalize from "./palatalize";
import decline from "./decline";
import { Gender } from './util';

it("skips exceptions", () => {
  expect(palatalize("zars", decline("zars"))).toBe("zar");
  expect(palatalize("tētis", decline("tētis"))).toBe("tēt");
  expect(palatalize('flote', decline('flote', Gender.Feminine))).toBe('flot');
  expect(palatalize("kaķis", decline("kaķis"))).toBe("kaķ");
  expect(palatalize('aste', decline('aste', Gender.Feminine))).toBe('ast');
});

it("palatalizes", () => {
  expect(palatalize("lācis", decline("lācis"))).toBe("lāč");
  expect(palatalize("briedis", decline("briedis"))).toBe("briež");
  expect(palatalize("brālis", decline("brālis"))).toBe("brāļ");
  expect(palatalize('vāze', decline('vāze', Gender.Feminine))).toBe('vāž');
  expect(palatalize('krāsns', decline('krāsns', Gender.Feminine))).toBe(
    'krāšņ',
  );
});
