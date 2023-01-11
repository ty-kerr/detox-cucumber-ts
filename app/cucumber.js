const args = [
    'e2e/features/**/*.feature',
    '--require-module ts-node/register',
    '--require e2e/hooks/*.ts',
    '--require e2e/steps/**/*.ts',
    '--format progress-bar',
    '--format @cucumber/pretty-formatter',
    '--publish-quiet',
].join(' ')

module.exports = {
    default: args,
}
