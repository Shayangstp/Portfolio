import pdfJS from "pdfjs-dist";

export const GetPDFDocument = async (path) => {
  pdfJS.GlobalWorkerOptions.workerSrc =
    window.location.origin + "/pdf.worker.min.js";

  return new Promise((resolve, reject) => {
    pdfJS
      .getDocument(path)
      .promise.then((document) => {
        resolve(document);
      })
      .catch(reject);
  });
};
