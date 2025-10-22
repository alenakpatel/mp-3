export const useHook = (value: number | null): string => {
    if (value !== null && value < 0) {
        return "red";
    }
    return "#2C2A4A";
};