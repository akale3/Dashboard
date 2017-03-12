class Data {
    constructor (label, data, labels) {
        this._label = label;
        this._data= data;
        this._labels = labels;
    }

    set label  (label)  {
        this._label = label
    }

    get label() {
        return this._label
    }

    set data  (data)  {
        this._data = data
    }

    get data() {
        return this._data
    }

     set labels  (labels)  {
        this._labels = labels
    }

    get labels() {
        return this._labels
    }
}