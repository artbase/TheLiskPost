const { Application, genesisBlockDevnet, configDevnet, utils } = require('lisk-sdk');

const appConfig = utils.objects.mergeDeep({}, configDevnet, { 
    label: 'the-lisk-post-app',
    genesisConfig: { communityIdentifier: 'article' },
    rpc: {
        enable: true,
        mode: 'ws',
        port: 8888,
    },
    network: {
        port: 8887,
    },
    logger: {
        consoleLogLevel: 'info',
    },
});

const app = Application.defaultApplication(genesisBlockDevnet, appConfig);

app
	.run()
	.then(() => app.logger.info('App started...'))
	.catch(error => {
		console.error('Faced error in application', error);
		process.exit(1);
	});