import inflect from "./inflect";

it("inflects", () => {
  expect(inflect("mēness").inflections).toMatchSnapshot();
});
