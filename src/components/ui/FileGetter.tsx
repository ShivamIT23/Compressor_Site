"use client";

import { ExcelPreview } from "./ExcelPreview";
import React, { useEffect, useRef, useState } from "react";
import { PDFViewer } from "./PdfPreview";
import Size from "./Size";

export default function FileGetter() {
  const [fileContent, setFileContent] = useState<File | null>(null);
  const [fileSize , setFileSize] = useState<number>(0);

  useEffect(()=>{
    setFileSize(fileContent ? parseFloat((fileContent.size /1024).toFixed(2)) : 0);
  },[fileContent]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    setFileContent(file || null);
  };

  return (
    <div className="h-full w-full min-h-fit flex justify-center pt-10">
      <div
        className={`h-5/6 w-5/6 min-h-fit bg-[#EFE5E5] rounded-[35px] flex flex-col items-center pt-16 ${
          fileContent && "relative"
        }`}
      >
        {fileContent && (
          <p className="mb-4">File Selected : {fileContent.name}</p>
        )}
        <div
          className={`h-4/6 w-5/6 flex flex-col justify-center text-center bg-[#D9D9D9] rounded-[20px] overflow-auto ${
            fileContent == null && "relative"
          }`}
        >
          {fileContent == null && (
            <>
              <div
                style={{
                  fontVariationSettings: "'slnt' -7",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
                }}
                className="h-2/6 w-full text-2xl sm:text-3xl flex flex-col justify-end lg:text-4xl font-bold text-[#514D4D]"
              >
                Upload File Here
              </div>
              <div className="text-9xl w-full text-[#3a3737] font-light flex flex-col justify-start text-center">
                &#43;
              </div>
            </>
          )}
          <input
            type="file"
            onChange={handleFileUpload}
            ref={fileInputRef}
            className={`z-30 absolute ${
              fileContent == null && "opacity-0 h-full w-full"
            } ${fileContent && "top-4 right-1/3"}`}
          />
          {fileContent && <FilePreview file={fileContent} />}
        </div>
        <div className="h-2/6 w-5/6 mt-6 min-h-fit grid grid-cols-12">
          <div className="col-span-8">
            <Size originalSize={fileSize} />
          </div>
          <div className="col-span-4 flex flex-col justify-center text-2xl lg:stext-3xl bg-green-500 m-12 font-semibold">
            <button>Convert</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilePreview({ file }: { file: File }) {
  const fileType = file.type;

  const [textContent, setTextContent] = useState<string | null>(null);
  React.useEffect(() => {
    if (fileType.includes("text")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTextContent(e.target?.result as string);
      };
      reader.readAsText(file);
    } else {
      setTextContent(null);
    }
  }, [file, fileType]);

  if (fileType.includes("image")) {
    const imageURL = URL.createObjectURL(file);

    return (
      <img
        src={imageURL}
        alt="File Preview"
        className="max-w-[300px] max-h-[300px] m-auto"
      />
    );
  } else if (fileType.includes("pdf")) {
    return <PDFViewer file={file} />;
  } else if (fileType.includes("spreadsheet") || fileType.includes("csv")) {
    return <ExcelPreview file={file} />;
  } else if (fileType.includes("text")) {
    return <pre className="bg-white text-black h-full min-h-fit flex flex-col justify-center">{textContent !== null ? textContent : "Loading..."}</pre>;
  } else {
    return <p>Preview not available for this file type.</p>;
  }
}
