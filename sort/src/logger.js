class Logger {
    constructor(level) {
        this.level = level;
    }

    log(data) {
        return 'level: ' + this.level + ', data: ' + data;
    }
}

module.exports = Logger;