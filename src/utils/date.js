import dayjs from 'dayjs'
import rTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
dayjs.extend(rTime)
export const relativeTime = dateTime => {
  return dayjs().from(dayjs(dateTime))
}
