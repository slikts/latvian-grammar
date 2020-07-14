import decline, { Declension } from "./decline";
import { genders } from "./util";

it("declines I", () => {
  expect(decline("koks")).toEqual(Declension(1, "s"));
  expect(decline("ceļš")).toEqual(Declension(1, "š"));
});

it("declines II", () => {
  expect(decline("skapis")).toEqual(Declension(2, "is", false));
  expect(decline("mēness")).toEqual(Declension(2, "s", true));
});

it("declines III", () => {
  expect(decline("medus")).toEqual(Declension(3, "us"));
});

it("declines IV", () => {
  expect(decline("māja", genders.feminine)).toEqual(Declension(4, "a"));
  expect(decline("puika")).toEqual(Declension(4, "a"));
});

it("declines V", () => {
  expect(decline("egle", genders.feminine)).toEqual(Declension(5, "e"));
  expect(decline("bende")).toEqual(Declension(5, "e"));
});

it("declines VI", () => {
  expect(decline("pils", genders.feminine)).toEqual(Declension(6, "s"));
  expect(decline("ļaudis")).toEqual(Declension(6, "is", true));
});

it("throws on invalid", () => {
  expect(() => void decline("abc")).toThrow();
});
