import { useEffect, useRef, useState } from "react";
import "../index.css"
import { CircleQuestionMark, User2 } from "lucide-react";
import { CardReservationProps } from "../types/CardReservationProps";
import { HeaderReservation } from "./Headers";
import Footer from "./Footer";
import Swal from 'sweetalert2'
import dayjs, { Dayjs } from "dayjs";
import Calendar from "./Calendar";

const CardReservation = ({ name, email, cedula, phoneNumber, quantityPeople, date }: CardReservationProps) => {
    return (
        <div className="bg-white border-1 border-gray-400 p-6 rounded-xl max-lg:w-full">

            <div className="mb-4 flex gap-2 text-2xl font-semibold items-center">
                <User2 size={26} />
                <p>{name}</p>
            </div>

            <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between gap-16">
                    <p className="text-gray-600">Correo</p>
                    <p>{email}</p>
                </div>
                <div className="border-1 border-gray-300 mt-2"></div>
                <div className="w-full flex justify-between gap-16">
                    <p className="text-gray-600">Cédula</p>
                    <p>{cedula}</p>
                </div>
                <div className="border-1 border-gray-300 mt-2"></div>
                <div className="w-full flex justify-between gap-16">
                    <p className="text-gray-600">Teléfono</p>
                    <p>{phoneNumber}</p>
                </div>
                <div className="border-1 border-gray-300 mt-2"></div>
                <div className="w-full flex justify-between gap-16">
                    <p className="text-gray-600">Número de personas</p>
                    <p>{quantityPeople}</p>
                </div>
                <div className="border-1 border-gray-300 mt-2"></div>
                <div className="w-full flex justify-between gap-16">
                    <p className="text-nowrap text-gray-600">Fecha y hora</p>
                    <p className="text-nowrap">{date}</p>
                </div>

            </div>
        </div>
    )
}

function GetReservation() {
    const [showAlert, setShowAlert] = useState(false)
    const [cedula, setCedula] = useState("")
    const [validationLoading, setValidationLoading] = useState(false);
    const [error, setError] = useState(false)
    const [errorNotFound, setErrorNotFound] = useState(false)
    const [reservations, setReservations] = useState<CardReservationProps[]>([]);

    const validateAndFetchReservation = async (e: React.FormEvent) => {
        e.preventDefault();

        setError(false);
        setErrorNotFound(false);
        setReservations([]);
        setValidationLoading(true);

        if (!cedula.trim()) {
            console.log("Campo cédula vacío");
            setError(true);
            setValidationLoading(false);
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/api/get/cedula/${cedula}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                console.log("Error del servidor:", response.status, response.statusText);
                setErrorNotFound(true);
                setValidationLoading(false);
                return;
            }

            const data = await response.json();

            if (!data || (Array.isArray(data) && data.length === 0)) {
                console.log("No hay datos o array vacío");
                setErrorNotFound(true);
                setValidationLoading(false);
                return;
            }

            let validReservations: any = [];

            if (Array.isArray(data)) {
                validReservations = data.filter(reservation => {
                    return reservation.cedula === cedula;
                });
            } else {
                if (data.cedula === cedula) {
                    validReservations = [data];
                }
            }

            if (validReservations.length === 0) {
                console.log("No se encontraron reservas para esta cédula");
                setErrorNotFound(true);
                setValidationLoading(false);
                return;
            }

            setReservations(validReservations);
            handleAlertSuccess(validReservations.length);

        } catch (error) {
            console.error(" Error en catch:", error);
            setErrorNotFound(true);
            handleAlertError();
        } finally {
            setValidationLoading(false);
        }
    };

    const handleAlertSuccess = (count: number) => {
        setShowAlert(prev => !prev);
        Swal.fire({
            title: `${count === 1 ? 'Reserva' : 'Reservas'} ${count === 1 ? 'encontrada' : 'encontradas'}`,
            text: `Se ${count === 1 ? 'ha encontrado' : 'han encontrado'} ${count} reserva${count === 1 ? '' : 's'} para la cédula ${cedula}`,
            icon: "success"
        });
    };

    const handleAlertError = () => {
        setShowAlert(prev => !prev);
        Swal.fire({
            title: "Error!",
            text: `No se encontraron reservas para la cédula ${cedula}`,
            icon: "error"
        });
    };

    const handleCedulaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCedula(e.target.value);
        if (error) setError(false);
        if (errorNotFound) setErrorNotFound(false);
    };

    return (
        <section className="mt-40">
            <div className="flex flex-col gap-10 items-center justify-center">
                <h2 className="titles text-4xl font-semibold text-center">Consultar reservas</h2>
                <div className="flex gap-2 flex-col items-center w-full max-w-6xl mx-auto px-4">
                    <form
                        onSubmit={validateAndFetchReservation}
                        className="flex flex-wrap max-w-[600px] gap-x-2 gap-y-4 w-full"
                    >
                        <input
                            value={cedula}
                            onChange={handleCedulaChange}
                            maxLength={15}
                            type="text"
                            className="cursor-pointer border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl w-full"
                            placeholder="Cédula"
                            required
                            disabled={validationLoading}
                        />

                        {error && (
                            <p className="text-red-500 font-semibold text-center w-full">
                                Campo obligatorio. Por favor, digite la cédula
                            </p>
                        )}

                        {errorNotFound && (
                            <p className="text-red-500 font-semibold text-center w-full">
                                No se encontraron reservas asociadas al número de cédula
                            </p>
                        )}

                        <div className="flex justify-center px-6 mt-4 w-full">
                            <button
                                type="submit"
                                className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold"
                            >
                                {validationLoading ? 'Consultando...' : 'Consultar reservas'}
                            </button>
                        </div>
                    </form>

                    {reservations.length > 0 && (
                        <div className="mt-10 w-full">

                            <div className="flex justify-center w-full">
                                <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-3 w-full">
                                    {reservations.map((reserva, index) => {
                                        const newDate = new Date(reserva.date);
                                        const formatDate = `${newDate.toLocaleDateString('es-CO')} ${newDate.toLocaleTimeString('es-CO', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true,
                                        })}`;

                                        return (
                                            <div key={reserva.id || `reserva-${index}`} className="flex justify-center">
                                                <CardReservation
                                                    name={reserva.name}
                                                    email={reserva.email}
                                                    cedula={reserva.cedula}
                                                    phoneNumber={reserva.phoneNumber}
                                                    quantityPeople={reserva.quantityPeople}
                                                    date={formatDate}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

function CreateReservation() {
    const [showAlert, setShowAlert] = useState(false)
    const [peopleCount, setPeopleCount] = useState("")
    const [missingFields, setMissingFields] = useState(false)
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [moreThanMax, setMoreThanMax] = useState(false);
    const [moreThanMaxCedula, setMoreThanMaxCedula] = useState(false);
    const [moreThanMaxPhoneNumber, setMoreThanMaxPhoneNumber] = useState(false);
    const [validationLoading, setValidationLoading] = useState(false);
    const [validHour, setValidHour] = useState(false);
    const initialState: CardReservationProps = {
        name: '',
        email: '',
        cedula: '',
        phoneNumber: '',
        quantityPeople: String(peopleCount),
        date: selectedDate?.toISOString() ?? "",
    }

    const [form, setForm] = useState<CardReservationProps>(initialState);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const allFieldsFilled = Object.values(form).every(value => value.trim() !== '')
        if (!allFieldsFilled) {
            setMissingFields(true)
            return;
        }

        await Create();
        setValidHour(false)
        setMissingFields(false)
        setValidationLoading(false);
    };

    const Create = async () => {
        setValidationLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al crear la reserva')
            }

            console.log('Reserva creada', data);
            handleAlertSucess();
            form.name = ''
            form.email = ''
            form.cedula = ''
            form.phoneNumber = ''
            setPeopleCount('')
            setSelectedDate(null)

        } catch (error) {
            console.log("error al crear la reserva, Error: ", error)
            handleAlertError()
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));

        if (name === 'phoneNumber') {
            const phoneValue = Number(value);
            setMoreThanMaxPhoneNumber(phoneValue.toString().length < 7);
        }
        if (name === 'cedula') {
            const cedulaValue = Number(value);
            setMoreThanMaxCedula(cedulaValue.toString().length < 7);
        }
    };

    const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = Number(value);

        if (numericValue > 15) {
            setMoreThanMax(true);
        } else {
            setMoreThanMax(false);
        }

        setPeopleCount(value);
        setForm(prev => ({ ...prev, quantityPeople: value }));
    };

    const handleAlertSucess = () => {
        setShowAlert(prev => !prev)
        Swal.fire({
            title: "Reserva creada!",
            text: `Creaste tu reserva para el día y hora: ${formatDate}!`,
            icon: "success"
        });
    }

    const handleAlertError = () => {
        setShowAlert(prev => !prev)
        Swal.fire({
            title: "Error",
            text: `No se pudo crear la reserva porque ya existe una reserva para ese día y hora.`,
            icon: "error"
        });
    };

    useEffect(() => {
        if (selectedDate) {
            const hour = selectedDate.hour()
            const isValidHour = hour >= 8 && hour <= 22;

            if (!isValidHour) {
                setValidHour(true);
                console.log("La hora es incorrecta");
                return;
            }

            setForm(prev => ({ ...prev, date: selectedDate.toISOString() }));
        }

    }, [selectedDate]);

    const originalDate = form.date;
    const newDate = new Date(originalDate);

    const formatDate = `${newDate.toLocaleDateString('es-CO')} ${newDate.toLocaleTimeString('es-CO', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })}`;
    return (
        <>
            <section className="flex flex-col gap-10 mt-40 justify-around shadow-2xl p-10 rounded-xl bg-[url('/bgs/test.png')] bg-cover bg-no-repeat bg-center w-full">

                <h2 className="titles text-4xl font-semibold text-center">Reservar</h2>

                <div className="containerCreateReservation flex gap-2 flex-col mx-4 max-w-[510px]">

                    <form method="post" onSubmit={(e) => { e.preventDefault(); Create(); }} className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">

                        <label className="flex flex-col w-full">
                            <span className="text-lg font-semibold mb-2">Nombre</span>
                            <input
                                required
                                value={form.name}
                                name="name"
                                onChange={handleInputChange}
                                maxLength={50}
                                type="text" className="cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg w-full" />
                        </label>

                        <label className="flex flex-col w-full">
                            <span className="text-lg font-semibold mb-2">Teléfono</span>
                            <input
                                required
                                value={form.phoneNumber}
                                name="phoneNumber"
                                onChange={handleInputChange}
                                maxLength={15}
                                type="text" className="cursor-pointer border border-gray-800 bg-white flex px-4 py-2 rounded-lg" />
                            {moreThanMaxPhoneNumber && <p className="text-red-500 font-semibold w-full">El número de teléfono es muy corto</p>}
                        </label>

                        <label className="labelResponsive">
                            <span className="text-lg font-semibold">Cédula</span>
                            <input
                                required
                                value={form.cedula}
                                name="cedula"
                                onChange={handleInputChange}
                                maxLength={15}
                                type="text" className="mt-2 cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg" />
                            {moreThanMaxCedula && <p className="text-red-500 font-semibold w-full">El número de cédula es muy corto</p>}
                        </label>

                        <label className="labelResponsive">
                            <span className="text-lg font-semibold mb-2">Número de personas</span>
                            <input
                                required
                                name="quantityPeople"
                                type="text"
                                value={peopleCount}
                                onChange={handlePeopleChange}
                                maxLength={2}
                                className="mt-2 cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg"
                            />
                            {moreThanMax && <p className="text-red-500 font-semibold max-w-60 max-[1170px]:max-w-full">El número de personas debe ser menor de 16</p>}
                        </label>

                        <label className="flex flex-col w-full">
                            <span className="text-lg font-semibold mb-2">Email</span>
                            <input
                                required
                                value={form.email}
                                name="email"
                                onChange={handleInputChange}
                                maxLength={70}
                                type="email" className="cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg" />
                        </label>

                        <label className="w-full flex flex-col">
                            <span className="text-lg font-semibold mb-2"> Fecha a reservar</span>
                            <Calendar value={selectedDate} onChange={setSelectedDate} />
                        </label>

                        {validHour &&
                            <p className="text-red-500 font-semibold text-center w-full">El rango de hora es inválido, puedes reservar entre 8:00 y 22:00.</p>
                        }

                        {missingFields &&
                            <p className="text-red-500 font-semibold text-center w-full">Faltan campos obligatorios</p>
                        }

                        <div className="w-full flex justify-center px-6 mt-4 flex-nowrap gap-2">
                            <button
                                disabled={validationLoading}
                                onClick={handleSubmit}
                                className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold">
                                {validationLoading ? 'Reservando...' : 'Reservar'}
                            </button>
                        </div>
                    </form>

                </div>
            </section>
        </>
    );
}

function UpdateReservation() {
    const [peopleCount, setPeopleCount] = useState("")
    const [cedula, setCedula] = useState("")
    const [clavePrivada, setClavePrivada] = useState("")
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [missingFields, setMissingFields] = useState(false)
    const [loading, setLoading] = useState(false);
    const [validationLoading, setValidationLoading] = useState(false);
    const [moreThanMax, setMoreThanMax] = useState(false);
    const [validHour, setValidHour] = useState(false);

    const [form, setForm] = useState<CardReservationProps>({
        id: "",
        name: "",
        email: "",
        cedula: "",
        phoneNumber: "",
        quantityPeople: "",
        date: "",
    })

    const validateAndFetchReservation = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!cedula || !clavePrivada) {
            console.log("Faltan datos:", { cedula: !!cedula, clavePrivada: !!clavePrivada });
            setError(true);
            return;
        }
        setValidationLoading(true);
        setError(false);

        try {
            const response = await fetch(`http://localhost:3000/api/get/cedula/${cedula}`);
            if (!response.ok) {
                console.log("Algo falló en el fetch: ", response.status, response.statusText);
                setError(true);
                setValidationLoading(false);
                return;
            }

            const reservationData = await response.json();

            let targetReservation: any = null;
            if (Array.isArray(reservationData)) {
                targetReservation = reservationData.find(reservation => reservation.id === clavePrivada);
            } else {
                targetReservation = reservationData;
            }

            if (!targetReservation) {
                setError(true);
                setValidationLoading(false);
                return;
            }

            const formData = {
                id: targetReservation.id ?? "",
                name: targetReservation.name ?? "",
                email: targetReservation.email ?? "",
                cedula: targetReservation.cedula ?? "",
                phoneNumber: targetReservation.phoneNumber ?? "",
                quantityPeople: targetReservation.quantityPeople ?? "",
                date: targetReservation.date ?? "",
            };
            setForm(formData);
            setPeopleCount(targetReservation.quantityPeople || "");

            if (targetReservation.date) {
                setSelectedDate(dayjs(targetReservation.date));
            }
            setShowUpdateForm(true);

        } catch (error) {
            console.error("Error en catch:", error);
            setError(true);
        }
    };

    const handleUpdateSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.quantityPeople || !form.date) {
            setMissingFields(true);
            return;
        }

        await updateReservation();
        setMissingFields(false);
        setValidHour(false)   
        setValidationLoading(false)
    };

    const updateReservation = async () => {
        setLoading(true);

        try {
            const updateData = {
                name: form.name,
                cedula: form.cedula,
                email: form.email,
                phoneNumber: form.phoneNumber,
                quantityPeople: form.quantityPeople,
                date: form.date
            };

            const response = await fetch(`http://localhost:3000/api/update/${form.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error al actualizar la reserva");
            }

            handleAlertSuccess();
        } catch (error) {
            console.log("Error al actualizar la reserva:", error);
            handleAlertError();
        } finally {
            setLoading(false);
        }
    };

    const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = Number(value);

        if (numericValue > 15) {
            setMoreThanMax(true);
        } else {
            setMoreThanMax(false);
        }
        setPeopleCount(value);
        setForm(prev => ({ ...prev, quantityPeople: value }));
    };

    const handleAlertSuccess = () => {
        setShowAlert(prev => !prev);
        Swal.fire({
            title: "Reserva actualizada!",
            text: `Actualizaste tu reserva para el día y hora: ${formatDate}!`,
            icon: "success"
        });

        setTimeout(() => {
            setShowUpdateForm(false);
            setCedula("");
            setClavePrivada("");
            setForm({
                id: "",
                name: "",
                email: "",
                cedula: "",
                phoneNumber: "",
                quantityPeople: "",
                date: "",
            });
        }, 2000);
    };

    const handleAlertError = () => {
        setShowAlert(prev => !prev);
        Swal.fire({
            title: "Error",
            text: `No se pudo actualizar la reserva porque ya existe una reserva en ese día y hora.`,
            icon: "error"
        });
    };

    const handleMessage = () => {
        setMessage(prev => !prev);
        setTimeout(() => {
            setMessage(false);
        }, 8000);
    };

    useEffect(() => {
        if (selectedDate) {
            const hour = selectedDate.hour()
            const isValidHour = hour >= 8 && hour <= 22;

            if (!isValidHour) {
                setValidHour(true);
                console.log("La hora es incorrecta");
                return;
            }
            setForm(prev => ({ ...prev, date: selectedDate.toISOString() }));
        }

    }, [selectedDate]);

    const originalDate = form.date;
    const newDate = new Date(originalDate);
    const formatDate = `${newDate.toLocaleDateString('es-CO')} ${newDate.toLocaleTimeString('es-CO', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })}`;
    return (
        <>
            {showUpdateForm ? (
                <section className="flex flex-col gap-10 mt-40 justify-around shadow-2xl p-10 rounded-xl bg-[url('/bgs/test.png')] bg-cover bg-no-repeat bg-center w-full">
                    <h2 className="titles text-4xl font-semibold text-center">Actualizar reserva</h2>

                    <div className="containerCreateReservation flex gap-2 flex-col mx-4 max-w-[510px]">
                        <form onSubmit={handleUpdateSubmit} className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">

                            <label className="flex flex-col w-full">
                                <span className="text-lg font-semibold mb-2">Nombre</span>
                                <input
                                    disabled
                                    required
                                    value={form.name}
                                    name="name"
                                    type="text" className="cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg w-full" />
                            </label>

                            <label className="flex flex-col w-full">
                                <span className="text-lg font-semibold mb-2">Teléfono</span>
                                <input
                                    disabled
                                    required
                                    value={form.phoneNumber}
                                    name="phoneNumber"
                                    type="text" className="cursor-pointer border border-gray-800 bg-white flex px-4 py-2 rounded-lg" />
                            </label>

                            <label className="labelResponsive">
                                <span className="text-lg font-semibold">Cédula</span>
                                <input
                                    disabled
                                    required
                                    value={form.cedula}
                                    name="cedula"
                                    type="text" className="mt-2 cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg" />
                            </label>

                            <label className="labelResponsive">
                                <span className="text-lg font-semibold mb-2">Número de personas</span>
                                <input
                                    required
                                    name="quantityPeople"
                                    type="text"
                                    value={peopleCount}
                                    maxLength={2}
                                    onChange={handlePeopleChange}
                                    className="mt-2 cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg"
                                />
                            </label>
                            {moreThanMax && <p className="text-red-500 font-semibold w-full flex justify-end">El número de personas debe ser menor de 16</p>}

                            <label className="flex flex-col w-full">
                                <span className="text-lg font-semibold mb-2">Email</span>
                                <input
                                    disabled
                                    required
                                    value={form.email}
                                    name="email"
                                    type="email" className="cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg" />
                            </label>

                            <label className="w-full flex flex-col">
                                <span className="text-lg font-semibold mb-2"> Fecha a reservar</span>
                                <Calendar value={selectedDate} onChange={setSelectedDate} />
                            </label>

                            {validHour &&
                                <p className="text-red-500 font-semibold text-center w-full">El rango de hora es inválido, puedes reservar entre 8:00 y 22:00.</p>
                            }

                            {missingFields && (
                                <p className="text-red-500 font-semibold text-md text-center w-full">
                                    Por favor completa todos los campos requeridos
                                </p>
                            )}
                        </form>
                        <div className="flex justify-center px-6 mt-4 flex-nowrap gap-2">
                            <button
                                onClick={handleUpdateSubmit}
                                disabled={loading}
                                className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold disabled:opacity-50">
                                {loading ? 'Actualizando...' : 'Actualizar reserva'}
                            </button>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="flex flex-col gap-10 mt-40 justify-around mx-2">
                    <h2 className="titles text-4xl font-semibold text-center text-nowrap">Actualizar reserva</h2>

                    <div className="flex gap-2 flex-col">
                        <form onSubmit={validateAndFetchReservation} className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">

                            <input
                                value={cedula}
                                onChange={(e) => setCedula(e.target.value)}
                                maxLength={16}
                                type="text"
                                className="cursor-pointer border-gray-800 border bg-white flex px-4 py-2 rounded-2xl w-full"
                                placeholder="Cédula"
                                required />

                            <label className="w-full relative">
                                <CircleQuestionMark
                                    onClick={handleMessage}
                                    className="absolute right-0 mt-2 mr-4 cursor-pointer" />
                                <input
                                    value={clavePrivada}
                                    onChange={(e) => setClavePrivada(e.target.value)}
                                    maxLength={30}
                                    type="text"
                                    className="w-full cursor-pointer border border-gray-800 bg-white flex px-4 py-2 rounded-2xl"
                                    placeholder="Clave privada"
                                    required
                                    title="La clave privada fue enviada al correo" />
                                <p
                                    style={{ display: message ? 'block' : 'none' }}
                                    className="w-fit px-4 py-2 font-semibold absolute top-0 right-0 mr-8 text-gray-600">
                                    La clave privada fue enviada al correo
                                </p>
                            </label>

                            {error && (
                                <p className="text-red-500 font-semibold text-md text-center w-full">
                                    La cédula o la clave es errónea
                                </p>
                            )}

                            <div className="w-full flex justify-center px-6 mt-4 flex-wrap gap-2">
                                <button
                                    type="submit"
                                    disabled={validationLoading}
                                    className="border-6 border-double bg-amber-500 px-8 py-2 rounded-xl hover:bg-amber-500 cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold disabled:opacity-50">
                                    {validationLoading ? 'Validando...' : 'Buscar reserva'}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            )}
        </>
    );
}

function DeleteReservation() {
    const [error, setError] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState(false)
    const [cedula, setCedula] = useState("")
    const [clavePrivada, setClavePrivada] = useState("")
    const [validationLoading, setValidationLoading] = useState(false);
    const [confirmationLoading, setConfirmationLoading] = useState(false);
    const deleteModal = useRef<HTMLDialogElement>(null)
    const confirmDeleteModal = useRef<HTMLDialogElement>(null)
    const overlay = useRef<HTMLDivElement>(null)
    const [form, setForm] = useState<CardReservationProps>({
        id: "",
        name: "",
        email: "",
        cedula: "",
        phoneNumber: "",
        quantityPeople: "",
        date: "",
    })

    const validateAndFetchReservation = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!cedula || !clavePrivada) {
            console.log("Faltan datos:", { cedula: !!cedula, clavePrivada: !!clavePrivada });
            setError(true);
            return;
        }

        setValidationLoading(true);
        setError(false);
        try {
            const response = await fetch(`http://localhost:3000/api/get/cedula/${cedula}`);
            if (!response.ok) {
                console.log("Algo falló en el fetch: ", response.status, response.statusText);
                setError(true);
                setValidationLoading(false);
                return;
            }
            const reservationData = await response.json();

            let targetReservation: any = null;
            if (Array.isArray(reservationData)) {
                targetReservation = reservationData.find(reservation => reservation.id === clavePrivada);
            } else {
                targetReservation = reservationData;
            }

            if (!targetReservation) {
                setError(true);
                setValidationLoading(false);
                return;
            }

            const formData = {
                id: targetReservation.id ?? "",
                name: targetReservation.name ?? "",
                email: targetReservation.email ?? "",
                cedula: targetReservation.cedula ?? "",
                phoneNumber: targetReservation.phoneNumber ?? "",
                quantityPeople: targetReservation.quantityPeople ?? "",
                date: targetReservation.date ?? "",
            };
            setForm(formData);

            if (deleteModal.current) {
                deleteModal.current.showModal();
            }

            if (overlay.current) {
                overlay.current.classList.add("active")
            }

        } catch (error) {
            console.error("Error en catch:", error);
            setError(true);
        }
    };

    const handleDeleteSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setValidationLoading(false)
        setConfirmationLoading(true)
        await deleteReservation();
    }

    const deleteReservation = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/delete/${form.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error("Error al eliminar la reserva");
            }
            handleAlertSucess();
            setCedula('')
            setClavePrivada('')
        } catch (error) {
            console.log("Error al actualizar la reserva:", error);
            handleAlertError();
        }
    }

    const handleMessage = () => {
        setMessage(prev => !prev);
        setTimeout(() => {
            setMessage(false);
        }, 8000)
    }

    const handleAlertSucess = () => {
        setShowAlert(prev => !prev)
        Swal.fire({
            title: "Reserva Eliminada!",
            text: `Eliminaste tu reserva para el día y hora: ${formatDate}!`,
            icon: "success"
        });
        if (confirmDeleteModal.current) {
            confirmDeleteModal.current.close();
        }

        if (overlay.current) {
            overlay.current.classList.remove("active")
        }
    }

    const handleAlertError = () => {
        setShowAlert(prev => !prev)
        Swal.fire({
            title: "Error",
            text: `no se pudo eliminar tu reserva para el día y hora: ${formatDate}!`,
            icon: "error"
        });
        if (confirmDeleteModal.current) {
            confirmDeleteModal.current.close();
        }

        if (overlay.current) {
            overlay.current.classList.remove("active")
        }
    }

    const closeModal = () => {
        if (deleteModal.current) {
            deleteModal.current.close();
        }
        if (overlay.current && !confirmDeleteModal.current?.open) {
            overlay.current.classList.remove("active")
        }
        setValidationLoading(false)
    };

    const handleDialogClose = () => {
        if (!deleteModal.current?.open && !confirmDeleteModal.current?.open) {
            if (overlay.current) {
                overlay.current.classList.remove("active");
            }
        }
    };

    useEffect(() => {
        const modalCurrent = deleteModal.current
        const confirmModalCurrent = confirmDeleteModal.current

        if (modalCurrent && confirmModalCurrent) {
            modalCurrent.addEventListener("close", handleDialogClose);
            confirmModalCurrent.addEventListener("close", handleDialogClose);

            return () => {
                modalCurrent.removeEventListener("close", handleDialogClose);
                confirmModalCurrent.removeEventListener("close", handleDialogClose);
            };
        }
    }, []);

    const openConfirmModal = () => {
        if (confirmDeleteModal.current) {
            confirmDeleteModal.current.showModal();
            deleteModal.current?.close();
        }

        if (overlay.current) {
            overlay.current.classList.add("active")
        }
    };

    const closeConfirmModal = () => {
        if (confirmDeleteModal.current) {
            confirmDeleteModal.current.close();
        }
        if (overlay.current) {
            overlay.current.classList.remove("active")
        }
        setValidationLoading(false)
    };

    const originalDate = form.date;
    const newDate = new Date(originalDate);

    const formatDate = `${newDate.toLocaleDateString('es-CO')} ${newDate.toLocaleTimeString('es-CO', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })}`;
    return (
        <>
            <section className="flex flex-col gap-10 mt-40 justify-around mx-2">
                <h2 className="titles text-4xl font-semibold text-center">Eliminar reserva</h2>
                <div className="flex gap-2 flex-col">
                    <form onSubmit={validateAndFetchReservation} method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">
                        <input
                            value={cedula}
                            onChange={(e) => setCedula(e.target.value)}
                            maxLength={15}
                            type="text" className="cursor-pointer border-gray-800 border bg-gray-50/40 flex px-4 
                            py-2 rounded-2xl w-full" placeholder="Cédula" required />
                        <label className="w-full relative">
                            <CircleQuestionMark
                                onClick={handleMessage}
                                className="absolute right-0 mt-2 mr-4 cursor-pointer" />
                            <input
                                value={clavePrivada}
                                onChange={(e) => setClavePrivada(e.target.value)}
                                maxLength={30}
                                type="text" className="w-full cursor-pointer border border-gray-800 bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Clave privada" required title="La clave privada fue enviada al correo" />
                            <p
                                style={{ display: message ? 'block' : 'none' }}
                                id="message" className="w-fit px-4 py-2 font-semibold absolute top-0 right-0 mr-8 text-gray-600">La clave privada fue enviada al correo</p>
                        </label>
                        {error &&
                            <p className="text-red-500 font-semibold text-md text-center w-full">La cédula o la clave es erronea</p>
                        }
                        <div className="flex px-6 mt-4 flex-wrap gap-2 w-full justify-center">
                            <button
                                type="submit"
                                disabled={validationLoading}
                                className="border-6 border-double bg-amber-500 px-8 py-2 rounded-xl hover:bg-amber-500 cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold disabled:opacity-50">
                                {validationLoading ? 'Validando...' : 'Eliminar reserva'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <dialog
                className="overflow-x-hidden px-10 py-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg justify-center"
                ref={deleteModal}
                id="ModalDelete">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#FDF6E7,transparent)]"></div></div>
                <div className="text-center gap-2 flex-col flex mb-16">
                    <div className="flex w-full justify-center">
                        <div className="rounded-full bg-orange-200 size-fit p-4">
                            <img src="/iconCalendar.png" className="size-14" />
                        </div>
                    </div>
                    <p className="text-3xl font-semibold mb-2">Reserva encontrada</p>
                    <p className="text-xl">Estimado/a <strong>{form.name}</strong>, hemos encontrado una reserva para el día y hora: <strong>{formatDate}</strong></p>
                    <p className="text-xl">¿Desea eliminarla?</p>
                </div>
                <div className="container-btns-delete flex justify-center w-full mt-5 px-20 flex-nowrap gap-4">
                    <button
                        onClick={openConfirmModal}
                        className="w-[140px] border-2 border-black bg-gray-300 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-gray-400 duration-200 ease-in-out hover:scale-105 font-semibold text-xl"
                    >Eliminar</button>
                    <form method="dialog">
                        <button
                            className="w-[140px] border-2 border-black bg-amber-500 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-amber-600 duration-200 ease-in-out hover:scale-105 font-semibold text-xl text-nowrap"
                            onClick={closeModal}
                        >No, cerrar</button>
                    </form>
                </div>
            </dialog>

            <dialog
                ref={confirmDeleteModal}
                className="overflow-x-hidden px-10 py-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg"
                id="confirmDelete">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#FDF6E7,transparent)]"></div></div>
                <div className="text-center gap-2 flex-col flex mb-16">
                    <div className="flex w-full justify-center">
                        <div className="rounded-full bg-orange-200 size-fit p-4">
                            <img src="/iconCalendar.png" className="size-14" />
                        </div>
                    </div>
                    <p className="text-3xl font-semibold mb-2">Reserva encontrada</p>
                    <p className="text-2xl">Estimado/a <strong>{form.name}</strong>, ¿Está seguro que <span className="text-red-600 font-semibold">desea eliminar la reserva</span> para el día y hora: <strong>{formatDate}</strong>?</p>
                    <p className="text-2xl">¿Desea eliminarla?</p>
                </div>
                <div className="container-btns-delete flex justify-center w-full mt-5 px-20 flex-nowrap gap-4">
                    <button
                        disabled={confirmationLoading}
                        onClick={handleDeleteSubmit}
                        className="w-[140px] border-2 border-black bg-gray-300 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-red-700/80 duration-200 ease-in-out hover:scale-105 font-semibold text-xl text-nowrap"
                    >{confirmationLoading ? 'Eliminando...' : 'Sí, eliminar'}</button>
                    <form method="dialog">
                        <button
                            onClick={closeConfirmModal}
                            className="w-[140px] border-2 border-black bg-amber-500 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-amber-600 duration-200 ease-in-out hover:scale-105 font-semibold text-xl text-nowrap"
                        >No, cerrar</button>
                    </form>
                </div>
            </dialog>

            <div id="overlay" ref={overlay}></div>
        </>
    )
}

export default function ContainerReservation() {
    return (
            <div className="flex flex-col min-h-screen">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <HeaderReservation />
                <main className="flex-grow">
                </main>
                <Footer />
            </div>
    );
}

export { GetReservation, CreateReservation, UpdateReservation, DeleteReservation }