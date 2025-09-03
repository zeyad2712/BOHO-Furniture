# Google Sheets Integration Setup Guide

This guide will help you set up automatic export of contact form submissions to Google Sheets.

## Step 1: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code and paste the contents of `google-apps-script.js`
4. Save the project with a name like "BOHO Furniture Contact Form"

## Step 2: Deploy as Web App

1. In your Google Apps Script project, click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following options:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click "Deploy"
5. **Copy the Web App URL** - you'll need this for the next step

## Step 3: Update Your React App

1. Open `src/utils/googleSheetsIntegration.js`
2. Replace `YOUR_SCRIPT_ID` with your actual Google Apps Script URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec';
   ```

## Step 4: Test the Integration

1. Fill out your contact form
2. Submit the form
3. Check your Google Drive for a new spreadsheet named "BOHO Furniture Contact Form"
4. The data should appear in the spreadsheet automatically

## Features

### Automatic Export
- Every form submission is automatically sent to Google Sheets
- Data is stored locally AND in Google Sheets
- If Google Sheets is unavailable, local storage still works

### Manual Export
- Use the "Send to Google Sheets" button to export all existing submissions
- Use the "Export as JSON" button to download data as a file

### Data Structure
The Google Sheet will have these columns:
- **ID**: Unique identifier for each submission
- **Timestamp**: When the submission was made
- **Name**: User's name
- **Phone**: User's phone number
- **Message**: User's message
- **Date Added**: When the data was added to the sheet

## Troubleshooting

### If submissions aren't appearing in Google Sheets:

1. **Check the script URL**: Make sure you've updated the URL in `googleSheetsIntegration.js`
2. **Check permissions**: Ensure the web app is deployed with "Anyone" access
3. **Check browser console**: Look for any error messages
4. **Test the script**: Run the `testScript()` function in Google Apps Script

### If you get CORS errors:

1. Make sure you're using `mode: 'no-cors'` in the fetch request (already included)
2. Check that the Google Apps Script is deployed as a web app, not just saved

### If the spreadsheet isn't created:

1. Check that you have permission to create files in Google Drive
2. The script will create a spreadsheet named "BOHO Furniture Contact Form"
3. You can change the name in the `getOrCreateSpreadsheet()` function

## Security Notes

- The web app is set to "Anyone" access for simplicity
- In production, you might want to restrict access
- All data is sent over HTTPS
- The script only processes data you send to it

## Customization

### Change Spreadsheet Name
Edit the `sheetName` variable in the `getOrCreateSpreadsheet()` function:
```javascript
const sheetName = 'Your Custom Sheet Name';
```

### Add More Fields
1. Update the `setupHeaders()` function to include new columns
2. Update the `addSingleSubmission()` function to include new data
3. Update your React form to collect the new data

### Change Data Format
Modify the `addSingleSubmission()` function to change how data is stored in the sheet.

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Check the Google Apps Script execution log
3. Verify all URLs and permissions are correct
