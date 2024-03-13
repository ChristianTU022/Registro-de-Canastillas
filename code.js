function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Registro Canastillas Google Apps Script');
}

function getHtmlData (nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}