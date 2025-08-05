import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import "dayjs/locale/es";
import { esES } from '@mui/x-date-pickers/locales';
import { CalendarProps } from '../types/CalendarProps';

export default function Calendar ({value, onChange}: CalendarProps) {

    const fecha = new Date();
    const mes = fecha.getMonth();
    const año = fecha.getFullYear();

    const minDate = dayjs(new Date(año, mes, 1));
    const maxDate = dayjs(new Date(año, mes + 2, 0));
    const minTime = dayjs().hour(8).minute(0)
    const maxTime = dayjs().hour(22).minute(0)
    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="es"
            localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
            
        >

            <MobileDateTimePicker
                ampm={true}
                label="Selecciona una fecha 📆"
                value={value}
                onChange={onChange}
                minDate={minDate}
                maxDate={maxDate}
                minTime={minTime}
                maxTime={maxTime}
                minutesStep={0}
                className='bg-white hidden'
            />
        </LocalizationProvider>
    );
}
