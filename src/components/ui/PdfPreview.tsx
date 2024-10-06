import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"; // Ensure default styles are applied
import { useEffect, useState } from "react";

export function PDFViewer({ file }: { file: File }) {
  const [pdfSrc, setPdfSrc] = useState<string | null>(null);

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      setPdfSrc(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, [file]);

  return (
    <div className="h-full w-fullmt-5 text-center flex justify-center scale-90">
      {pdfSrc && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          {/* Render only the PDF without additional controls */}
          <Viewer
            fileUrl={pdfSrc}
            plugins={[]} // Disable all plugins if there are any
          />
        </Worker>
      )}
    </div>
  );
}
