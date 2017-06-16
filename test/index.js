var should = require('chai').should(),
        converter = require('../index'),
        convert = converter.convert;

describe('#convert', function () {
    it('converts Jer~ $ \'kjr~ $ pUnz dh lgh laf/ \'kCn gksxk\/ into श्रमत् + शरत् + चन्द्र की सही संधि् शब्द होगाध्', function () {
        convert('Jer~ $ \'kjr~ $ pUnz dh lgh laf/ \'kCn gksxk\/').should.equal('श्रमत् + शरत् + चन्द्र की सही संधि् शब्द होगाध्');
    });
});
                