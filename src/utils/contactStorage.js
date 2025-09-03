// Utility functions for storing contact form submissions

// Function to add a new submission to the JSON file and Google Sheets
export const addContactSubmission = async (submissionData) => {
    try {
        // Create submission object with timestamp and ID
        const newSubmission = {
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            ...submissionData
        };

        // Store locally first
        const existingSubmissions = JSON.parse(localStorage.getItem('boho-contact-submissions') || '{"submissions": [], "lastUpdated": "", "totalSubmissions": 0}');
        
        existingSubmissions.submissions.push(newSubmission);
        existingSubmissions.lastUpdated = new Date().toISOString();
        existingSubmissions.totalSubmissions = existingSubmissions.submissions.length;
        
        // Store in localStorage
        localStorage.setItem('boho-contact-submissions', JSON.stringify(existingSubmissions, null, 2));
        
        // Also store individual submissions for easy access
        const individualKey = `contact-${newSubmission.id}`;
        localStorage.setItem(individualKey, JSON.stringify(newSubmission));
        
        // Try to send to Google Sheets (don't fail if this doesn't work)
        try {
            const { sendToGoogleSheets } = await import('./googleSheetsIntegration');
            await sendToGoogleSheets(newSubmission);
        } catch (sheetsError) {
            console.warn('Could not send to Google Sheets:', sheetsError);
            // Don't fail the whole operation if Google Sheets is unavailable
        }
        
        return {
            success: true,
            message: 'Submission stored successfully',
            submission: newSubmission
        };
    } catch (error) {
        console.error('Error storing contact submission:', error);
        return {
            success: false,
            message: 'Error storing submission',
            error: error.message
        };
    }
};

// Function to get all submissions
export const getAllContactSubmissions = () => {
    try {
        const stored = localStorage.getItem('boho-contact-submissions');
        return stored ? JSON.parse(stored) : { submissions: [], lastUpdated: "", totalSubmissions: 0 };
    } catch (error) {
        console.error('Error retrieving contact submissions:', error);
        return { submissions: [], lastUpdated: "", totalSubmissions: 0 };
    }
};

// Function to export submissions as JSON file
export const exportSubmissionsAsJSON = () => {
    try {
        const data = getAllContactSubmissions();
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        return true;
    } catch (error) {
        console.error('Error exporting submissions:', error);
        return false;
    }
};

// Function to clear all submissions
export const clearAllSubmissions = () => {
    try {
        localStorage.removeItem('boho-contact-submissions');
        
        // Remove individual submission keys
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('contact-')) {
                localStorage.removeItem(key);
            }
        });
        
        return true;
    } catch (error) {
        console.error('Error clearing submissions:', error);
        return false;
    }
};

// Function to export all submissions to Google Sheets
export const exportAllToGoogleSheets = async () => {
    try {
        const { exportAllToGoogleSheets: exportToSheets } = await import('./googleSheetsIntegration');
        const result = await exportToSheets();
        return result;
    } catch (error) {
        console.error('Error exporting to Google Sheets:', error);
        return {
            success: false,
            message: 'Error exporting to Google Sheets',
            error: error.message
        };
    }
};
