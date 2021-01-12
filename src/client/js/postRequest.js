const postRequest = async (url, data) => {
    const request = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        return await request.json();
    } catch (error) {
        return error;
    }
};

export { postRequest };