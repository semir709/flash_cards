// export const getList = (id, startIndex, endIndex) => {
//   const data = `*[_type == "words" && category->_id == "${id}" ]{
//     _id,
//     word,
//     translation,
//     pronunciation,
//     gramar,
//   }[${startIndex}..${endIndex}]`;

//   return data;
// };

export const getCategories = (language, startIndex, endIndex) => {
  const data = `*[_type == "category" && language->slug.current == "${language}" ]{
    _id,
    category_name
  }[${startIndex}..${endIndex}]`;

  return data;
};

export const getWords = (id, startIndex, endIndex) => {
  const data = `*[_type == "words" && category->_id == "${id}" ]{
    _id,
    word,
    translation,
    pronunciation,
    gramar,
  }[${startIndex}..${endIndex}]`;

  return data;
};

export const getWordsFull = (id) => {
  const data = `*[_type == "words" && _id == "${id}"]{
    _id,
    word,
    translation,
    pronunciation,
    gramar,
    context
}`;
  return data;
};
