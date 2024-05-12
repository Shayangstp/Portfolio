export const CreatePDFPage = (document, page) => {
  return new Promise((resolve, reject) => {
    if (!document || !page) return reject();
    document
      .getPage(page)
      .then((pageDocument) => {
        resolve(pageDocument);
      })
      .catch((error) => reject(error));
  });
};
