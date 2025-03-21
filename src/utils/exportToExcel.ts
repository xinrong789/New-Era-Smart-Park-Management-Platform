import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
function exportToExcel(data: any, header: string[]) {
  const ws = XLSX.utils.json_to_sheet(data, { header });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws);
  const buf = XLSX.write(wb, { bookType: "xlsx", type: "buffer" });
  saveAs(
    new Blob([buf], { type: "application/octet-stream" }),
    "selecteddata.xlsx"
  );
}
export default exportToExcel;
