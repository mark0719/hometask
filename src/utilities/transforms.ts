const CapitalizeFirstLetter = (sentence: string) => {
  return sentence
    .toLowerCase()
    .replace(/\b(?!and)(?:\w|\[.*?\])/g, function (s) {
      return s.toUpperCase();
    });
};

export {
  CapitalizeFirstLetter,
}