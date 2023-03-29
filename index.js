/* Your Code Here */

function createEmployeeRecord(array) {
  const employee = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employee;
}

function createEmployeeRecords(array) {
  const employees = array.map((event) => createEmployeeRecord(event));
  return employees;
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  let timeInEntries = {
    type: "TimeIn",
    hour: parseInt(hour),
    date: date,
  };
  this.timeInEvents.push(timeInEntries);
  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  const timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(hour),
    date: date,
  };
  this.timeOutEvents.push(timeOutEvent);
  return this;
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find((day) => day.date === date);
  const timeOut = this.timeOutEvents.find((day) => day.date === date);

  const timeInHr = timeIn.hour;
  const timeOutHr = timeOut.hour;

  const hoursWorked = (timeOutHr - timeInHr) / 100;
  return hoursWorked;
}

function wagesEarnedOnDate(date) {
  const hours = hoursWorkedOnDate.call(this, date);
  const payOwed = hours * this.payPerHour;
  return payOwed;
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((array) => array.firstName === firstName);
}
/* function calculatePayroll(employees) {
  return employees.reduce((payRoll, employee) => {
    payRoll + allWagesFor.call(employee);
  }, 0);
} */

function calculatePayroll(employeeRecords) {
    let totalPay = 0;
    employeeRecords.forEach((record) => {
      totalPay += allWagesFor.call(record);
    });
    return totalPay;
  }
  


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
