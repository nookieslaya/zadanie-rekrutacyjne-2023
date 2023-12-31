// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainScss = require("../css/main.scss");
var _nav = require("../js/nav");
var _animation = require("../js/animation");
var _modal = require("../js/modal");
var _masonryLayout = require("masonry-layout");
var _masonryLayoutDefault = parcelHelpers.interopDefault(_masonryLayout);
var SimpleLightbox = require("8da2442e5207a532");
// grid gallery
new SimpleLightbox({
    elements: ".grid-gallery a",
    captionAttribute: "title"
});
window.onload = ()=>{
    const grid = document.querySelector(".grid");
    const masonry = new (0, _masonryLayoutDefault.default)(grid, {
        itemSelector: ".grid-item",
        gutter: 43,
        isFitWidth: true
    });
    loadMore();
};
// load more
const loadMore = ()=>{
    let loadMoreBtn = document.querySelector("#load-more");
    loadMoreBtn.addEventListener("click", ()=>{
        const gradient = document.querySelector(".gradient");
        const grid = document.querySelector(".grid");
        const masonry = new (0, _masonryLayoutDefault.default)(grid, {
            itemSelector: ".grid-item",
            gutter: 43
        });
        let currentItem = 9;
        let boxes = document.querySelectorAll(".box");
        for(let i = currentItem; i < currentItem + 3; i++)if (boxes[i]) {
            boxes[i].style.display = "grid";
            gradient.style.display = "none";
        }
        currentItem += 3;
        if (currentItem >= boxes.length) loadMoreBtn.style.display = "none";
    });
};
loadMore();
const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchInput = document.querySelector(".search-input input");
const searchIcon = document.querySelector(".search-icon img");
const closeIcon = document.querySelector(".search-input span");
searchIcon.addEventListener("click", ()=>{
    searchIcon.parentElement.classList.add("change");
    searchInputWrapper.classList.add("change");
    setTimeout(()=>{
        searchInput.focus();
    }, 1000);
});
closeIcon.addEventListener("click", ()=>{
    searchIcon.parentElement.classList.remove("change");
    searchInputWrapper.classList.remove("change");
});

},{"../css/main.scss":"gNxq3","../js/nav":"9oAPP","masonry-layout":"cYDx4","8da2442e5207a532":"i95q9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../js/animation":"3h5E3","../js/modal":"aHHgN"}],"gNxq3":[function() {},{}],"9oAPP":[function(require,module,exports) {
// mobile menu
const hamburger = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
});
const dropdownBtn = document.querySelector(".dropdownBtn");
dropdownBtn.addEventListener("click", ()=>{
    document.getElementById("options").classList.toggle("hidden");
    document.getElementById("arrow-up").classList.toggle("hidden");
    document.getElementById("arrow-down").classList.toggle("hidden");
});
const dropdownBtn2 = document.querySelector(".dropdownBtn2");
dropdownBtn2.addEventListener("click", ()=>{
    document.getElementById("options2").classList.toggle("hidden");
    document.getElementById("arrow-up2").classList.toggle("hidden");
    document.getElementById("arrow-down2").classList.toggle("hidden");
});
document.onclick = function(e) {
    if (!dropdownBtn.contains(e.target)) {
        document.getElementById("options").classList.add("hidden");
        document.getElementById("arrow-up").classList.add("hidden");
        document.getElementById("arrow-down").classList.remove("hidden");
    }
    if (!dropdownBtn2.contains(e.target)) {
        document.getElementById("options2").classList.add("hidden");
        document.getElementById("arrow-up2").classList.add("hidden");
        document.getElementById("arrow-down2").classList.remove("hidden");
    }
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove("flex");
        nav.classList.add("hidden");
        hamburger.classList.remove("open");
    }
};

},{}],"cYDx4":[function(require,module,exports) {
/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "outlayer/outlayer",
        "get-size/get-size"
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("e86e3700aebd6078"), require("26a3dc2fb9871570"));
    else // browser global
    window1.Masonry = factory(window1.Outlayer, window1.getSize);
})(window, function factory(Outlayer, getSize) {
    "use strict";
    // -------------------------- masonryDefinition -------------------------- //
    // create an Outlayer layout class
    var Masonry = Outlayer.create("masonry");
    // isFitWidth -> fitWidth
    Masonry.compatOptions.fitWidth = "isFitWidth";
    var proto = Masonry.prototype;
    proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();
        // reset column Y
        this.colYs = [];
        for(var i = 0; i < this.cols; i++)this.colYs.push(0);
        this.maxY = 0;
        this.horizontalColIndex = 0;
    };
    proto.measureColumns = function() {
        this.getContainerWidth();
        // if columnWidth is 0, default to outerWidth of first item
        if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            // columnWidth fall back to item of first element
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || // if first elem has no width, default to size of container
            this.containerWidth;
        }
        var columnWidth = this.columnWidth += this.gutter;
        // calculate columns
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        // fix rounding errors, typically with gutters
        var excess = columnWidth - containerWidth % columnWidth;
        // if overshoot is less than a pixel, round up, otherwise floor it
        var mathMethod = excess && excess < 1 ? "round" : "floor";
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
    };
    proto.getContainerWidth = function() {
        // container is parent if fit width
        var isFitWidth = this._getOption("fitWidth");
        var container = isFitWidth ? this.element.parentNode : this.element;
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        // how many columns does this brick span
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
        // round if off by 1 pixel, otherwise use ceil
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        // use horizontal or top column position
        var colPosMethod = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition";
        var colPosition = this[colPosMethod](colSpan, item);
        // position the brick
        var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
        };
        // apply setHeight to necessary columns
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for(var i = colPosition.col; i < setMax; i++)this.colYs[i] = setHeight;
        return position;
    };
    proto._getTopColPosition = function(colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        // get the minimum Y value from the columns
        var minimumY = Math.min.apply(Math, colGroup);
        return {
            col: colGroup.indexOf(minimumY),
            y: minimumY
        };
    };
    /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */ proto._getTopColGroup = function(colSpan) {
        if (colSpan < 2) // if brick spans only one column, use all the column Ys
        return this.colYs;
        var colGroup = [];
        // how many different places could this brick fit horizontally
        var groupCount = this.cols + 1 - colSpan;
        // for each group potential horizontal position
        for(var i = 0; i < groupCount; i++)colGroup[i] = this._getColGroupY(i, colSpan);
        return colGroup;
    };
    proto._getColGroupY = function(col, colSpan) {
        if (colSpan < 2) return this.colYs[col];
        // make an array of colY values for that one group
        var groupColYs = this.colYs.slice(col, col + colSpan);
        // and get the max value of the array
        return Math.max.apply(Math, groupColYs);
    };
    // get column position based on horizontal index. #873
    proto._getHorizontalColPosition = function(colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        // shift to next row if item can't fit on current row
        col = isOver ? 0 : col;
        // don't let zero-size items take up space
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
            col: col,
            y: this._getColGroupY(col, colSpan)
        };
    };
    proto._manageStamp = function(stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        // get the columns that this stamp affects
        var isOriginLeft = this._getOption("originLeft");
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        // lastCol should not go over if multiple of columnWidth #425
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        // set colYs to bottom of the stamp
        var isOriginTop = this._getOption("originTop");
        var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
        for(var i = firstCol; i <= lastCol; i++)this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
    };
    proto._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
            height: this.maxY
        };
        if (this._getOption("fitWidth")) size.width = this._getContainerFitWidth();
        return size;
    };
    proto._getContainerFitWidth = function() {
        var unusedCols = 0;
        // count unused columns
        var i = this.cols;
        while(--i){
            if (this.colYs[i] !== 0) break;
            unusedCols++;
        }
        // fit container to columns that have been used
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    };
    proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
    };
    return Masonry;
});

},{"e86e3700aebd6078":"2vxXV","26a3dc2fb9871570":"166by"}],"2vxXV":[function(require,module,exports) {
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */ (function(window1, factory) {
    "use strict";
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define([
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./item"
    ], function(EvEmitter, getSize, utils, Item) {
        return factory(window1, EvEmitter, getSize, utils, Item);
    });
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory(window1, require("573c24bcaa9ad04f"), require("b05519937ed91da5"), require("3b5dd3aa1a4ff35"), require("242bc3ae5b473953"));
    else // browser global
    window1.Outlayer = factory(window1, window1.EvEmitter, window1.getSize, window1.fizzyUIUtils, window1.Outlayer.Item);
})(window, function factory(window1, EvEmitter, getSize, utils, Item) {
    "use strict";
    // ----- vars ----- //
    var console = window1.console;
    var jQuery = window1.jQuery;
    var noop = function() {};
    // -------------------------- Outlayer -------------------------- //
    // globally unique identifiers
    var GUID = 0;
    // internal store of all Outlayer intances
    var instances = {};
    /**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */ function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) console.error("Bad element for " + this.constructor.namespace + ": " + (queryElement || element));
            return;
        }
        this.element = queryElement;
        // add jQuery
        if (jQuery) this.$element = jQuery(this.element);
        // options
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        // add id for Outlayer.getFromElement
        var id = ++GUID;
        this.element.outlayerGUID = id; // expando
        instances[id] = this; // associate via id
        // kick it off
        this._create();
        var isInitLayout = this._getOption("initLayout");
        if (isInitLayout) this.layout();
    }
    // settings are for internal use only
    Outlayer.namespace = "outlayer";
    Outlayer.Item = Item;
    // default options
    Outlayer.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        // item options
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var proto = Outlayer.prototype;
    // inherit EvEmitter
    utils.extend(proto, EvEmitter.prototype);
    /**
 * set options
 * @param {Object} opts
 */ proto.option = function(opts) {
        utils.extend(this.options, opts);
    };
    /**
 * get backwards compatible option value, check old name
 */ proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
    };
    Outlayer.compatOptions = {
        // currentName: oldName
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    };
    proto._create = function() {
        // get items from children
        this.reloadItems();
        // elements that affect layout, but are not laid out
        this.stamps = [];
        this.stamp(this.options.stamp);
        // set container style
        utils.extend(this.element.style, this.options.containerStyle);
        // bind resize method
        var canBindResize = this._getOption("resize");
        if (canBindResize) this.bindResize();
    };
    // goes through all children again and gets bricks in proper order
    proto.reloadItems = function() {
        // collection of item elements
        this.items = this._itemize(this.element.children);
    };
    /**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */ proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;
        // create new Outlayer Items for collection
        var items = [];
        for(var i = 0; i < itemElems.length; i++){
            var elem = itemElems[i];
            var item = new Item(elem, this);
            items.push(item);
        }
        return items;
    };
    /**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */ proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
    };
    /**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */ proto.getItemElements = function() {
        return this.items.map(function(item) {
            return item.element;
        });
    };
    // ----- init & layout ----- //
    /**
 * lays out all items
 */ proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        // don't animate first layout
        var layoutInstant = this._getOption("layoutInstant");
        var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        // flag for initalized
        this._isLayoutInited = true;
    };
    // _init is alias for layout
    proto._init = proto.layout;
    /**
 * logic before any new layout
 */ proto._resetLayout = function() {
        this.getSize();
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    /**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */ proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) // default to 0
        this[measurement] = 0;
        else {
            // use option as an element
            if (typeof option == "string") elem = this.element.querySelector(option);
            else if (option instanceof HTMLElement) elem = option;
            // use size of element, if element
            this[measurement] = elem ? getSize(elem)[size] : option;
        }
    };
    /**
 * layout a collection of item elements
 * @api public
 */ proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout();
    };
    /**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */ proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
            return !item.isIgnored;
        });
    };
    /**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */ proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems("layout", items);
        if (!items || !items.length) // no items, emit event with empty array
        return;
        var queue = [];
        items.forEach(function(item) {
            // get x/y object from method
            var position = this._getItemLayoutPosition(item);
            // enqueue
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
    };
    /**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */ proto._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    };
    /**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */ proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
    };
    // set stagger from option in milliseconds number
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
    };
    /**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */ proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) // if not transition, just set CSS
        item.goTo(x, y);
        else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
        }
    };
    /**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */ proto._postLayout = function() {
        this.resizeContainer();
    };
    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption("resizeContainer");
        if (!isResizingContainer) return;
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
        }
    };
    /**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */ proto._getContainerSize = noop;
    /**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */ proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === undefined) return;
        var elemSize = this.size;
        // add padding and border width if border box
        if (elemSize.isBorderBox) measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? "width" : "height"] = measure + "px";
    };
    /**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */ proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this;
        function onComplete() {
            _this.dispatchEvent(eventName + "Complete", null, [
                items
            ]);
        }
        var count = items.length;
        if (!items || !count) {
            onComplete();
            return;
        }
        var doneCount = 0;
        function tick() {
            doneCount++;
            if (doneCount == count) onComplete();
        }
        // bind callback
        items.forEach(function(item) {
            item.once(eventName, tick);
        });
    };
    /**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */ proto.dispatchEvent = function(type, event, args) {
        // add original event to arguments
        var emitArgs = event ? [
            event
        ].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery) {
            // set this.$element
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                // create jQuery event
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else // just trigger with type if no event available
            this.$element.trigger(type, args);
        }
    };
    // -------------------------- ignore & stamps -------------------------- //
    /**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */ proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) item.isIgnored = true;
    };
    /**
 * return item to layout collection
 * @param {Element} elem
 */ proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) delete item.isIgnored;
    };
    /**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */ proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) return;
        this.stamps = this.stamps.concat(elems);
        // ignore
        elems.forEach(this.ignore, this);
    };
    /**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */ proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) return;
        elems.forEach(function(elem) {
            // filter out removed stamp elements
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
        }, this);
    };
    /**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */ proto._find = function(elems) {
        if (!elems) return;
        // if string, use argument as selector string
        if (typeof elems == "string") elems = this.element.querySelectorAll(elems);
        elems = utils.makeArray(elems);
        return elems;
    };
    proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) return;
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
    };
    // update boundingLeft / Top
    proto._getBoundingRect = function() {
        // get bounding rect for container element
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
    };
    /**
 * @param {Element} stamp
**/ proto._manageStamp = noop;
    /**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */ proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    };
    // -------------------------- resize -------------------------- //
    // enable event handlers for listeners
    // i.e. resize -> onresize
    proto.handleEvent = utils.handleEvent;
    /**
 * Bind layout to window resizing
 */ proto.bindResize = function() {
        window1.addEventListener("resize", this);
        this.isResizeBound = true;
    };
    /**
 * Unbind layout to window resizing
 */ proto.unbindResize = function() {
        window1.removeEventListener("resize", this);
        this.isResizeBound = false;
    };
    proto.onresize = function() {
        this.resize();
    };
    utils.debounceMethod(Outlayer, "onresize", 100);
    proto.resize = function() {
        // don't trigger if size did not change
        // or if resize was unbound. See #9
        if (!this.isResizeBound || !this.needsResizeLayout()) return;
        this.layout();
    };
    /**
 * check if layout is needed post layout
 * @returns Boolean
 */ proto.needsResizeLayout = function() {
        var size = getSize(this.element);
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    };
    // -------------------------- methods -------------------------- //
    /**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/ proto.addItems = function(elems) {
        var items = this._itemize(elems);
        // add items to collection
        if (items.length) this.items = this.items.concat(items);
        return items;
    };
    /**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */ proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) return;
        // layout and reveal just the new items
        this.layoutItems(items, true);
        this.reveal(items);
    };
    /**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */ proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) return;
        // add items to beginning of collection
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // layout new stuff without transition
        this.layoutItems(items, true);
        this.reveal(items);
        // layout previous items
        this.layoutItems(previousItems);
    };
    /**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */ proto.reveal = function(items) {
        this._emitCompleteOnItems("reveal", items);
        if (!items || !items.length) return;
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.reveal();
        });
    };
    /**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */ proto.hide = function(items) {
        this._emitCompleteOnItems("hide", items);
        if (!items || !items.length) return;
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.hide();
        });
    };
    /**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */ proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
    };
    /**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */ proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
    };
    /**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */ proto.getItem = function(elem) {
        // loop through items to get the one that matches
        for(var i = 0; i < this.items.length; i++){
            var item = this.items[i];
            if (item.element == elem) // return item
            return item;
        }
    };
    /**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */ proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
            var item = this.getItem(elem);
            if (item) items.push(item);
        }, this);
        return items;
    };
    /**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */ proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems("remove", removeItems);
        // bail if no items to remove
        if (!removeItems || !removeItems.length) return;
        removeItems.forEach(function(item) {
            item.remove();
            // remove item from collection
            utils.removeFrom(this.items, item);
        }, this);
    };
    // ----- destroy ----- //
    // remove and disable Outlayer instance
    proto.destroy = function() {
        // clean up dynamic styles
        var style = this.element.style;
        style.height = "";
        style.position = "";
        style.width = "";
        // destroy items
        this.items.forEach(function(item) {
            item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id]; // remove reference to instance by id
        delete this.element.outlayerGUID;
        // remove data for jQuery
        if (jQuery) jQuery.removeData(this.element, this.constructor.namespace);
    };
    // -------------------------- data -------------------------- //
    /**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */ Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
    };
    // -------------------------- create Outlayer class -------------------------- //
    /**
 * create a layout class
 * @param {String} namespace
 */ Outlayer.create = function(namespace, options) {
        // sub-class Outlayer
        var Layout = subclass(Outlayer);
        // apply new options and compatOptions
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        // sub-class Item
        Layout.Item = subclass(Item);
        // -------------------------- declarative -------------------------- //
        utils.htmlInit(Layout, namespace);
        // -------------------------- jQuery bridge -------------------------- //
        // make into jQuery plugin
        if (jQuery && jQuery.bridget) jQuery.bridget(namespace, Layout);
        return Layout;
    };
    function subclass(Parent) {
        function SubClass() {
            Parent.apply(this, arguments);
        }
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass;
    }
    // ----- helpers ----- //
    // how many milliseconds are in each unit
    var msUnits = {
        ms: 1,
        s: 1000
    };
    // munge time-like parameter into millisecond number
    // '0.4s' -> 40
    function getMilliseconds(time) {
        if (typeof time == "number") return time;
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) return 0;
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
    }
    // ----- fin ----- //
    // back in global
    Outlayer.Item = Item;
    return Outlayer;
});

},{"573c24bcaa9ad04f":"7rCHo","b05519937ed91da5":"166by","3b5dd3aa1a4ff35":"5rzsv","242bc3ae5b473953":"fv3Ha"}],"7rCHo":[function(require,module,exports) {
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */ /* jshint unused: true, undef: true, strict: true */ (function(global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define(factory);
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory();
    else // Browser globals
    global.EvEmitter = factory();
})(typeof window != "undefined" ? window : this, function() {
    "use strict";
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;
        // set events hash
        var events = this._events = this._events || {};
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) listeners.push(listener);
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return;
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {};
        // set onceListeners object
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        // set flag
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var index = listeners.indexOf(listener);
        if (index != -1) listeners.splice(index, 1);
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
});

},{}],"166by":[function(require,module,exports) {
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */ /* globals console: false */ (function(window1, factory) {
    /* jshint strict: false */ /* globals define, module */ if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.getSize = factory();
})(window, function factory() {
    "use strict";
    // -------------------------- helpers -------------------------- //
    // get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf("%") == -1 && !isNaN(num);
        return isValid && num;
    }
    function noop() {}
    var logError = typeof console == "undefined" ? noop : function(message) {
        console.error(message);
    };
    // -------------------------- measurements -------------------------- //
    var measurements = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
    ];
    var measurementsLength = measurements.length;
    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }
    // -------------------------- getStyle -------------------------- //
    /**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */ function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? " + "See https://bit.ly/getsizebug1");
        return style;
    }
    // -------------------------- setup -------------------------- //
    var isSetup = false;
    var isBoxSizeOuter;
    /**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */ function setup() {
        // setup once
        if (isSetup) return;
        isSetup = true;
        // -------------------------- box sizing -------------------------- //
        /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */ var div = document.createElement("div");
        div.style.width = "200px";
        div.style.padding = "1px 2px 3px 4px";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px 2px 3px 4px";
        div.style.boxSizing = "border-box";
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        // round value for browser zoom. desandro/masonry#928
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }
    // -------------------------- getSize -------------------------- //
    function getSize(elem) {
        setup();
        // use querySeletor if elem is string
        if (typeof elem == "string") elem = document.querySelector(elem);
        // do not proceed on non-objects
        if (!elem || typeof elem != "object" || !elem.nodeType) return;
        var style = getStyle(elem);
        // if hidden, everything is 0
        if (style.display == "none") return getZeroSize();
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == "border-box";
        // get all measurements
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            // any 'auto', 'medium' value will be 0
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        // overwrite width and height if we can get it from style
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) size.width = styleWidth + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) size.height = styleHeight + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});

},{}],"5rzsv":[function(require,module,exports) {
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "desandro-matches-selector/matches-selector"
    ], function(matchesSelector) {
        return factory(window1, matchesSelector);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("51e1096a76b062e0"));
    else // browser global
    window1.fizzyUIUtils = factory(window1, window1.matchesSelector);
})(window, function factory(window1, matchesSelector) {
    "use strict";
    var utils = {};
    // ----- extend ----- //
    // extends objects
    utils.extend = function(a, b) {
        for(var prop in b)a[prop] = b[prop];
        return a;
    };
    // ----- modulo ----- //
    utils.modulo = function(num, div) {
        return (num % div + div) % div;
    };
    // ----- makeArray ----- //
    var arraySlice = Array.prototype.slice;
    // turn element or nodeList into an array
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) // use object if already an array
        return obj;
        // return empty array if undefined or null. #6
        if (obj === null || obj === undefined) return [];
        var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) // convert nodeList to array
        return arraySlice.call(obj);
        // array of single index
        return [
            obj
        ];
    };
    // ----- removeFrom ----- //
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) ary.splice(index, 1);
    };
    // ----- getParent ----- //
    utils.getParent = function(elem, selector) {
        while(elem.parentNode && elem != document.body){
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) return elem;
        }
    };
    // ----- getQueryElement ----- //
    // use element as selector string
    utils.getQueryElement = function(elem) {
        if (typeof elem == "string") return document.querySelector(elem);
        return elem;
    };
    // ----- handleEvent ----- //
    // enable .ontype to trigger from .addEventListener( elem, 'type' )
    utils.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    // ----- filterFindElements ----- //
    utils.filterFindElements = function(elems, selector) {
        // make array of elems
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            // check that elem is an actual element
            if (!(elem instanceof HTMLElement)) return;
            // add elem if no selector
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            // filter & find items if we have a selector
            // filter
            if (matchesSelector(elem, selector)) ffElems.push(elem);
            // find children
            var childElems = elem.querySelectorAll(selector);
            // concat childElems to filterFound array
            for(var i = 0; i < childElems.length; i++)ffElems.push(childElems[i]);
        });
        return ffElems;
    };
    // ----- debounceMethod ----- //
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        // original method
        var method = _class.prototype[methodName];
        var timeoutName = methodName + "Timeout";
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        };
    };
    // ----- docReady ----- //
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == "complete" || readyState == "interactive") // do async to allow for other scripts to run. metafizzy/flickity#441
        setTimeout(callback);
        else document.addEventListener("DOMContentLoaded", callback);
    };
    // ----- htmlInit ----- //
    // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + "-" + $2;
        }).toLowerCase();
    };
    var console = window1.console;
    /**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */ utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = "data-" + dashedNamespace;
            var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
            var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + "-options";
            var jQuery = window1.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    // log error, do not initialize
                    if (console) console.error("Error parsing " + dataAttr + " on " + elem.className + ": " + error);
                    return;
                }
                // initialize
                var instance = new WidgetClass(elem, options);
                // make available via $().data('namespace')
                if (jQuery) jQuery.data(elem, namespace, instance);
            });
        });
    };
    // -----  ----- //
    return utils;
});

},{"51e1096a76b062e0":"gza0L"}],"gza0L":[function(require,module,exports) {
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */ /*jshint browser: true, strict: true, undef: true, unused: true */ (function(window1, factory) {
    /*global define: false, module: false */ "use strict";
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.matchesSelector = factory();
})(window, function factory() {
    "use strict";
    var matchesMethod = function() {
        var ElemProto = window.Element.prototype;
        // check for the standard method name first
        if (ElemProto.matches) return "matches";
        // check un-prefixed
        if (ElemProto.matchesSelector) return "matchesSelector";
        // check vendor prefixes
        var prefixes = [
            "webkit",
            "moz",
            "ms",
            "o"
        ];
        for(var i = 0; i < prefixes.length; i++){
            var prefix = prefixes[i];
            var method = prefix + "MatchesSelector";
            if (ElemProto[method]) return method;
        }
    }();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    };
});

},{}],"fv3Ha":[function(require,module,exports) {
/**
 * Outlayer Item
 */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define([
        "ev-emitter/ev-emitter",
        "get-size/get-size"
    ], factory);
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory(require("dd99bd345459a860"), require("333b0b16bf4afb3c"));
    else {
        // browser global
        window1.Outlayer = {};
        window1.Outlayer.Item = factory(window1.EvEmitter, window1.getSize);
    }
})(window, function factory(EvEmitter, getSize) {
    "use strict";
    // ----- helpers ----- //
    function isEmptyObj(obj) {
        for(var prop in obj)return false;
        prop = null;
        return true;
    }
    // -------------------------- CSS3 support -------------------------- //
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == "string" ? "transition" : "WebkitTransition";
    var transformProperty = typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
    var transitionEndEvent = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[transitionProperty];
    // cache all vendor properties that could have vendor prefix
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + "Duration",
        transitionProperty: transitionProperty + "Property",
        transitionDelay: transitionProperty + "Delay"
    };
    // -------------------------- Item -------------------------- //
    function Item(element, layout) {
        if (!element) return;
        this.element = element;
        // parent layout class, i.e. Masonry, Isotope, or Packery
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };
        this._create();
    }
    // inherit EvEmitter
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;
    proto._create = function() {
        // transition objects
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: "absolute"
        });
    };
    // trigger specified handler for event type
    proto.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    /**
 * apply CSS styles to element
 * @param {Object} style
 */ proto.css = function(style) {
        var elemStyle = this.element.style;
        for(var prop in style){
            // use vendor property if available
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
        }
    };
    // measure position, and sets it
    proto.getPosition = function() {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        var xValue = style[isOriginLeft ? "left" : "right"];
        var yValue = style[isOriginTop ? "top" : "bottom"];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        // convert percent to pixels
        var layoutSize = this.layout.size;
        if (xValue.indexOf("%") != -1) x = x / 100 * layoutSize.width;
        if (yValue.indexOf("%") != -1) y = y / 100 * layoutSize.height;
        // clean up 'auto' or other non-integer values
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        // remove padding from measurement
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
    };
    // set settled position, apply padding
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        // x
        var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
        var xProperty = isOriginLeft ? "left" : "right";
        var xResetProperty = isOriginLeft ? "right" : "left";
        var x = this.position.x + layoutSize[xPadding];
        // set in percentage or pixels
        style[xProperty] = this.getXValue(x);
        // reset other property
        style[xResetProperty] = "";
        // y
        var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
        var yProperty = isOriginTop ? "top" : "bottom";
        var yResetProperty = isOriginTop ? "bottom" : "top";
        var y = this.position.y + layoutSize[yPadding];
        // set in percentage or pixels
        style[yProperty] = this.getYValue(y);
        // reset other property
        style[yResetProperty] = "";
        this.css(style);
        this.emitEvent("layout", [
            this
        ]);
    };
    proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + "%" : x + "px";
    };
    proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + "%" : y + "px";
    };
    proto._transitionTo = function(x, y) {
        this.getPosition();
        // get current x & y from top/left
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        // save end position
        this.setPosition(x, y);
        // if did not move and not transitioning, just go to layout
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    };
    proto.getTranslate = function(x, y) {
        // flip cooridinates if origin on right or bottom
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return "translate3d(" + x + "px, " + y + "px, 0)";
    };
    // non transition + transform support
    proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
    };
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
    };
    // ----- transition ----- //
    /**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */ // non transition, just trigger callback
    proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) this._removeStyles(args.to);
        for(var prop in args.onTransitionEnd)args.onTransitionEnd[prop].call(this);
    };
    /**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */ proto.transition = function(args) {
        // redirect to nonTransition if no transition duration
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
        }
        var _transition = this._transn;
        // keep track of onTransitionEnd callback by css property
        for(var prop in args.onTransitionEnd)_transition.onEnd[prop] = args.onTransitionEnd[prop];
        // keep track of properties that are transitioning
        for(prop in args.to){
            _transition.ingProperties[prop] = true;
            // keep track of properties to clean up when transition is done
            if (args.isCleaning) _transition.clean[prop] = true;
        }
        // set from styles
        if (args.from) {
            this.css(args.from);
            // force redraw. http://blog.alexmaccaw.com/css-transitions
            var h = this.element.offsetHeight;
            // hack for JSHint to hush about unused var
            h = null;
        }
        // enable transition
        this.enableTransition(args.to);
        // set styles that are transitioning
        this.css(args.to);
        this.isTransitioning = true;
    };
    // dash before all cap letters, including first for
    // WebkitTransform => -webkit-transform
    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
            return "-" + $1.toLowerCase();
        });
    }
    var transitionProps = "opacity," + toDashedAll(transformProperty);
    proto.enableTransition = function() {
        // HACK changing transitionProperty during a transition
        // will cause transition to jump
        if (this.isTransitioning) return;
        // make `transition: foo, bar, baz` from style object
        // HACK un-comment this when enableTransition can work
        // while a transition is happening
        // var transitionValues = [];
        // for ( var prop in style ) {
        //   // dash-ify camelCased properties like WebkitTransition
        //   prop = vendorProperties[ prop ] || prop;
        //   transitionValues.push( toDashedAll( prop ) );
        // }
        // munge number to millisecond, to match stagger
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == "number" ? duration + "ms" : duration;
        // enable transition styles
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        // listen for transition end event
        this.element.addEventListener(transitionEndEvent, this, false);
    };
    // ----- events ----- //
    proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
    };
    proto.onotransitionend = function(event) {
        this.ontransitionend(event);
    };
    // properties that I munge to make my life easier
    var dashedVendorProperties = {
        "-webkit-transform": "transform"
    };
    proto.ontransitionend = function(event) {
        // disregard bubbled events from children
        if (event.target !== this.element) return;
        var _transition = this._transn;
        // get property name of transitioned property, convert to prefix-free
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        // remove property that has completed transitioning
        delete _transition.ingProperties[propertyName];
        // check if any properties are still transitioning
        if (isEmptyObj(_transition.ingProperties)) // all properties have completed transitioning
        this.disableTransition();
        // clean style
        if (propertyName in _transition.clean) {
            // clean up style
            this.element.style[event.propertyName] = "";
            delete _transition.clean[propertyName];
        }
        // trigger onTransitionEnd callback
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
        }
        this.emitEvent("transitionEnd", [
            this
        ]);
    };
    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
    };
    /**
 * removes style property from element
 * @param {Object} style
**/ proto._removeStyles = function(style) {
        // clean up transition styles
        var cleanStyle = {};
        for(var prop in style)cleanStyle[prop] = "";
        this.css(cleanStyle);
    };
    var cleanTransitionStyle = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    proto.removeTransitionStyles = function() {
        // remove transition
        this.css(cleanTransitionStyle);
    };
    // ----- stagger ----- //
    proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + "ms";
    };
    // ----- show/hide/remove ----- //
    // remove element from DOM
    proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        // remove display: none
        this.css({
            display: ""
        });
        this.emitEvent("remove", [
            this
        ]);
    };
    proto.remove = function() {
        // just remove element if no transition support or no transition
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
        }
        // start transition
        this.once("transitionEnd", function() {
            this.removeElem();
        });
        this.hide();
    };
    proto.reveal = function() {
        delete this.isHidden;
        // remove display: none
        this.css({
            display: ""
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("visibleStyle");
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onRevealTransitionEnd = function() {
        // check if still visible
        // during transition, item may have been hidden
        if (!this.isHidden) this.emitEvent("reveal");
    };
    /**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */ proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        // use opacity
        if (optionStyle.opacity) return "opacity";
        // get first property
        for(var prop in optionStyle)return prop;
    };
    proto.hide = function() {
        // set flag
        this.isHidden = true;
        // remove display: none
        this.css({
            display: ""
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("hiddenStyle");
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            // keep hidden stuff hidden
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onHideTransitionEnd = function() {
        // check if still hidden
        // during transition, item may have been un-hidden
        if (this.isHidden) {
            this.css({
                display: "none"
            });
            this.emitEvent("hide");
        }
    };
    proto.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        });
    };
    return Item;
});

},{"dd99bd345459a860":"7rCHo","333b0b16bf4afb3c":"166by"}],"i95q9":[function(require,module,exports) {
(function(root, factory) {
    if (typeof define === "function" && define.amd) define([], factory);
    else if (0, module.exports) module.exports = factory();
    else root.SimpleLightbox = factory();
})(this, function() {
    function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var obj = arguments[i];
            if (obj) for(var key in obj)obj.hasOwnProperty(key) && (target[key] = obj[key]);
        }
        return target;
    }
    function addClass(element, className) {
        if (element && className) element.className += " " + className;
    }
    function removeClass(element, className) {
        if (element && className) element.className = element.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)"), " ").trim();
    }
    function parseHtml(html) {
        var div = document.createElement("div");
        div.innerHTML = html.trim();
        return div.childNodes[0];
    }
    function matches(el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector).call(el, selector);
    }
    function getWindowHeight() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    }
    function SimpleLightbox(options) {
        this.init.apply(this, arguments);
    }
    SimpleLightbox.defaults = {
        // add custom classes to lightbox elements
        elementClass: "",
        elementLoadingClass: "slbLoading",
        htmlClass: "slbActive",
        closeBtnClass: "",
        nextBtnClass: "",
        prevBtnClass: "",
        loadingTextClass: "",
        // customize / localize controls captions
        closeBtnCaption: "Close",
        nextBtnCaption: "Next",
        prevBtnCaption: "Previous",
        loadingCaption: "Loading...",
        bindToItems: true,
        closeOnOverlayClick: true,
        closeOnEscapeKey: true,
        nextOnImageClick: true,
        showCaptions: true,
        captionAttribute: "title",
        urlAttribute: "href",
        startAt: 0,
        loadingTimeout: 100,
        appendTarget: "body",
        beforeSetContent: null,
        beforeClose: null,
        afterClose: null,
        beforeDestroy: null,
        afterDestroy: null,
        videoRegex: new RegExp(/youtube.com|vimeo.com/) // regex which tests load url for iframe content
    };
    assign(SimpleLightbox.prototype, {
        init: function(options) {
            options = this.options = assign({}, SimpleLightbox.defaults, options);
            var self = this;
            var elements;
            if (options.$items) elements = options.$items.get();
            if (options.elements) elements = [].slice.call(typeof options.elements === "string" ? document.querySelectorAll(options.elements) : options.elements);
            this.eventRegistry = {
                lightbox: [],
                thumbnails: []
            };
            this.items = [];
            this.captions = [];
            if (elements) elements.forEach(function(element, index) {
                self.items.push(element.getAttribute(options.urlAttribute));
                self.captions.push(element.getAttribute(options.captionAttribute));
                if (options.bindToItems) self.addEvent(element, "click", function(e) {
                    e.preventDefault();
                    self.showPosition(index);
                }, "thumbnails");
            });
            if (options.items) this.items = options.items;
            if (options.captions) this.captions = options.captions;
        },
        addEvent: function(element, eventName, callback, scope) {
            this.eventRegistry[scope || "lightbox"].push({
                element: element,
                eventName: eventName,
                callback: callback
            });
            element.addEventListener(eventName, callback);
            return this;
        },
        removeEvents: function(scope) {
            this.eventRegistry[scope].forEach(function(item) {
                item.element.removeEventListener(item.eventName, item.callback);
            });
            this.eventRegistry[scope] = [];
            return this;
        },
        next: function() {
            return this.showPosition(this.currentPosition + 1);
        },
        prev: function() {
            return this.showPosition(this.currentPosition - 1);
        },
        normalizePosition: function(position) {
            if (position >= this.items.length) position = 0;
            else if (position < 0) position = this.items.length - 1;
            return position;
        },
        showPosition: function(position) {
            var newPosition = this.normalizePosition(position);
            if (typeof this.currentPosition !== "undefined") this.direction = newPosition > this.currentPosition ? "next" : "prev";
            this.currentPosition = newPosition;
            return this.setupLightboxHtml().prepareItem(this.currentPosition, this.setContent).show();
        },
        loading: function(on) {
            var self = this;
            var options = this.options;
            if (on) this.loadingTimeout = setTimeout(function() {
                addClass(self.$el, options.elementLoadingClass);
                self.$content.innerHTML = '<p class="slbLoadingText ' + options.loadingTextClass + '">' + options.loadingCaption + "</p>";
                self.show();
            }, options.loadingTimeout);
            else {
                removeClass(this.$el, options.elementLoadingClass);
                clearTimeout(this.loadingTimeout);
            }
        },
        prepareItem: function(position, callback) {
            var self = this;
            var url = this.items[position];
            this.loading(true);
            if (this.options.videoRegex.test(url)) callback.call(self, parseHtml('<div class="slbIframeCont"><iframe class="slbIframe" frameborder="0" allowfullscreen src="' + url + '"></iframe></div>'));
            else {
                var $imageCont = parseHtml('<div class="slbImageWrap"><img class="slbImage" src="' + url + '" /></div>');
                this.$currentImage = $imageCont.querySelector(".slbImage");
                if (this.options.showCaptions && this.captions[position]) $imageCont.appendChild(parseHtml('<div class="slbCaption">' + this.captions[position] + "</div>"));
                this.loadImage(url, function() {
                    self.setImageDimensions();
                    callback.call(self, $imageCont);
                    self.loadImage(self.items[self.normalizePosition(self.currentPosition + 1)]);
                });
            }
            return this;
        },
        loadImage: function(url, callback) {
            if (!this.options.videoRegex.test(url)) {
                var image = new Image();
                callback && (image.onload = callback);
                image.src = url;
            }
        },
        setupLightboxHtml: function() {
            var o = this.options;
            if (!this.$el) {
                this.$el = parseHtml('<div class="slbElement ' + o.elementClass + '">' + '<div class="slbOverlay"></div>' + '<div class="slbWrapOuter">' + '<div class="slbWrap">' + '<div class="slbContentOuter">' + '<div class="slbContent"></div>' + '<button type="button" title="' + o.closeBtnCaption + '" class="slbCloseBtn ' + o.closeBtnClass + '">\xd7</button>' + (this.items.length > 1 ? '<div class="slbArrows"><button type="button" title="' + o.prevBtnCaption + '" class="prev slbArrow' + o.prevBtnClass + '">' + o.prevBtnCaption + "</button>" + '<button type="button" title="' + o.nextBtnCaption + '" class="next slbArrow' + o.nextBtnClass + '">' + o.nextBtnCaption + "</button>" + "</div>" : "") + "</div>" + "</div>" + "</div>" + "</div>");
                this.$content = this.$el.querySelector(".slbContent");
            }
            this.$content.innerHTML = "";
            return this;
        },
        show: function() {
            if (!this.modalInDom) {
                document.querySelector(this.options.appendTarget).appendChild(this.$el);
                addClass(document.documentElement, this.options.htmlClass);
                this.setupLightboxEvents();
                this.modalInDom = true;
            }
            return this;
        },
        setContent: function(content) {
            var $content = typeof content === "string" ? parseHtml(content) : content;
            this.loading(false);
            this.setupLightboxHtml();
            removeClass(this.$content, "slbDirectionNext");
            removeClass(this.$content, "slbDirectionPrev");
            if (this.direction) addClass(this.$content, this.direction === "next" ? "slbDirectionNext" : "slbDirectionPrev");
            if (this.options.beforeSetContent) this.options.beforeSetContent($content, this);
            this.$content.appendChild($content);
            return this;
        },
        setImageDimensions: function() {
            if (this.$currentImage) this.$currentImage.style.maxHeight = getWindowHeight() + "px";
        },
        setupLightboxEvents: function() {
            var self = this;
            if (this.eventRegistry.lightbox.length) return this;
            this.addEvent(this.$el, "click", function(e) {
                var $target = e.target;
                if (matches($target, ".slbCloseBtn") || self.options.closeOnOverlayClick && matches($target, ".slbWrap")) self.close();
                else if (matches($target, ".slbArrow")) matches($target, ".next") ? self.next() : self.prev();
                else if (self.options.nextOnImageClick && self.items.length > 1 && matches($target, ".slbImage")) self.next();
            }).addEvent(document, "keyup", function(e) {
                self.options.closeOnEscapeKey && e.keyCode === 27 && self.close();
                if (self.items.length > 1) {
                    (e.keyCode === 39 || e.keyCode === 68) && self.next();
                    (e.keyCode === 37 || e.keyCode === 65) && self.prev();
                }
            }).addEvent(window, "resize", function() {
                self.setImageDimensions();
            });
            return this;
        },
        close: function() {
            if (this.modalInDom) {
                this.runHook("beforeClose");
                this.removeEvents("lightbox");
                this.$el && this.$el.parentNode.removeChild(this.$el);
                removeClass(document.documentElement, this.options.htmlClass);
                this.modalInDom = false;
                this.runHook("afterClose");
            }
            this.direction = undefined;
            this.currentPosition = this.options.startAt;
        },
        destroy: function() {
            this.close();
            this.runHook("beforeDestroy");
            this.removeEvents("thumbnails");
            this.runHook("afterDestroy");
        },
        runHook: function(name) {
            this.options[name] && this.options[name](this);
        }
    });
    SimpleLightbox.open = function(options) {
        var instance = new SimpleLightbox(options);
        return options.content ? instance.setContent(options.content).show() : instance.showPosition(instance.options.startAt);
    };
    SimpleLightbox.registerAsJqueryPlugin = function($) {
        $.fn.simpleLightbox = function(options) {
            var lightboxInstance;
            var $items = this;
            return this.each(function() {
                if (!$.data(this, "simpleLightbox")) {
                    lightboxInstance = lightboxInstance || new SimpleLightbox($.extend({}, options, {
                        $items: $items
                    }));
                    $.data(this, "simpleLightbox", lightboxInstance);
                }
            });
        };
        $.SimpleLightbox = SimpleLightbox;
    };
    if (typeof window !== "undefined" && window.jQuery) SimpleLightbox.registerAsJqueryPlugin(window.jQuery);
    return SimpleLightbox;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3h5E3":[function(require,module,exports) {
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) entry.target.classList.add("show");
        else entry.target.classList.remove("show");
    });
});
const hiddenElements = document.querySelectorAll(".animation");
hiddenElements.forEach((el)=>observer.observe(el));

},{}],"aHHgN":[function(require,module,exports) {
const modal = document.querySelector(".modal");
const showModal = document.querySelector(".showModal");
const showModal2 = document.querySelector(".showModal2");
const showModal3 = document.querySelector(".showModal3");
const closeModal = document.querySelector(".closeModal");
showModal.addEventListener("click", ()=>{
    modal.classList.remove("hidden");
});
closeModal.addEventListener("click", ()=>{
    modal.classList.add("hidden");
});
showModal2.addEventListener("click", ()=>{
    modal.classList.remove("hidden");
});
showModal3.addEventListener("click", ()=>{
    modal.classList.remove("hidden");
});
closeModal.addEventListener("click", ()=>{
    modal.classList.add("hidden");
});

},{}]},["1SICI"], "1SICI", "parcelRequire8579")

//# sourceMappingURL=index.18dbc454.js.map
