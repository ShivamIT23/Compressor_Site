import { Worker, Viewer } from "@react-pdf-viewer/core";
import { useState } from "react";

export function PDFViewer({ file }: { file: File }) {
  const [pdfSrc, setPdfSrc] = useState<string | null>(null);

  const reader = new FileReader();
  reader.onload = () => {
    setPdfSrc(reader.result as string);
  };
  reader.readAsDataURL(file);

  return (
    <div style={{ height: "500px" }}>
      {pdfSrc && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfSrc} />
        </Worker>
      )}
    </div>
  );
}
