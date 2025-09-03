// Google Apps Script for BOHO Furniture Contact Form
// Deploy this script in Google Apps Script and get the web app URL

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    
    // Get or create the spreadsheet
    const spreadsheet = getOrCreateSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Set up headers if this is the first time
    setupHeaders(sheet);
    
    switch (action) {
      case 'addSubmission':
        addSingleSubmission(sheet, data.data);
        break;
      case 'addMultipleSubmissions':
        addMultipleSubmissions(sheet, data.data);
        break;
      case 'testConnection':
        return ContentService.createTextOutput(JSON.stringify({
          success: true,
          message: 'Connection successful'
        })).setMimeType(ContentService.MimeType.JSON);
      default:
        throw new Error('Unknown action: ' + action);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data processed successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Error processing data',
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSpreadsheet() {
  // Replace 'BOHO Furniture Contact Form' with your desired sheet name
  const sheetName = 'BOHO Furniture Contact Form';
  
  // Try to find existing spreadsheet
  const files = DriveApp.getFilesByName(sheetName);
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next());
  }
  
  // Create new spreadsheet if it doesn't exist
  const newSpreadsheet = SpreadsheetApp.create(sheetName);
  
  // Set up the sheet with proper permissions
  const sheet = newSpreadsheet.getActiveSheet();
  sheet.setName('Contact Submissions');
  
  return newSpreadsheet;
}

function setupHeaders(sheet) {
  const lastRow = sheet.getLastRow();
  
  // Only add headers if the sheet is empty
  if (lastRow === 0) {
    const headers = [
      'ID',
      'Timestamp',
      'Name',
      'Phone',
      'Message',
      'Date Added'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#16a34a');
    headerRange.setFontColor('white');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, headers.length);
  }
}

function addSingleSubmission(sheet, submissionData) {
  const rowData = [
    submissionData.id || '',
    submissionData.timestamp || new Date().toISOString(),
    submissionData.name || '',
    submissionData.phone || '',
    submissionData.message || '',
    new Date().toLocaleString()
  ];
  
  sheet.appendRow(rowData);
  
  // Auto-resize columns after adding data
  sheet.autoResizeColumns(1, rowData.length);
}

function addMultipleSubmissions(sheet, submissionsArray) {
  if (!Array.isArray(submissionsArray)) {
    throw new Error('Submissions data must be an array');
  }
  
  const rowsData = submissionsArray.map(submission => [
    submission.id || '',
    submission.timestamp || new Date().toISOString(),
    submission.name || '',
    submission.phone || '',
    submission.message || '',
    new Date().toLocaleString()
  ]);
  
  if (rowsData.length > 0) {
    const startRow = sheet.getLastRow() + 1;
    sheet.getRange(startRow, 1, rowsData.length, rowsData[0].length).setValues(rowsData);
    
    // Auto-resize columns after adding data
    sheet.autoResizeColumns(1, rowsData[0].length);
  }
}

// Test function to verify the script works
function testScript() {
  const testData = {
    action: 'addSubmission',
    data: {
      id: 'test-' + Date.now(),
      timestamp: new Date().toISOString(),
      name: 'Test User',
      phone: '0501234567',
      message: 'This is a test submission'
    }
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
