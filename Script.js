const workerForm = document.getElementById('workerForm');
const workersList = document.getElementById('workersList');
const summary = document.getElementById('summary');
const departments = {
  IT: 0,
  Marketing: 0,
  Ventas: 0,
  Administración: 0
};

workerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correo = document.getElementById('correo').value;
  const departamento = document.getElementById('departamento').value;

  const worker = { nombre, apellido, correo, departamento };
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item');
  listItem.textContent = `${nombre} ${apellido} - ${departamento}`;

  workersList.appendChild(listItem);

  departments[departamento]++;
  updateSummary();

  Swal.fire({
    title: 'Éxito',
    text: 'Nuevo trabajador agregado correctamente',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  });

  workerForm.reset();
});

function updateSummary() {
  let summaryText = '';
  for (const dept in departments) {
    summaryText += `Departamento ${dept}: ${departments[dept]} personas `;
  }
  summary.textContent = summaryText.trim();
}

Swal.fire({
  title: "¿Estás seguro?",
  text: "No podrás revertir esto.",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Sí, eliminarlo"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "¡Eliminado!",
      text: "Tu archivo ha sido eliminado.",
      icon: "success"
    });
  }
});







