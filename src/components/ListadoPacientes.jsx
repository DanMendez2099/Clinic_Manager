
import Paciente from "./Paciente.jsx";
import paciente from "./Paciente.jsx";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

      return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-center text-3xl">
                        Patient List
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Manage your  {" "}
                        <span className="text-indigo-600 font-bold ">
                    patients and appointments
                </span>
                    </p>
                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-center text-3xl">
                        Patient List
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Add appointments {" "}
                        <span className="text-indigo-600 font-bold ">
                to show here
                </span>
                    </p>
                </>
            )}
        </div>
    )


}
export default ListadoPacientes