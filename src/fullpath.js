#!/usr/bin/env node
import path from 'path';

const getFullPath = (filepath) => {
  const pathResolved = path.resolve(filepath);
  return pathResolved;
};

export default getFullPath;
