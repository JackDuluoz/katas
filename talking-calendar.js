function talkingCalendar(date) {
  let year = ""
  let month = ""
  let day = ""
  for (let i = 0; i < date.length; i++) {
    if (i === 0 || i === 1 || i === 2 || i === 3) {
      year = year + date[i]
    } else if (i === 5 || i === 6) {
      month = month + date[i]
    } else if (i === 8 || i === 9) {
      day = day + date[i]
    }
  }
  if (month === "01") {
    month = "January"
  } else if (month === "02") {
    month = "February"
  } else if (month === "03") {
    month = "March"
  } else if (month === "04") {
    month = "April"
  } else if (month === "05") {
    month = "May"
  } else if (month === "06") {
    month = "June"
  } else if (month === "07") {
    month = "July"
  } else if (month === "08") {
    month = "August"
  } else if (month === "09") {
    month = "September"
  } else if (month === "10") {
    month = "October"
  } else if (month === "11") {
    month = "November"
  } else if (month === "12") {
    month = "December"
  }
  if (day === "01") {
    day = "1st" 
  } else if (day === "02") {
    day = "2nd"
  } else if (day === "03") {
    day = "3rd"
  } else if (day === "04" || day === "05" || day === "06" || day === "07" || day === "08" || day === "09") {
    day = day[1] + "th"
  } else if (day === "21" || day === "31") {
    day = day + "st"
  } else if (day === "22") {
    day = "22nd"
  } else if (day === "23") {
    day = "23rd"
  } else if (day === "10" || day === "11" || day === "12" || day === "13" || day === "14" || day === "15" || day === "16" || day === "17" || day === "18" || day === "19" || day === "20" || day === "24" || day === "25" || day === "26" || day === "27" || day === "28" || day === "29" || day === "30") {
    day = day + "th"
  }
  return month + " " + day + ", " + year
}
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));