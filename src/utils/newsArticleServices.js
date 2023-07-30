export const getArticleId = (id) => {
  return id.split("/").at(-1);
};
