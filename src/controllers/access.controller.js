'use strict'

const AccessService = require("../services/access.service")

class AccessController {
  signUp = async (req, res, next) => {
    try {
      console.log(`[P]::signUp::`, req.body)
      /*
        200: ok
        201: created
        400: bad request
        401: unauthorized
        403: forbidden
        404: not found
        500: internal server error
      */
      return res.status(200).json(await AccessService.signUp(req.body))
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AccessController()