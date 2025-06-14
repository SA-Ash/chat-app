function formatTimestamp(timestamp, showTime = false) {
    const defaultTimeStamp = {seconds:0, nanoseconds:0}

    const {seconds, nanoseconds} = timestamp || defaultTimeStamp

  const date = new Date(seconds * 1000 + Math.floor(nanoseconds/1e6));

  const dateOptions = {day: "numeric", month: "short", year: "numeric"}
  const timeOptions = {hours: "2-digit", minutes: "2-digit"}

  const formatDate = date.toLocaleDateString("en-US",dateOptions)
  const formatTime = date.toLocaleTimeString("en-US", timeOptions)

  const day = date.getDate();

  const suffix = day >= 11 && day <= 13 ? "th" : day % 10 === 1? "st" : day%10 === 2 ? "nd" : day % 10 === 3? "rd" : "th";

  const finalDate = formatDate.replace(/(\d+)/, `$1${suffix}`)

  return showTime ? `${finalDate} . ${formatTime}` : finalDate
}

export default formatTimestamp