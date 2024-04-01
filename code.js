function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Registro Canastillas Google Apps Script');
}

function getHtmlData (nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function conectionSheets() {
    //Conectar Sheets a AppScript
   const sheetId = '1M4nEb_9WDStyuydThrceuUHJE4nWfCJNz0Gp_AU7gXE';
   const sheet = SpreadsheetApp.openById(sheetId);
    //Conectar Hojas especificas
   const p_Answer_Boxes = sheet.getSheetByName('Answer_Boxes');
   
   return { sheet, p_Answer_Boxes };
 }