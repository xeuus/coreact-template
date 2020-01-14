require('module-alias/register');
import {Server} from 'coreact/dist/server';
import express from 'express';

const pack = require('../package.json');
const version = pack.version.split('.').join('');
const path = require('path');
const app = express();
const mode = process.env.NODE_ENV || 'development';

const server = new Server({
	mode,
	provider: () => require('./provider'),
	assets: process.env.NODE_ENV !== 'production' ? [
		'/dist/app.js',
	] : [
		'/dist/app.js.gz',
		'/dist/app.css',
	],
	apiPrefix: '/api',
	proxies: {
		default: {
			address: process.env.API_ADDR,
		},
	},
	encrypt: true,
	version: +version,
	publicDir: ['/assets', path.resolve(__dirname, '../assets')],
	bundleDir: ['/dist', path.resolve(__dirname, '../bundle')],
	webpackOptions: process.env.NODE_ENV !== 'production' ? require('../webpack.config.js') : {},
	rootPath: path.resolve(__dirname, '..'),
	srcPath: path.resolve(__dirname, '../src'),
	distPath: path.resolve(__dirname, '../dist'),
	storagePrefix: 'coreact',
});
server.isolate(process.env.APP_NAME);
server.start(app);

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
process.on('uncaughtException', (err) => console.log(err));
