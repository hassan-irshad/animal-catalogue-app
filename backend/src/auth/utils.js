const jwt = require('jsonwebtoken');

/**
 * Parse a JWT token and return a user id
 * @param jwtToken JWT token to parse
 * @returns a user id from the JWT token
 */
function parseUserId(jwtToken) {
    const decodedJwt = jwt.decode(jwtToken)
    return decodedJwt.sub
}

module.exports =  parseUserId 