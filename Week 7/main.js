class Movie {
  constructor(title, director) {
      this.title = title;
      this.director = director;
      this.star = [];
      this.writer = [];
  }

  getTitle() {
    return this.title;
  }
  getDirector() {
    return this.director;
  }
  addWriter(writer) {
    this.writer.push(writer);
  }
  getWriters() {
    return this.writer;
  }
  addStar(star) {
    this.star.push(star);
  }
  getStars() {
    return this.star;
  }
  renderMovie() {
    let title = document.createElement('h1');
    document.body.appendChild(title);
    title.innerHTML = this.title;

    let director = document.createElement('h3');
    document.body.appendChild(director);
    director.innerHTML = `Director: ${this.getDirector()}`;

    let writers = document.createElement('h3');
    document.body.appendChild(writers);
    writers.innerHTML = `Writers: ${this.getWriters()}`;

    let stars = document.createElement('h2');
    document.body.appendChild(stars);
    stars.innerHTML = `${this.getStars().map(actor => actor.renderStuff())}`;
  }
}
 
class StaffMember {
  constructor(name, role, dateOfBirth) {
    this.name = name;
    this.role = role;
    this.dateOfBirth = dateOfBirth;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return this.role;
  }
  getAge() {
    let currentYear = 2018;
    return currentYear - this.dateOfBirth;
  }
  renderStuff() {
    let staffName = document.createElement('h1');
    document.body.appendChild(staffName);
    staffName.innerHTML = `Actor: ${this.name}`;

    let staffRole = document.createElement('h2');
    document.body.appendChild(staffRole);
    staffRole.innerHTML = `Role: ${this.role}`;

    let staffYear = document.createElement('h3');
    document.body.appendChild(staffYear);
    staffYear.innerHTML = `${this.getAge()} years old`;
  }
}

const RamboII = new Movie('John Rambo: RamboII', 'John');

const RichardCrenna = new StaffMember('Richard Crenna', 1926);
const JuliaNickson = new StaffMember('Julia Nickson', 1958);
const MartinKove = new StaffMember('Martin Kove', 1946);

RamboII.addWriter('David Morrell');
RamboII.addWriter('Kevin Jarre');

RamboII.addStar(RichardCrenna);
RamboII.addStar(JuliaNickson);
RamboII.addStar(MartinKove);

RamboII.renderMovie();