module.exports = {
    dataSource: 'commits',
    prefix: '',
    includeMessages: 'all',
    ignoreCommitsWith: ['release.yml', ':package:'],
    ignoreTagsWith: ['beta', 'v2.2.15', 'v3.0.1-rc.1'],
    changelogFilename: 'docs/CHANGELOG.md'
}