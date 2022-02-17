import AuthLayout from '../../components/layouts/auth/AuthLayout'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Register = () => {

  //เรียกใช้งาน react hook form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const handleRegistration = (data) => console.log(data);
    const handleError = (errors) => {};

    const registerOptions = {
      fullname: { required: "Name is required"},
      email: { required: "Email is required"},
      username: { required: "Username is required"},
      password: { required: "Password is required"}
      }

  //สร้าง function รับข้อมูลจาก react hook form ไปใช้
  // const registerSubmit = (data, e) => { console.log(data) }

  return (
    <AuthLayout title='Register'>
        <form className="card p-4 col-md-4 my-form" onSubmit={handleSubmit(handleRegistration, handleError)}>
        <h3 className="text-center mb-4">ลงทะเบียน</h3>

        <div className="mb-3 row">
          <label htmlFor="fullname" className="col-md-4 col-form-label">
            ชื่อ-สกุล
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              {...register("fullname", registerOptions.fullname)}
            />
            <small className="text-danger">{errors?.fullname && errors.fullname.message}</small>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="email" className="col-md-4 col-form-label">
            อีเมล์
          </label>
          <div className="col-md-8">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              {...register('email', registerOptions.email)}
            />
            <small className="text-danger">{errors?.email && errors.email.message}</small>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="username" className="col-md-4 col-form-label">
            ชื่อผู้ใช้
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              {...register('username', registerOptions.username)}
            />
            <small className="text-danger">{errors?.username && errors.username.message}</small>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="password" className="col-md-4 col-form-label">
            รหัสผ่าน
          </label>
          <div className="col-md-8">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              {...register('password', registerOptions.password)}
            />
            <small className="text-danger">{errors?.password && errors.password.message}</small>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="submit" className="col-md-4 col-form-label"></label>
          <div className="col-md-8 btn-action">
            <input
              type="submit"
              className="btn btn-primary"
              name="submit"
              id="submit"
              value="ลงทะเบียน"
            />
            &nbsp;&nbsp;
            <input
              type="reset"
              className="btn btn-danger"
              name="Reset"
              id="reset"
              value="ล้างข้อมูล"     
              onClick={() => reset({
                fullname: '',
                email: '',
                username: '',
                password: ''
              })
            }
            />
          </div>
        </div>

        <div className="mb-2 row btn-action">
          <label htmlFor="" className="col-md-4 col-form-label"></label>
          <div className="col-md-8">
            <Link to="/login">เข้าสู่ระบบ</Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Register