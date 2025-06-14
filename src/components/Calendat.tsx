import { useEffect, useId, useRef, useState } from "react";

import { format, isValid, parse } from "date-fns";
import { DayPicker, DateBefore } from "react-day-picker";
import { es } from "react-day-picker/locale"

export default function Dialog() {
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
    } else {
      handleBodyScroll(false);
      dialogRef.current.close();
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
      <label htmlFor="date-input">
        <strong>Selecciona una fecha: </strong>
      </label>
      <input
        
        style={{ fontSize: "inherit" }}
        id="date-input"
        type="text"
        maxLength={10}
        value={inputValue}
        placeholder="ejemplo: 06/23/2025"
        onChange={handleInputChange}
      />{" "}
      <button 
        style={{ fontSize: "inherit" }}
        onClick={toggleDialog}
        aria-controls="dialog"
        aria-haspopup="dialog"
        aria-expanded={isDialogOpen}
        aria-label="Abre el calendario para esccoger una fecha"
      >
        📆
      </button>

      <dialog
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