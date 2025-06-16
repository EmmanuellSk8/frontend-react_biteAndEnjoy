import { Children, useEffect, useId, useRef, useState } from "react";

import { format, isValid, parse } from "date-fns";
import { DayPicker, DateBefore } from "react-day-picker";
import { es } from "react-day-picker/locale"
import "../index.css"

interface CalendarProps{

  className: string;
}


export default function Calendar({className}: CalendarProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();
  const headerId = useId();

  const [month, setMonth] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const [inputValue, setInputValue] = useState("");

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  useEffect(() => {
    const handleBodyScroll = (isOpen: boolean) => {
      document.body.style.overflow = isOpen ? "hidden" : "";
    };
    if (!dialogRef.current) return;
    if (isDialogOpen) {
      handleBodyScroll(true);
      dialogRef.current.showModal();
      // dialogRef.current.style.display = "flex"
    } else {
      handleBodyScroll(false);
      dialogRef.current.close();
      // dialogRef.current.style.display = "none"
    }
    return () => {
      handleBodyScroll(false);
    };
  }, [isDialogOpen]);

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setInputValue(format(date, "MM/dd/yyyy"));
    }
    dialogRef.current?.close();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    const parsedDate = parse(e.target.value, "MM/dd/yyyy", new Date());

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };
  const fecha = new Date();

  const dia = fecha.getDate();
  const mes = fecha.getMonth();
  const año = fecha.getFullYear();
  const matcher: DateBefore = { before: new Date(año, mes, dia) };

  return (
    <div> 
      <div id="containerCalendar" className={className}>
      <input
        className="border-1 rounded-lg py-1.5 px-2 w-[95%]"
        style={{ fontSize: "inherit" }}
        id="date-input"
        type="text"
        maxLength={10}
        value={inputValue}
        placeholder="Ejemplo: 06/23/2025"
        onChange={handleInputChange}
        disabled
        required
      />{" "}
            
        <button
        id="ButtonCalendar"
        className="bg-gray-300/90 p-0.5 rounded-lg text-nowrap px-2 py-1.5 font-semibold cursor-pointer border-1 flex justify-between gap-2"
        style={{ fontSize: "inherit" }}
        onClick={toggleDialog}
        aria-controls="dialog"
        aria-haspopup="dialog"
        aria-expanded={isDialogOpen}
        aria-label="Abre el calendario para esccoger una fecha"
        >
        <span>Seleccionar día de reserva</span> 📆
      </button>
      </div>

      <dialog
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2d"
        closedby="any"
        role="dialog"
        ref={dialogRef}
        id={dialogId}
        aria-modal
        aria-labelledby={headerId}
        onClose={() => setIsDialogOpen(false)}
      >
          <DayPicker
            locale={es}
            month={month}
            startMonth={new Date}
            endMonth={new Date(año, mes + 1)}
            onMonthChange={setMonth}
            navLayout="around"
            autoFocus
            disabled={matcher}
            mode="single"
            selected={selectedDate}
            onSelect={handleDayPickerSelect}

          />
      </dialog>
    </div>
  );
}