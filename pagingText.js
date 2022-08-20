const calculatePages = (text, limit) => {
  const pages = Math.ceil(text.length / limit);
  let pagingChars = 3;

  if (pages < 10) {
    pagingChars += pages * (2 * 1) + 3;
  } else if (pages < 100) {
    pagingChars += pages * (2 * 2) + 3;
  } else if (pages < 100) {
    pagingChars += pages * (2 * 3) + 3;
  }

  return Math.ceil((text.length + pagingChars) / limit);
};

const solution = (text, limit) => {
  const output = [];
  let start = 0;
  let page = 1;

  const accuratePages = calculatePages(text, limit);

  const fixedPagingChars = 3;
  while (start < text.length) {
    let pagingChars = fixedPagingChars;

    if (page < 10) {
      pagingChars += 2 * 1;
    } else if (page < 100) {
      pagingChars += 2 * 2;
    } else if (page < 100) {
      pagingChars += 2 * 3;
    }

    const pageTextLimit = limit - pagingChars;

    const pageContent = `${text.substr(
      start,
      pageTextLimit
    )}<${page}/${accuratePages}>`;

    output.push(pageContent);

    start += pageTextLimit;
    page++;
  }

  return output;
};

console.log(solution("hello world!", 10));
