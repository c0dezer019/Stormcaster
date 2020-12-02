import {
    backendPOST,
    backendGET,
    backendUPDATE,
    backendDELETE,
} from '../config/axios';

export default class LocationModel {
    static create(data) {
        return backendPOST({
            url: `/weather/location/add`,
            data: JSON.stringify(data),
        });
    }

    static retrieve(id) {
        return backendGET({
            url: `/weather/location/get/${id}`,
        });
    }

    static update(newData, id) {
        return backendUPDATE({
            url: `/weather/location/update/${id}`,
            data: JSON.stringify(newData),
        });
    }

    static delete(id) {
        return backendDELETE({
            url: `weather/location/delete/${id}`,
        });
    }
}
