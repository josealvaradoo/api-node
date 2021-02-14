class Response {
  constructor(res) {
    this.res = res
  }

  json(data, code, message) {
    return this.res
      .status(code)
      .json({
        data,
        code,
        message,
        errors: [],
      })
  }

  error(code, message = null, errors = []) {
    return this.res
      .status(code)
      .json({
        data: null,
        code,
        message,
        errors,
      })
  }

  noContent() {
    return this.res.status(204).json()
  }
}

module.exports = Response
