install:
	npm ci

gendiff:
	node bin/gendiff.js

jest:
	NODE_OPTIONS=--experimental-vm-modules npx jest