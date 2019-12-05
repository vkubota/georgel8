exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tmp/spec/**/*.e2e-spec.js'],
};
