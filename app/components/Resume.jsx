import React from "react";
import PDFDownload from "./PDFDownload";
import PDFViewer from "./PDFViewer";
import { useLocale } from "next-intl";
import DescriptionIcon from "@mui/icons-material/Description";

const Resume = () => {
  const localeActive = useLocale();
  return (
    <div dir={localeActive === "en" ? "ltr" : "rtl"}>
      <div id="header" className="ms-16 mt-10 flex items-center">
        <span>
          <DescriptionIcon className="text-[50px]" />
        </span>
        <span className="text-[70px]">MY.</span>
        <span className="text-[20px] md:text-[30px] text-red-600 md:mt-7">
          {" "}
          Resume
        </span>
      </div>
      <PDFDownload />
      <PDFViewer />
    </div>
  );
};

export default Resume;
