const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
}

export const formatMessageTime = (date: Date | string | number = new Date()): string => {
    const d = date instanceof Date ? date : new Date(date);

    if (isNaN(d.getTime())) return "--:--";

    return d.toLocaleTimeString([], TIME_OPTIONS);
}

