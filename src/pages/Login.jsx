
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';



const Login = () => {
    return (
        <>
            <div className='bg-red flex h-screen align-items-center justify-content-center' >

                <form className='surface-0 p-3 border-round-md'>
                    <h3 className='text-center text-4xl'>Sejam bem-vindos!</h3>
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
                    <InputText
                        id='email'
                        placeholder='insira seu email' className='mb-3 w-full' />

                    <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'>Senha</label>
                    <div className='mb-3 '>
                        <IconField>
                            <InputIcon className="pi pi-eye"> </InputIcon>
                            <InputText
                                id='senha'
                                placeholder='digite sua senha' className='w-full' />
                        </IconField>

                    </div>

                    <Button
                        label="Entrar"
                        type='submit' 
                        className='w-full'/>

                </form>
            </div>
        </>

    );
}

export default Login;