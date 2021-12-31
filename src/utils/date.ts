type FormatDate = Date | string | number
type Config = {
  [key: string]: string | number
}

// 格式化时间
export function formatDate (date: FormatDate, format?:string): string {
  if (!date) {
    return ''
  }
  if (typeof date === 'number') {
    date = new Date(date)
  }
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/'))
  }
  const padNum = function (num: number | string): string {
    num += ''
    return (<string>num).replace(/^(\d)$/, '0$1')
  }
  // 指定格式字符
  const cfg: Config = {
    yyyy: date.getFullYear(), // 年 : 4位
    yy: date
      .getFullYear()
      .toString()
      .substring(2), // 年 : 2位
    M: date.getMonth() + 1, // 月 : 如果1位的时候不补0
    MM: padNum(date.getMonth() + 1), // 月 : 如果1位的时候补0
    d: date.getDate(), // 日 : 如果1位的时候不补0
    dd: padNum(date.getDate()), // 日 : 如果1位的时候补0
    h: date.getHours(), // 时
    hh: padNum(date.getHours()), // 时
    mm: padNum(date.getMinutes()), // 分
    ss: padNum(date.getSeconds()) // 秒
  }
  format || (format = 'yyyy-MM-dd hh:mm:ss')
  return format.replace(/([a-z])(\1)*/gi, function (m) {
    return cfg[m].toString()
  })
}
