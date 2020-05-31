import mq from '../../mq/sender';

const add = async (request, result) => {
    try {
        // Save in storage
        console.log('position.Storage');
        console.log(request.body);

        request.body.Source = 'DeviceService';

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

export default { add };