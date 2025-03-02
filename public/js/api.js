/**
 * Send a request to the GPT API through our backend
 * @param {string} leetcodeUrl - The LeetCode problem URL
 * @param {string} userMessage - The user's question
 * @returns {Promise<string>} The assistant's response
 */
async function generateResponse(leetcodeUrl, userMessage) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ leetcodeUrl, userMessage }),
        });
        
        if (!response.ok) {
            throw new Error('API request failed');
        }
        
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error calling API:', error);
        throw new Error('Failed to generate response');
    }
}