export const postCity = async (city: string, url: string) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ city }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};