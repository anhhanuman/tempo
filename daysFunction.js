function getDayOfWeek(date = new Date()) {
      return date.getDay();
}

const dayOfWeek = getDayOfWeek();
console.log(dayOfWeek); // 👉️ 3

// --------------------------------------------

function getDayOfWeekName(date = new Date()) {
      return date.toLocaleDateString('default', {
            weekday: 'long',
      });
}

export const dayOfWeekName = getDayOfWeekName();
console.log(dayOfWeekName); // 👉️ Wednesday



