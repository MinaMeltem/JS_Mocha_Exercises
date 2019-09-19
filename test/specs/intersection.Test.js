
const assert = require ('chai').assert;
const Intersection = require('../../src/intersection');
// const intersection = require(../src/Intersection').intersection;
// const commonItems = require('../src/Intersection').commonItems;


//Results
let intersectionResult1 = Intersection.intersection([arr1, arr2, arr3, arr4, arr5]);
let intersectionResult2 = Intersection.intersection([arr1, arr2, arr3]);


describe('Intersection', function () {

        it('intersection should return array type'/**
*
*/
, function(){
            assert.typeOf(intersectionResult1, 'array');
        });

        it('intersection should return empty array', function(){
            assert.equals(intersectionResult1, '[]]');
        });

        it('intersection should return the array of common elements of given ArrayList ', function(){
            assert.equals(intersectionResult2,'[5, 15]');
        });



    // callbacks should not be tested
    // describe ('commonItems', function(){
    //
    //     it('intersection should return array type', function(){
    //         assert.typeOf(commonItemsResult1, 'array');
    //     });
    //
    //     it('intersection should return common elements of given arrays', function(){
    //         assert.equal(commonItemsResult1, '[5, 15]');
    //     });
    //
    //     it('intersection should return common elements of given arrays', function(){
    //         assert.equal(commonItemsResult2, '[]');
    //     });
    //
    //     it('intersection should return empty array', function(){
    //         assert.equal(commonItemsResult3, '[1, 5, 15]');
    //     });
    // });

});