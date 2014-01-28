var omit = require( "../index" ),
  should = require( "should" );

describe( "omit", function () {

  var testObject = {
    name: "David",
    __privateProperty: "booya",
    country: "Australia"
  };

  it( "should omit keys from an object", function () {

    var newObject = omit( testObject, [ "name", "country" ] );

    Object.keys( newObject ).should.have.lengthOf( 1 );
    newObject.should.have.a.property( "__privateProperty" );
    newObject.should.not.have.a.property( "name" );
    newObject.should.not.have.a.property( "country" );

  } );

} );