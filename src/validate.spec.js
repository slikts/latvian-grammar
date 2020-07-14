import validate from "./validate";

it("passes valid", () => {
  expect(validate("zivis")).toBe(true);
  expect(validate("kaķi")).toBe(true);
  expect(validate("tu")).toBe(true);
  expect(validate("viņš")).toBe(true);
  expect(validate("ābele")).toBe(true);
});

it("detects invalid", () => {
  expect(validate("abc")).toBe(false);
  expect(validate("wow")).toBe(false);
});
