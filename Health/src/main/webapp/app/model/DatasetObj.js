class DatasetObj {

    constructor (label, data, backgroundColor,borderColor,borderWidth,fill) {
        this._label = label;
        this._data = data;
        this._backgroundColor = backgroundColor;
        this._borderColor = borderColor;
        this._borderWidth = borderWidth;
        this._fill = fill;
    }

    set fill  (fill)  {
             this._fill = fill;
            }

    get fill() {
        return this._fill;
    }
    
	set label  (label)  {
             this._label = label;
            }

    get label() {
        return this._label;
    }

    set data  (data)  {
        this._data = data;
    }

    get data() {
        return this._data;
    }

    set backgroundColor  (backgroundColor)  {
        this._backgroundColor = backgroundColor;
    }

    get backgroundColor() {
        return this._backgroundColor;
    }

    set borderColor  (borderColor)  {
        this._borderColor = borderColor;
    }

    get borderColor() {
        return this._borderColor;
    }

    set borderWidth  (borderWidth)  {
        this._borderWidth = borderWidth;
    }

    get borderWidth() {
        return this._borderWidth;
    }



  

}