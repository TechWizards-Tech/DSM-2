import './loginform.css'

function Loginform() {


    return (
        <div>

            <form>
                <h2 className='font-sans text-xl text-green-400'>Faça seu Login ou Cadastre-se</h2>
                <input type="text" name='nome' placeholder='Nome' />
                <input type="number" name='idade' placeholder='Idade' />
                <input type="email" name='email' placeholder='Email' />
                <button type='button'>Cadastre-se!!</button>
                <button type='button'>Login</button>
            </form>
        </div>
    )
}

export default Loginform