/* eslint-disable node/handle-callback-err */
import { AppError } from '@presentation/errors/AppError'
import { NextFunction, Request, Response } from 'express'

export const Error = () => {
  return async (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      })
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    })
  }
}
