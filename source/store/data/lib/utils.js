const _C = require( '../_C.js' )
const settings = require( '../settings.js' )

module.exports =
{
  siteUrl__s: ( file_s, dir_s='tips/' ) => `[${file_s.replace('_', ' ')}]: ${settings.url_s}${dir_s}${file_s}.html`,

  EleventyLink__s: ( key_s ) =>
  {
    const path_s = _C[ `ELEVENTY_${key_s}` ]
    const anchor_n = path_s.indexOf( '#')
    if ( anchor_n === -1 )    //: return a link to 11ty.io
    {
      console.log( `ALERT! (EleventyLink__s) no anchor found in path: ${path_s}` )
      const ref_n = _C.ELEVENTY_s.indexOf( ':' )
      return { ref: _C.ELEVENTY_s.substring( 0, ref_n ), link: _C.ELEVENTY_s }
    }
    const anchor_s = path_s.substring( anchor_n )
    const anchorLink_s = _C.ELEVENTY_s.replace( ']', `${anchor_s}]`) + path_s
    return { ref: anchorLink_s.substring( 0, anchorLink_s.indexOf( ':') ), link: anchorLink_s }
  }
}