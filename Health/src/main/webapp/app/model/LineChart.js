class LineChart extends CustomChart {

    constructor (type, data) {
        super();
        this._type = type;
        this._data= data;
    }

    set type  (type)  {
        this._type = type
    }

    get type() {
        return this._type
    }

    set data  (data)  {
        this._data = data
    }

    get data() {
        return this._data
    }
}