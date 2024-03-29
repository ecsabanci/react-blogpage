import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'


export function convertDate(date) {
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy', { locale: enUS })

  return formattedDate
}