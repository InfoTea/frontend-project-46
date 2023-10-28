#!/usr/bin/env node

import { Command } from 'commander';
import getFullPath from '../src/fullpath.js';

export default () => {
  const program = new Command();

  program
    .name('gendiff')
    .description('Show a help for gendiff package')
    .version('0.0.1');

  program
    .description('Compares two configuration files and shows a difference.')
    .arguments('<filepath1>')
    .arguments('<filepath2>')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format [type]', 'output format ', 'stylish')
    .action((path1, path2, options) => {
      const filepath1 = getFullPath(path1);
      const filepath2 = getFullPath(path2);
      console.log(`${filepath1}\n${filepath2}`);
    });

  program.parse();
};
