import {data} from "autoprefixer";

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {name, owner, date, email, symptom, id} = paciente

    const handleDelete  = () => {
      const respuesta = confirm('Do you wish to delete this patient?')
        if(respuesta){eliminarPaciente(id)}

    }

    return (

        <div className="mx-5 my-10 bg-white shadow-md px-5 py10 rounded-xl ">
            <p className=" font-bold mb-3 text-gray-700 uppercase">Name: {" "}
                <span className="font-normal normal-case">{name}</span>

            </p>

            <p className=" font-bold mb-3 text-gray-700 uppercase">Owner: {" "}
                <span className="font-normal normal-case">{owner}</span>

            </p>

            <p className=" font-bold mb-3 text-gray-700 uppercase">e-Mail: {" "}
                <span className="font-normal normal-case">{email}</span>

            </p>

            <p className=" font-bold mb-3 text-gray-700 uppercase">Discharge Date: {" "}
                <span className="font-normal normal-case">{date}</span>

            </p>

            <p className=" font-bold mb-3 text-gray-700 uppercase">Symptom: {" "}
                <span className="font-normal normal-case">{symptom}</span>

            </p>

            <div className="flex justify-between mt-10" >
                <button type="button"
                        className="py-2 px10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg w-40 mb-5"
                        onClick={()=>setPaciente(paciente)}
                >   Edit
                </button>

                <button type="button"
                        className="py-2 px10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg w-40 mb-5"
                        onClick={()=> eliminarPaciente(id)}
                >Delete
                </button>
            </div>


        </div>
    )

}
export default Paciente