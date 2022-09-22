import {useState, useEffect} from "react";
import Error from "./Error.jsx";


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptom, setSymptom] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setName(paciente.name)
            setOwner(paciente.owner)
            setEmail(paciente.email)
            setDate(paciente.date)
            setSymptom(paciente.symptom)
        }
    }, [paciente])

    const generateId = () => {
        const random = Math.random().toString(36).substr(2)
        const thisDate = Date.now().toString(36)
        return random + this
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([name, owner, email, date, symptom].includes('')) {
            setError(true)
            return;
        }
        setError(false)

        const objetoPaciente = {
            name,
            owner,
            email,
            date,
            symptom,
        }

        if (paciente.id) {
            // Edit Existing Registration
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id===
            paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            //New Registration
            objetoPaciente.id = generateId()
            setPacientes([...pacientes, objetoPaciente]);
        }



        //REINICIAR FORMULARIO
        setName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptom('')
    }

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>
                Appointment
            </h2>
            <p className='text-lg mt-5 text-center'>
                Add and Manage {""}
                <span className='text-indigo-600 font-bold mb-10 '> Patients </span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error && <Error><p>All fields are required</p></Error>}
                <div className="mb-5">
                    <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">
                        Pet Name
                    </label>
                    <input
                        id="petName"
                        type="text"
                        placeholder="Pet's Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
                        Owner's Name
                    </label>
                    <input
                        id="owner"
                        type="text"
                        placeholder="Owner's Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        e-Mail
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Owner's e-Mail"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="discharge" className="block text-gray-700 uppercase font-bold">
                        Discharge Date
                    </label>
                    <input
                        id="discharge"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="symptom" className="block text-gray-700 uppercase font-bold">
                        Symptom
                    </label>
                    <textarea
                        id="symptom"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe patient's symptom"
                        value={symptom}
                        onChange={(e) => setSymptom(e.target.value)}

                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 p-3 w-full text-white font-bold
                    uppercase hover:bg-indigo-800 cursor-pointer transition-all"
                    value={paciente.id ? 'Edit Patient' : 'Add Patient'}
                />

            </form>

        </div>

    )

}
export default Formulario
