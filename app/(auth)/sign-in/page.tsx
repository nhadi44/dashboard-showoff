'use client';
import { motion, useTime, useTransform } from 'framer-motion';
import SwaggerIcon from '@/components/icons/swagger-icon';
import SignInForm from '@/components/sign-in/sign-in';

export default function SignIn() {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #ff4545, #00ff99, #006aff, #ff0095, #ff4545)`;
  });

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative w-1/4">
        <div className="relative h-full bg-[#000] rounded-md px-3 py-5 transition-colors duration-200 z-10">
          <div className="mb-5 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <SwaggerIcon />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-2xl text-slate-50/80 mb-1">
                System Administration Panel
              </h3>
              <h4 className="font-normal text-[15px]">
                Sign in to your account
              </h4>
            </div>
          </div>
          <SignInForm />
        </div>
        <motion.div
          className="absolute -inset-[1.5px] rounded-md"
          style={{
            background: rotatingBg,
            filter: 'blur(10px)',
          }}
        ></motion.div>
      </div>
    </section>
  );
}
