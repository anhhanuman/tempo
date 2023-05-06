import { formatDate } from './datewithouttime.js'
import { dayOfWeekName } from './daysFunction.js'

const body = {
      "attributes": [
            {
                  "key": "_TempoAccount_",
                  "value": "103080-HGS"
            }
      ],
      "authorAccountId": "621f3c81c4d0fe0069529e8b",
      "billableSeconds": 28800,
      "description": "WL app testing, design/update test cases, ticket verification, log defects, sync team",
      "issueId": "98984",
      "startDate": "",
      "startTime": "09:00:00",
      "timeSpentSeconds": 28800
}

const specialDay = {
      showCase: 'Wednesday',
      personalDevelopment: 'Friday'
}
//need google calendar api
body.startDate = formatDate(new Date())

if (dayOfWeekName === specialDay.personalDevelopment) {
      body.billableSeconds
}