#!/usr/bin/env node

import { Command } from 'commander';

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
    .action((options) => {
      console.log('Its work');
    });

  program.parse();
};
