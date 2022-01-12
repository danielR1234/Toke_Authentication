import { Request } from 'express'

export interface IRequest extends Request {
  query: Record<string, string>
  params: Record<string, string>
}
