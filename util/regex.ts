export const extractFlightDetail = (text: string) => {
    console.log("Extracting flight details from:", text);

    const normalizedText = text.toLowerCase();

    const airlineMatch = normalizedText.match(/(?:hãng|airline|hãng hàng không):?\s*([\w\s]+)/i);
    const fromMatch = normalizedText.match(/(?:từ|khởi hành|xuất phát|nơi đi):?\s*([\w\s]+)/i);
    const toMatch = normalizedText.match(/(?:đến|điểm đến|nơi đến):?\s*([\w\s]+)/i);
    const dateMatch = normalizedText.match(/(?:ngày|date):?\s*(\d{1,2}\/\d{1,2}\/\d{4})/);
    const timeMatch = normalizedText.match(/(?:giờ bay|time):?\s*(\d{1,2}:\d{2}\s*(?:am|pm)?)/);

    const flightDetails = {
        airline: airlineMatch ? airlineMatch[1].trim() : null,
        from: fromMatch ? fromMatch[1].trim() : null,
        to: toMatch ? toMatch[1].trim() : null,
        date: dateMatch ? dateMatch[1] : null,
        time: timeMatch ? timeMatch[1] : null
    };

    console.log("Extracted details:", flightDetails);
    return flightDetails;
};
