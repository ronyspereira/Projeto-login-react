
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const { register, handleSubmit } = useForm();

    const { setLogado } = useContext(Context);

    const navigate = useNavigate();

    function logar(dados) {
        if (dados.email == "rony@gmail.com" && dados.senha == "123456") {
            setLogado(true);
            navigate('/home');
        }
        else {
    alert("Email ou senha incorretos");
}
    }

return (
    <>
        <div className='flex h-screen align-items-center justify-content-center px-3' style={{ backgroundColor: 'var(--primary-500)' }}>

            <form onSubmit={handleSubmit(logar)} className='col-12 md:col-3 p-3 border-round-md' style={{ backgroundColor: '#ffffff' }}>
                <h3 className='text-center text-4xl'>Sejam bem-vindos!</h3>
                <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
                <InputText
                    id='email'
                    placeholder='insira seu email' className='mb-3 w-full'
                    {...register('email', { required: true })} />

                <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'>Senha</label>
                <div className='mb-3 '>
                    <IconField>
                        <InputIcon className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                            onClick={() => setMostrarSenha(!mostrarSenha)}> </InputIcon>
                        <InputText
                            id='senha'
                            type={mostrarSenha ? 'text' : 'password'}
                            placeholder='digite sua senha' className='w-full'
                            {...register('senha', { required: true })} />
                    </IconField>

                </div>

                <Button
                    label="Entrar"
                    type='submit'
                    className='w-full' />

            </form>
        </div>
    </>

);
}

export default Login;