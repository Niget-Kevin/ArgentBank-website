export async function loginApi(email, password) {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error('Failed to login');
        }
        const data = await response.json();
        return data.token;
    } catch (error) {
        throw new Error('Failed to login');
    }
}
