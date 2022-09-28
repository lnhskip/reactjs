export const TYPE_ERROR = "error";
export const TYPE_WARN = "warn";
export const TYPE_INFO = "info";

const logger = (log, type = 'log') => {
    console[type](log);
}

export default logger;