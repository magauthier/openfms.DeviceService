import mq from '../../pkg/mq/sender';

const receive = async (request, result) => {
    try {
        console.log('position.receive');
        console.log(request.body);

        request.body.Source = require('../../package.json').name;

        // Send to other microservices
        console.log('position.MQ');
        const broker = await mq.getInstance();
        await broker.send('openfms.position', Buffer.from(JSON.stringify(request.body)));

        result.send();
    }
    catch (error) {
        console.log(error);
        result.send(error);
    }
};

export default { receive };