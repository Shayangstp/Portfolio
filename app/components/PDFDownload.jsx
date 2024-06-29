"use client";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import DownloadIcon from "@mui/icons-material/Download";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useLocale, useTranslations } from "next-intl";

const PDFDownload = () => {
  const t = useTranslations("resume");
  const router = useRouter();
  const activeLocale = useLocale();

  // Check if the current path is a PDF download
  const isPDFDownload = router.asPath === "/Shayan-Golestanipour-Resume.pdf";

  useEffect(() => {
    if (isPDFDownload) {
      // Handle PDF download
      handlePDFDownload();
    }
  }, [isPDFDownload]);

  const handlePDFDownload = async () => {
    const pdfPath = "/pdf.pdf"; // Replace with the actual path to your PDF file
    const res = await fetch(pdfPath);
    const blob = await res.blob();
    console.log("Blob size:", blob.size);
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Shayan-Golestanipour-Resume.pdf"); // Set the desired file name here
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div className="flex gap-2 md:justify-end justify-center mt-2 md:mt-0 md:me-16">
      {!isPDFDownload && (
        <a
          href={"/Shayan-Golestanipour-Resume.pdf"}
          target="_blank"
          alt="cv"
          rel="noopener noreferrer"
        >
          <button
            variant="contained"
            className="py-2 px-6 rounded-md transition-all bg-red-500 flex gap-2 hover:bg-red-700"
          >
            <span>
              <PictureAsPdfIcon />
            </span>{" "}
            <span>{t("pdfPreview")}</span>
          </button>
        </a>
      )}
      {!isPDFDownload && (
        <button
          variant="contained"
          className="py-2 px-6 rounded-md transition-all bg-red-500 flex gap-2 hover:bg-red-700"
          onClick={handlePDFDownload}
        >
          <span>
            <DownloadIcon />
          </span>
          {t("downloadCV")}
        </button>
      )}
    </div>
  );
};

export default PDFDownload;
