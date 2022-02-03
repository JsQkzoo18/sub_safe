const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const day = [
  "Domingo",
  "Lunes",
  "martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

/**
 * It parses a date string into a human readable format.
 * @returns The date is being parsed into a string that is readable by humans.
 */
export const dateParser = (date) => {
  if (!date) return null;

  const tempDate = new Date(date);

  const parserDate = `${
    months[tempDate.getMonth()]
  } ${tempDate.getDate()} - ${tempDate.getUTCFullYear()}`;

  const time = new Intl.DateTimeFormat("default", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  }).format(tempDate);

  return { parserDate, time };
};
