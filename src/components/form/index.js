import './style.css'
import { useForm } from 'react-hook-form'


const Formulario = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        reset();
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} className='formulario'>
            <div className='input-default'>
                <label htmlFor='nome'>Nome do solicitante</label>
                <input
                    type="text"
                    id='nome'
                    {...register('nome', { required: 'Campo Obrigatório' })}
                />
                {errors.nome && <p>{errors.nome.message}</p>}
            </div>

            <div className='input-default'>
                <label htmlFor='email'>Email do solicitante</label>
                <input
                    type="text"
                    id='email'
                    {...register('email', {
                        required: 'Campo Obrigatório',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Email inválido',
                        }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className='input-default'>
                <label htmlFor='titulo'>Titulo da Mensagem:</label>
                <input
                    type="text"
                    id='titulo'
                    {...register('titulo', { required: 'Campo Obrigatório' })}
                />
                {errors.titulo && <p>{errors.titulo.message}</p>}
            </div>

            <div className="input-text">
                <label htmlFor="mensagem">Escreva sua mensagem *</label>
                <textarea
                    type="text"
                    id="mensagem"
                    {...register('mensagem', { required: 'Campo Obrigatório' })}
                />

                {errors.mensagem && <p>{errors.mensagem.message}</p>}

            </div>



            <div>
                <button type='submit'>Enviar</button>
            </div>

        </form>

    )
}


export default Formulario