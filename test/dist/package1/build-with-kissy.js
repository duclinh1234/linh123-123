/*
combined files : 

dom
package1/mods/mod1
package1/mods/mod2
package1/build-with-kissy

*/
  /*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Sep 17 19:40
*/
/**
 * @ignore
 * @fileOverview dom-attr
 * @author yiminghe@gmail.com, lifesinger@gmail.com
 */
KISSY.add('dom/attr', function (S, DOM, UA, undefined) {


}, {
    requires: ['./base', 'ua']
});

KISSY.add('dom/base', function (S, UA, undefined) {



}, {
    requires: ['ua']
});


KISSY.add('dom/class', function (S, DOM, undefined) {


}, {
    requires:['dom/base']
});


KISSY.add('dom/create', function (S, DOM, UA, undefined) {


}, {
    requires:['./base', 'ua']
});


KISSY.add('dom/data', function (S, DOM, undefined) {

}, {
    requires: ['./base']
});

KISSY.add('dom', function (S, DOM) {

}, {
    requires:['dom/attr',
        'dom/class',
        'dom/create',
        'dom/data',
        'dom/insertion',
        'dom/offset',
        'dom/style',
        'dom/selector',
        'dom/style-ie',
        'dom/traversal']
});

KISSY.add('dom/insertion', function (S, UA, DOM) {


}, {
    requires: ['ua', './create']
});


KISSY.add('dom/offset', function (S, DOM, UA, undefined) {


}, {
    requires: ['./base', 'ua']
});


KISSY.add('dom/selector', function (S, DOM, undefined) {


}, {
    requires: ['./base']
});


KISSY.add('dom/style-ie', function (S, DOM, UA, Style) {


}, {
    requires: ['./base', 'ua', './style']
});

KISSY.add('dom/style', function (S, DOM, UA, undefined) {

}, {
    requires: ['dom/base', 'ua']
});


KISSY.add('dom/traversal', function (S, DOM, undefined) {


}, {
    requires: ['./base']
});

/**
 * mod1
 * @author: daxingplay<daxingplay@gmail.com>
 * @date: 12-9-26
 * @requires: kissy 1.2+
 */
KISSY.add('package1/mods/mod1',function (S) {
    var D = S.DOM,
        E = S.Event,
        LOG_PRE = '[mod1] ';

    return {
        init:function () {
            S.log('Mod1Ҳ��GBK���롣');
        }
    }
}, {
    requires: [
        './mod2'
    ]
});
/**
 * mod2
 * @author: daxingplay<daxingplay@gmail.com>
 * @date: 12-9-26
 * @requires: kissy 1.2+
 */
KISSY.add('package1/mods/mod2',function (S) {
    var D = S.DOM,
        E = S.Event,
        LOG_PRE = '[mod2] ';

    return {
        init:function () {
            S.log('Mod2Ҳ��GBK����');
        }
    }
});
/**
 * build-with-kissy
 * @author: daxingplay<daxingplay@gmail.com>
 * @date: 12-9-27
 * @requires: kissy 1.2+
 */
KISSY.add('package1/build-with-kissy',function (S) {
    var D = S.DOM,
        E = S.Event,
        LOG_PRE = '[build-with-kissy] ';

    return {
        init:function () {
            S.log('this file will have kissy modules.');
        }
    }
}, {
    requires: [
        'dom',
        'event',
        './mods/mod1'
    ]
});
