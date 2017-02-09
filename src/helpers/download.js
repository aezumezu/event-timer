export default function DownloadSession(records) {
  let csvData = "data:text/csv;charset=utf-8,";
  const docTitle = `Toastmaster program ${new Date()}.csv`;
  csvData += "Speech title, Time Alloted, Time Used\n";
  records.forEach((record, index) => {
    csvData += `${record.title}, ${record.time}, ${record.timeUsed}\n`;
  });

  let encodedUri = encodeURI(csvData);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", docTitle);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
