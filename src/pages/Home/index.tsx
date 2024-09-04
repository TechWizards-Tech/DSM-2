
import './style.css'
import Trash from './../../assests/trash.svg'

function Home() {

  const users = [

    {
      id: 'idteste1234',
      name: 'Leandro',
      age: 36,
      email: 'leandro@email.com'
    },
    {
      id: 'idteste4321',
      name: 'Poly',
      age: 18,
      email: 'poly@email.com'
    },
    {
      id: 'idteste5678',
      name: 'Felipe',
      age: 30,
      email: 'felipe@email.com'
    },
    {
      id: 'idteste78',
      name: 'raquel',
      age: 16,
      email: 'raquel@email.com'
    }

  ]


  return (
    <div>

      {users.map(user => (

        <div key={user.id} className='bg-green-50'>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img className='icon-small' src={Trash} />
          </button>
        </div>

      ))}

    </div>
  )
}

export default Home

