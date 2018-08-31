const glob = './test/component/**/*.spec.js';
const src= './test/component/**/*.spec.js';

module.exports = {
    url: 'http://127.0.0.1:8080/',
    glob,
    src,
    watchGlob: [...src, ...glob],
    nyc: {
        include: src,
        sourceMap: false,
        glob,
        reportDir: 'coverage/component'
    },
    coverage: true
};
