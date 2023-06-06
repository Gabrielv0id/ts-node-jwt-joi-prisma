import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().email().required().label('email'),
  password: Joi.string().min(6).required().label('password'),
}).messages({
  'any.required': 'All fields must be filled',
  'string.empty': 'All fields must be filled',
  'string.email': 'Invalid email or password',
  'string.min': 'Invalid email or password',
});

export const createLogin = Joi.object({
  email: Joi.string().email().required().label('email'),
  name: Joi.string().required().label('name'),
  password: Joi.string().min(6).required().label('password'),
}).messages({
  'any.required': 'All fields must be filled',
  'string.empty': 'All fields must be filled',
});