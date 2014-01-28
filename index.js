function omit( object, omittedKeys ) {
  var parsedObject = {};

  if ( object !== Object( object ) ) {
    return parsedObject;
  }

  omittedKeys = Array.isArray( omittedKeys ) ? omittedKeys : [];

  Object.keys( object ).forEach( function ( key ) {
    var keyOk = true;

    omittedKeys.forEach( function ( omittedKey ) {

      if ( keyOk === true && key === omittedKey ) {
        keyOk = false;
      }

    } );

    if ( keyOk === true ) {
      parsedObject[ key ] = object[ key ];
    }

  } );

  return parsedObject;
}

module.exports = omit;