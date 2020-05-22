// original from: http://mashe.hawksey.info/2014/07/google-sheets-as-a-database-insert-with-apps-script-using-postget-methods-with-ajax-example/
// original gist: https://gist.github.com/willpatera/ee41ae374d3c9839c2d6 

function doGet(e){
  return handleResponse(e);
}

var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service

function handleResponse(e) {
  try {
    // shortly after my original solution Google announced the LockService[1]
    // this prevents concurrent access overwritting data
    // [1] http://googleappsdeveloper.blogspot.co.uk/2011/10/concurrency-and-google-apps-script.html
    // we want a public lock, one that locks for all invocations
  
    var lock = LockService.getPublicLock();
    lock.waitLock(300000);  // wait 30 seconds before conceding defeat.
  
    // next set where we write the data - you could write to multiple/alternate destinations
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    if ('question' in e.parameter){
      var sheet = doc.getSheetByName('Questions');

      var nextRow = sheet.getLastRow()+1; // get next row
      var row = []; 
      row = [e.parameter['question'], new Date()]
      // more efficient to set values as [][] array than individually
      sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
          // return json success results
      SpreadsheetApp.flush();
    return ContentService
    .createTextOutput(JSON.stringify({"result":"success question flush2", "row":row, "rownum": nextRow}))
          .setMimeType(ContentService.MimeType.JSON);
    } 
    
    if ('gratitude' in e.parameter){
      var sheet = doc.getSheetByName('Gratitude');

      var nextRow = sheet.getLastRow()+1; // get next row
      var row = []; 
      row = [e.parameter['gratitude'], new Date()]
      // more efficient to set values as [][] array than individually
      sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
          // return json success results
      SpreadsheetApp.flush();
    return ContentService
    .createTextOutput(JSON.stringify({"result":"success gratitude flush2", "row":row, "rownum": nextRow}))
          .setMimeType(ContentService.MimeType.JSON);
    }
        // return json success results
    return ContentService
           .createTextOutput(JSON.stringify({"result":"nothing added"}))
          .setMimeType(ContentService.MimeType.JSON);
  } catch(e){
    // if error return this
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": e}))
          .setMimeType(ContentService.MimeType.JSON);
  } finally { //release lock
    lock.releaseLock();
  }
}
