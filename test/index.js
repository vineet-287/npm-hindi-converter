var should = require('chai').should(),
        converter = require('../index'),
        convert = converter.convert;

describe('#convert', function () {
    it('converts Jer~ $ \'kjr~ $ pUnz dh lgh laf/ \'kCn gksxk\/ into श्रमत् + शरत् + चन्द्र की सही संधि् शब्द होगाध्', function () {
        convert('Jer~ $ \'kjr~ $ pUnz dh lgh laf/ \'kCn gksxk\/', "Krutidev10").should.equal('श्रमत् + शरत् + चन्द्र की सही संधि् शब्द होगाध्');
    });
    
    it('ÚUæÁSÍæÙ çßçÙØæð» ÂýæðˆâæãUÙ ØæðÁÙæ w®vy ç·¤Ù ÂÚU Üæ»ê ãUæð»è? into राजस्थान विनियोग प्रोत्साहन योजना 2014 किन पर लागू होगी?', function () {
        convert('ÚUæÁSÍæÙ çßçÙØæð» ÂýæðˆâæãUÙ ØæðÁÙæ w®vy ç·¤Ù ÂÚU Üæ»ê ãUæð»è?', 'Chanakya').should.equal('राजस्थान विनियोग प्रोत्साहन योजना 2014 किन पर लागू होगी?');
    });
});
                