export default class ErrorRepository {
  constructor () {
    this.errors = new Map(
      [
        [0, "Успешно"],
        [3, "Перенаправлено на другой адрес"],
        [5, "Внутренняя ошибка"]
      ]
    );
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}