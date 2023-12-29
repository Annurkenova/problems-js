import Bot from "./Bot";

type Piece = "x" | "o" | "";

class GryffindorBot extends Bot {
  constructor() {
    super("Gryffindor Bot", "/public/gryffindor.webp");
  }

  // Реализуйте логику хода для GryffindorBot
  move(board: Piece[]) {
    // Ваш код для хода GryffindorBot
    // Возможно, вы захотите реализовать более умную логику для GryffindorBot
    // В текущей реализации это просто пример
    const emptyCells = board.reduce((acc, cell, index) => {
      if (cell === "") {
        acc.push(index);
      }
      return acc;
    }, [] as number[]);

    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      return emptyCells[randomIndex];
    } else {
      // Доска полностью заполнена, бот не может сделать ход
      return -1;
    }
  }
}

export default GryffindorBot;
