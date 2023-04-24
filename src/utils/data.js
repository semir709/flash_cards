export const getData = (indexStart, indexEnd) => {
  const data = `*[_type == "words"]{
    _id,
    word,
    translation,
    gramar
}[${indexStart}...${indexEnd}]`;
  return data;
};
