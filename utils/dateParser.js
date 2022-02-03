// Creamos array con los meses del año
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
// Creamos array con los días de la semana
const day = [
  "Domingo",
  "Lunes",
  "martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export const dateParser = (date) => {
  // Creamos el objeto fecha instanciándolo con la clase Date

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
