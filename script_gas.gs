function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
    const data = JSON.parse(e.postData.contents);

    const values = sheet.getDataRange().getValues();
    const headers = values[0];
    const idIndex = headers.indexOf("ID");
    const statusIndex = headers.indexOf("Status");
    const responsavelIndex = headers.indexOf("Responsável");

    for (let i = 1; i < values.length; i++) {
      if (values[i][idIndex] == data.id) {
        if (data.status) sheet.getRange(i + 1, statusIndex + 1).setValue(data.status);
        if (data.responsavel) sheet.getRange(i + 1, responsavelIndex + 1).setValue(data.responsavel);
        return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }));
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'erro', mensagem: 'ID não encontrado' }));
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'erro', mensagem: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
