import ErrorRepository from "../src/error.js";


const errors = new ErrorRepository();

test("Check get error", () => {
  expect(errors.translate(0)).toEqual("Успешно");
});

test("Check get unknown error", () => {
  expect(errors.translate(1)).toEqual("Unknown error");
});