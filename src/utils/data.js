export const getData = (indexStart, indexEnd) => {
  const data = `*[_type == "words"]{
    _id,
    word,
    translation
}[${indexStart}...${indexEnd}]`;
  return data;
};
