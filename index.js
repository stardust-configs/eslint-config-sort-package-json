module.exports = {
  extends: ['plugin:jsonc/base', 'plugin:jsonc/prettier'],
  overrides: [
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-array-values': [
          'warn',
          {
            pathPattern: '.*',
            order: {
              type: 'asc',
            },
          },
        ],
        /**
         * Sort based on the package.json specifics
         *
         * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json
         */
        'jsonc/sort-keys': [
          'warn',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'homepage',
              'bugs',
              'license',
              'author',
              'copntributors',
              'funding',
              'files',
              'main',
              'browser',
              'bin',
              'man',
              'directories',
              'repository',
              'scripts',
              'config',
              'dependencies',
              'devDependencies',
              'peerDependencies',
              'peerDependenciesMeta',
              'bundleDependencies',
              'optionalDependencies',
              'overrides',
              'engines',
              'os',
              'cpu',
              'private',
              'publishConfig',
              'workspaces',
              {
                order: {
                  type: 'asc',
                },
              },
            ],
          },
          {
            pathPattern: '^bugs$',
            order: ['url', 'email'],
          },
          {
            pathPattern: `^(author|contributors)$`,
            order: ['name', 'email', 'url'],
          },
          {
            pathPattern: '^funding$',
            order: ['type', 'url'],
          },
          {
            pathPattern: '^directories$',
            order: ['bin', 'man'],
          },
          {
            pathPattern: '^repository$',
            order: ['type', 'url', 'directory'],
          },
          {
            pathPattern: '.*',
            order: {
              type: 'asc',
            },
          },
        ],
      },
    },
  ],
}
