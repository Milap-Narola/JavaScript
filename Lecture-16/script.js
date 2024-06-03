class Employee {
    constructor(name, age, position, baseSalary) {
      this.name = name;
      this.age = age;
      this.position = position;
      this.baseSalary = baseSalary;
    }
  
    getSalary() {
      return this.baseSalary;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Position: ${this.position}, Salary: ${this.getSalary()}`);
    }
  }
  
  class HREmployee extends Employee {
    constructor(name, age, position, baseSalary) {
      super(name, age, position, baseSalary);
    }
  
    hireEmployee(employeeList, employee) {
      employeeList.push(employee);
      console.log(`${employee.name} has been hired.`);
    }
  
    fireEmployee(employeeList, employeeName) {
      const index = employeeList.findIndex(emp => emp.name === employeeName);
      if (index !== -1) {
        employeeList.splice(index, 1);
        console.log(`${employeeName} has been fired.`);
      } else {
        console.log(`${employeeName} not found.`);
      }
    }
  
    calculateSalary(employee) {
      return employee.getSalary();
    }
  }
  
  let employees = [];
  
  const hr = new HREmployee('krupa', 30, 'HR Manager', 50000);
  

  const emp1 = new Employee('Riya', 28, 'Developer', 70000);
  const emp2 = new Employee('jay', 35, 'Designer', 65000);
  const emp3 = new Employee('suman', 25, 'Ui\Ux', 45000);
  const emp4 = new Employee('divya', 29, 'Android Developer', 55000);
  const emp5 = new Employee('jignesh', 30, 'Data science', 40000);
  

  hr.hireEmployee(employees, emp1);
  hr.hireEmployee(employees, emp2);
  hr.hireEmployee(employees, emp3);
  hr.hireEmployee(employees, emp4);
  hr.hireEmployee(employees, emp5);
  

  employees.map(emp => emp.displayInfo());
  

  console.log(`Salary of ${emp1.name}: ${hr.calculateSalary(emp1)}`);
  

  hr.fireEmployee(employees, 'suman');
  

  employees.map(emp => emp.displayInfo());
  