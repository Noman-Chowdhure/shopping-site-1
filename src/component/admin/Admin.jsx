import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import app from '../../firebase/firebase.config';

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const auth = getAuth(app);
  
  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center gap-10 md:gap-20'>
      <div className="img">
        <img src="https://i.pinimg.com/originals/7b/5e/f9/7b5ef91305a288fa2bd8f690f7956582.gif" alt="" />
      </div>
      <div className="form w-full">
        <form className='w-10/12 space-y-5' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-4xl md:text-7xl font-light capitalize'>welcome boss..</h1>
          
          <input
            className='w-full h-full mt-4 ps-5 bg-transparent border-b-[1px] outline-none border-zinc-300'
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="Email"
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}
          
          <input
            className='w-full h-full mt-4 ps-5 bg-transparent border-b-[1px] outline-none border-zinc-300'
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
            placeholder="Password"
            type="password"
          />
          {errors.password && <p role="alert">{errors.password.message}</p>}
          
          <input
            className='p-2 text-center shadow-xl rounded-lg bg-slate-200 cursor-pointer'
            type="submit"
            value='Submit'
          />
        </form>
      </div>
    </div>
  );
};

export default Admin;
