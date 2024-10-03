"use client"

import { ExcelPreview } from './ExcelPreview';

import React, { useRef, useState } from 'react';
import { PDFViewer } from './PdfPreview';

export default function FileGetter() {
  const [fileContent, setFileContent] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (event : React.ChangeEvent<HTMLInputElement> ) => {
    const file = event.target?.files?.[0];
    setFileContent(file || null);
    
    };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} ref={fileInputRef} className='hidden' />
      {fileContent && <p>File Selected : {fileContent.name}</p>}
      {fileContent && <FilePreview file={fileContent} />}
    </div>
  );
}


function FilePreview({ file }: { file: File }) {

  const fileType = file.type;

  const [textContent , setTextContent] = useState<string | null>(null);
  React.useEffect(()=>{
    if(fileType.includes("text")){
      const reader = new FileReader();
      reader.onload = (e) => {
        setTextContent(e.target?.result as string);
      };
      reader.readAsText(file);
    }
    else {
      setTextContent(null);
    }
  } , [file , fileType])


    if (fileType.includes("image")) {

      const imageURL = URL.createObjectURL(file);

      return <img src={imageURL} alt="File Preview" style={{ maxWidth: "300px" }} />;

    } else if (fileType === "application/pdf") {

      return <PDFViewer file={file} />;

    } else if (fileType.includes("spreadsheet") || fileType.includes("csv")) {

      return <ExcelPreview file={file} />;

    } else if (fileType.includes("text")) {
      return <pre>{textContent !== null ? textContent : "Loading..."}</pre>
    } else {
      return <p>Preview not available for this file type.</p>;
    }
  }