export default function formatDate(date) {
    return Intl.DateTimeFormat("en-GB", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date));
}