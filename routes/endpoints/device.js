import Repository from '../../pkg/repository/generic';
import Model from '../../model/device';

const get = async (request, response) => {
    console.log('device.get');

    await Repository.get(Model).then(result => {
        if (result.error) {
            console.log(`device.get failed : ${result.error}`);
            response.status(500);
        } else {
            response.json(result);
        }            
    });
};

const add = async (request, response) => {
    console.log(`device.add: ${JSON.stringify(request.body)}`);

    Repository.add(Model, request.body)
        .then(result => {
            if (result.error) {
                console.log(`device.add failed : ${result.error}`);
                response.status(400).send(result.error);
            } else {
                response.status(200).json({ '_id': result._id });
            }
        });
};

const clearAll = async (request, response) => {
    console.log(`device.clearAll`);

    Repository.clearAll(Model)
        .then(result => {
            if (result.error) {
                console.log(`device.clearAll failed : ${result.error}`);
                response.status(500);
            } else {
                response.status(200).send();
            }
        });
}

export default { get, add, clearAll };