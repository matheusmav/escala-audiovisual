const teams = [
    { id: 1, name: "Equipe 1", members: ["Samuel", "Emmanuel", "Luís Filipe"] },
    { id: 2, name: "Equipe 2", members: ["Matheus Amaral", "Rai", "Esdras"] },
    { id: 3, name: "Equipe 3", members: ["Gerferson", "Thallys", "Gabriel"] },
    { id: 4, name: "Equipe 4", members: ["Matheus Pinto", "Robertinho", "Lucas Daniel"] }
  ];
  
  const sundaySchedule = [
    { date: "2025-01-05", team: "Equipe 1" },
    { date: "2025-01-12", team: "Equipe 2" },
    { date: "2025-01-19", team: "Equipe 3" },
    { date: "2025-01-26", team: "Equipe 4" },
    { date: "2025-02-02", team: "Equipe 1" },
    { date: "2025-02-09", team: "Equipe 2" },
    { date: "2025-02-16", team: "Equipe 3" },
    { date: "2025-02-23", team: "Equipe 4" },
    { date: "2025-03-02", team: "Equipe 1" },
    { date: "2025-03-09", team: "Equipe 2" },
    { date: "2025-03-16", team: "Equipe 3" },
    { date: "2025-03-23", team: "Equipe 4" },
    { date: "2025-03-30", team: "Equipe 1" },
    { date: "2025-04-06", team: "Equipe 2" },
    { date: "2025-04-13", team: "Equipe 3" },
    { date: "2025-04-20", team: "Equipe 4" },
    { date: "2025-04-27", team: "Equipe 1" },
    { date: "2025-05-04", team: "Equipe 2" },
    { date: "2025-05-11", team: "Equipe 3" },
    { date: "2025-05-18", team: "Equipe 4" },
    { date: "2025-05-25", team: "Equipe 1" },
    { date: "2025-06-01", team: "Equipe 2" },
    { date: "2025-06-08", team: "Equipe 3" },
    { date: "2025-06-15", team: "Equipe 4" },
    { date: "2025-06-22", team: "Equipe 1" },
    { date: "2025-06-29", team: "Equipe 2" },
    { date: "2025-07-06", team: "Equipe 3" },
    { date: "2025-07-13", team: "Equipe 4" },
    { date: "2025-07-20", team: "Equipe 1" },
    { date: "2025-07-27", team: "Equipe 2" },
    { date: "2025-08-03", team: "Equipe 3" },
    { date: "2025-08-10", team: "Equipe 4" },
    { date: "2025-08-17", team: "Equipe 1" },
    { date: "2025-08-24", team: "Equipe 2" },
    { date: "2025-08-31", team: "Equipe 3" },
    { date: "2025-09-07", team: "Equipe 4" },
    { date: "2025-09-14", team: "Equipe 1" },
    { date: "2025-09-21", team: "Equipe 2" },
    { date: "2025-09-28", team: "Equipe 3" },
    { date: "2025-10-05", team: "Equipe 4" },
    { date: "2025-10-12", team: "Equipe 1" },
    { date: "2025-10-19", team: "Equipe 2" },
    { date: "2025-10-26", team: "Equipe 3" },
    { date: "2025-11-02", team: "Equipe 4" },
    { date: "2025-11-09", team: "Equipe 1" },
    { date: "2025-11-16", team: "Equipe 2" },
    { date: "2025-11-23", team: "Equipe 3" },
    { date: "2025-11-30", team: "Equipe 4" },
    { date: "2025-12-07", team: "Equipe 1" },
    { date: "2025-12-14", team: "Equipe 2" },
    { date: "2025-12-21", team: "Equipe 3" },
    { date: "2025-12-28", team: "Equipe 4" }
  ];
  
  
  const wednesdaySchedule = [
    { date: "2025-01-01", person: "Emanuel" },
    { date: "2025-01-08", person: "Esdras" },
    { date: "2025-01-15", person: "Gabriel" },
    { date: "2025-01-22", person: "Gerferson" },
    { date: "2025-01-29", person: "Lucas D." },
    { date: "2025-02-05", person: "Luis F." },
    { date: "2025-02-12", person: "M. Amaral" },
    { date: "2025-02-19", person: "Rai" },
    { date: "2025-02-26", person: "Robertinho" },
    { date: "2025-03-05", person: "Samuel" },
    { date: "2025-03-12", person: "Thallys" },
    { date: "2025-03-19", person: "Emanuel" },
    { date: "2025-03-26", person: "Esdras" },
    { date: "2025-04-02", person: "Gabriel" },
    { date: "2025-04-09", person: "Gerferson" },
    { date: "2025-04-16", person: "Lucas D." },
    { date: "2025-04-23", person: "Luis F." },
    { date: "2025-04-30", person: "M. Amaral" },
    { date: "2025-05-07", person: "Rai" },
    { date: "2025-05-14", person: "Robertinho" },
    { date: "2025-05-21", person: "Samuel" },
    { date: "2025-05-28", person: "Thallys" },
    { date: "2025-06-04", person: "Emanuel" },
    { date: "2025-06-11", person: "Esdras" },
    { date: "2025-06-18", person: "Gabriel" },
    { date: "2025-06-25", person: "Gerferson" },
    { date: "2025-07-02", person: "Lucas D." },
    { date: "2025-07-09", person: "Luis F." },
    { date: "2025-07-16", person: "M. Amaral" },
    { date: "2025-07-23", person: "Rai" },
    { date: "2025-07-30", person: "Robertinho" },
    { date: "2025-08-06", person: "Samuel" },
    { date: "2025-08-13", person: "Thallys" },
    { date: "2025-08-20", person: "Emanuel" },
    { date: "2025-08-27", person: "Esdras" },
    { date: "2025-09-03", person: "Gabriel" },
    { date: "2025-09-10", person: "Gerferson" },
    { date: "2025-09-17", person: "Lucas D." },
    { date: "2025-09-24", person: "Luis F." },
    { date: "2025-10-01", person: "M. Amaral" },
    { date: "2025-10-08", person: "Rai" },
    { date: "2025-10-15", person: "Robertinho" },
    { date: "2025-10-22", person: "Samuel" },
    { date: "2025-10-29", person: "Thallys" },
    { date: "2025-11-05", person: "Emanuel" },
    { date: "2025-11-12", person: "Esdras" },
    { date: "2025-11-19", person: "Gabriel" },
    { date: "2025-11-26", person: "Gerferson" },
    { date: "2025-12-03", person: "Lucas D." },
    { date: "2025-12-10", person: "Luis F." },
    { date: "2025-12-17", person: "M. Amaral" }
  ];
  
  
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  }
  
  function getNextSchedule(schedule) {
    const today = new Date();
    return schedule.find(item => new Date(item.date) >= today);
  }
  
  function getTeamMembers(teamName) {
    const team = teams.find(t => t.name === teamName);
    return team ? team.members.join(", ") : "Equipe não encontrada";
  }
  
  function renderNextSchedule() {
    const app = document.getElementById("app");
    const today = new Date();
    const formattedToday = today.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  
    const nextSunday = getNextSchedule(sundaySchedule);
    const nextWednesday = getNextSchedule(wednesdaySchedule);
  
    const sundayTeamMembers = getTeamMembers(nextSunday.team);
  
    app.innerHTML = `
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Departamento Audiovisual</h1>
        <p class="text-lg mb-6"><strong>Data de Hoje:</strong> ${formattedToday}</p>
        <div class="mb-4">
          <h2 class="text-2xl font-semibold">Próxima Escala</h2>
          <p class="mt-4 text-lg">
            <strong>Próximo Domingo:</strong> ${formatDate(nextSunday.date)} - ${nextSunday.team}
            <br />
            <span class="text-sm text-gray-600">Integrantes: ${sundayTeamMembers}</span>
          </p>
          <p class="mt-4 text-lg">
            <strong>Próxima Quarta:</strong> ${formatDate(nextWednesday.date)} - ${nextWednesday.person}
          </p>
        </div>
      </div>
    `;
  }
  
  renderNextSchedule();