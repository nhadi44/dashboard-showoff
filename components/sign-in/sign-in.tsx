'use client';
import { Input } from '@nextui-org/input';
import { MailIcon, LockFilledIcon } from '@nextui-org/shared-icons';
import { Checkbox } from '@nextui-org/react';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type Inputs = {
  email: string;
  password: string;
};

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form className="px-3 py-3" onSubmit={handleSubmit(onSubmit)}>
      <div className={'mb-10'}>
        <Input
          isRequired={true}
          label={'Email'}
          labelPlacement={'outside'}
          placeholder={'you@example.com'}
          type={'email'}
          startContent={<MailIcon />}
          defaultValue={''}
          {...register('email')}
          errorMessage={errors.email?.message}
        />

      </div>
      <Input
        isRequired={true}
        label={'Password'}
        labelPlacement={'outside'}
        placeholder={'••••••••'}
        type={'password'}
        startContent={<LockFilledIcon />}
        className={'mb-4'}
        {...register('password')}
        errorMessage={errors.password?.message}
      />
      <div className="flex justify-between">
        <Checkbox size={'sm'} className="mb-1">
          <span className="text-[12px]">Remember me</span>
        </Checkbox>
        <Link
          href={'#'}
          className="text-[13px] text-blue-400 hover:text-blue-500 transition-colors duration-200"
        >
          Forgot password?
        </Link>
      </div>

      <Button color="primary" className="w-full" type={'submit'}>
        Sign In
      </Button>
    </form>
  );
}
