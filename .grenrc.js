module.exports = {
    dataSource: 'commits',
    prefix: '',
    includeMessages: 'all',
    ignoreCommitsWith: ['release.yml', ':package:'],
    ignoreTagsWith: ['beta', 'v2.2.15'],
    changelogFilename: 'CHANGELOG.md'
}