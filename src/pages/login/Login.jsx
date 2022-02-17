import AuthLayout from '../../components/layouts/auth/AuthLayout'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'

 

const Login = () => {

    //สร้างตัวแปร state ไว้รับค่าจาก form
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //สร้างตัวแปรสำหรับเปลี่ยนหน้า
    let navigate = useNavigate()

    //เช็คว่ามีการ log in แล้วให้ไป dashboard เลย
    // if(localStorage.getItem("name") === "admin"){
    // navigate('/backend/dashboard')
    // }

    //function สำหรับการ submit form
    const handleSubmit = (e) => {e.preventDefault()

        //check data from state
        //console.log(username, password)

        if(username === "admin" && password === "1234"){
            //alert("Login Successful")
            let timerInterval
            Swal.fire({
                html: 'Log in completed <b></b>',
                timer: 1000,
                timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                        const content = Swal.getContent()
                        if(content){
                            const b = content.querySelector('b')
                        if(b){
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                    }, 1000)
                },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
            }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer){
            navigate('/backend/dashboard')
            localStorage.setItem('name',username)
        }})
        }else{
            //alert("Login Failed")
            Swal.fire({
                title: 'Login Failed',
                text: 'Username or Password wrong',
                icon: 'error',
                confirmButtonText: 'Try Again',
                allowOutsideClick: false,
                allowEscapeKey: true
                }
              )
        }
    }

  return (
    <AuthLayout title='Login'>
        <form className='card p-4 col-md-4 my-form' onSubmit={handleSubmit}>
            <h3 className='text-center mb-4'>Log In</h3>
            <div className='mb-3 row'>
                <label htmlFor='username' className='col-md-4 col-form-label'>ชื่อผู้ใช้</label>
                <div className='col-md-8'>
                    <input
                        type='text'
                        className='form-control'
                        name='username'
                        id='username'
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                </div>
            </div>

            <div className='mb-3 row'>
                <label htmlFor='password' className='col-md-4 col-form-label'>รหัสผ่าน</label>
                <div className='col-md-8'>
                    <input
                        type='password'
                        className='form-control'
                        name='password'
                        id='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>
            </div>

            <div className='mb-3 row'>
                <label htmlFor='submit' className='col-md-4 col-form-label'></label>
                <div className='col-md-8 btn-action'>
                    <input
                        type='submit'
                        className='btn btn-primary'
                        name='submit'
                        id='submit'
                        value='LogIn'
                    />
                </div>
            </div>

            <div className='mb-2 row btn-action'>
                <label htmlFor='' className='col-md-4 col-form-label'></label>
                <div className='col-md-8'><Link to="/forgotpassword">Forgot Password</Link></div>
            </div>

            <div className='mb-2 row btn-action'>
                <label htmlFor='' className='col-md-4 col-form-label'></label>
                <div className='col-md-8'><Link to="/register">Sign Up</Link></div>
            </div>
        </form>
    </AuthLayout>
  )
}

export default Login