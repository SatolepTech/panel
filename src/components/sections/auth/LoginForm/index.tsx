'use client'

import { yup } from '@infra/yup/translation'

import { AuthResolver } from '@modules/auth/auth.resolver'

import { yupResolver } from '@hookform/resolvers/yup'

import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

export function LoginForm() {
  const schema = yup
    .object({
      email: yup.string().min(3).required(),
      password: yup.string().min(3).required()
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

  console.log('errors', errors)

  const onSubmit: SubmitHandler<Inputs> = async submitData => {
    const authResolver = AuthResolver()

    const { data, error, success } = await authResolver.login({
      email: submitData.email,
      password: submitData.password
    })

    if (!success) {
      console.log('ERRO', error)
      return
    }

    console.log('SUCESSO', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email?.message && <span>errors.email</span>}

      <input {...register('password')} />
      {errors.password?.message && <span>errors.password</span>}

      <input type='submit' />
    </form>
  )
}
