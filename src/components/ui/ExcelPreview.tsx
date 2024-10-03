import { useState, useEffect } from "react";
import * as XLSX from "xlsx";

interface RowData {
  [key: string]: string | number | null; // Define expected types for your data
}

interface ExcelViewerProps {
  file: File;
}

export function ExcelPreview({ file }: ExcelViewerProps) {
  const [data, setData] = useState<RowData[]>([]);

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target?.result as string;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      setData(sheet as RowData[]); // Type assertion to RowData[]
    };

    reader.readAsBinaryString(file);

    // Cleanup: Remove the file reading to avoid memory leaks or issues on unmount
    return () => {
      setData([]); // Optionally clear data if component unmounts
    };
  }, [file]); // Dependency array ensures it runs when `file` changes

  return (
    <table>
      <thead>
        <tr>
          {data.length > 0 &&
            Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((value, colIndex) => (
              <td key={colIndex}>{value !== null ? value : "N/A"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
