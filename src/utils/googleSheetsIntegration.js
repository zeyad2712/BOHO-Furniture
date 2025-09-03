// Google Sheets Integration for Contact Form Submissions

// Google Apps Script URL - Replace with your actual script URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw6N1sNzXTu8GlBsX03MyNt_FCBSaBntyiuH7H1kNCqGt4nO6fLtr41EMyy2iM2EOJz/exec';

// Function to send data to Google Sheets
export const sendToGoogleSheets = async (submissionData) => {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'addSubmission',
                data: submissionData
            })
        });

        // Since we're using no-cors mode, we can't read the response
        // But we can assume success if no error is thrown
        return {
            success: true,
            message: 'Data sent to Google Sheets successfully'
        };
    } catch (error) {
        console.error('Error sending to Google Sheets:', error);
        return {
            success: false,
            message: 'Error sending to Google Sheets',
            error: error.message
        };
    }
};

// Function to send all submissions to Google Sheets
export const exportAllToGoogleSheets = async () => {
    try {
        const { getAllContactSubmissions } = await import('./contactStorage');
        const allSubmissions = getAllContactSubmissions();
        
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'addMultipleSubmissions',
                data: allSubmissions.submissions
            })
        });

        return {
            success: true,
            message: 'All submissions exported to Google Sheets successfully'
        };
    } catch (error) {
        console.error('Error exporting to Google Sheets:', error);
        return {
            success: false,
            message: 'Error exporting to Google Sheets',
            error: error.message
        };
    }
};

// Function to test Google Sheets connection
export const testGoogleSheetsConnection = async () => {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'testConnection'
            })
        });

        return {
            success: true,
            message: 'Google Sheets connection test successful'
        };
    } catch (error) {
        console.error('Error testing Google Sheets connection:', error);
        return {
            success: false,
            message: 'Error testing Google Sheets connection',
            error: error.message
        };
    }
};
