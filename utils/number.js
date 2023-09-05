export function formatNumber(number) {
    if (number) {
        return Number(number).toLocaleString("ja-JP");
    }
    return 0;
}