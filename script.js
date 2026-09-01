/* ---------- Datos de las 9 carreras ---------- */
const carreras = {
  ADM: { nombre: "Administración de Empresas",
    objetivo: "Administra empresas productivas y de servicios, lidera equipos en finanzas y comercialización, y maneja contabilidad, presupuestos y tributación. Puede emprender su propio negocio o ejercer la docencia.",
    pregunta: "¿Te gustaría liderar equipos y tomar decisiones para que un negocio crezca?",
    horario: "Mañana: 08:00 - 12:00 | Tarde: 14:30 - 18:30 (turnos referenciales)" },
  CIV: { nombre: "Construcción Civil",
    objetivo: "Planifica, dirige y construye obras de infraestructura y edificaciones: instalaciones, sistemas de agua potable, alcantarillado e iluminación. Puede crear su propia empresa constructora.",
    pregunta: "¿Te imaginas diseñando y construyendo los espacios donde vive la gente?",
    horario: "Mañana: 08:00 - 12:00 | Tarde: 14:30 - 18:30 (turnos referenciales)" },
  CON: { nombre: "Contaduría General",
    objetivo: "Lleva el proceso contable completo de una empresa: registra y analiza estados financieros, y maneja el área tributaria y de remuneraciones. Puede hacer consultorías o dar clases.",
    pregunta: "¿Se te da bien trabajar con números y mantener el orden financiero?",
    horario: "Mañana: 08:00 - 12:00 | Tarde: 14:30 - 18:30 (turnos referenciales)" },
  GAS: { nombre: "Gastronomía",
    objetivo: "Desarrolla menús, controla la calidad de alimentos e higiene, y domina la cocina nacional e internacional, repostería y coctelería. Trabaja como chef en hoteles, restaurantes u hospitales.",
    pregunta: "¿Disfrutas cocinar y crear nuevas recetas?",
    horario: "Mañana: 08:00 - 12:00 | Tarde: 14:30 - 18:30 (turnos referenciales)" },
  INF: { nombre: "Informática Industrial",
    objetivo: "Desarrolla y opera sistemas automatizados y robotizados para dar soluciones en sectores industriales, agroindustriales y de comunicaciones. Puede emprender, investigar o dar clases.",
    pregunta: "¿Te llama la atención la automatización y la robótica aplicada a la industria?",
    horario: "Mañana: 08:00 - 12:00 | Tarde: 14:30 - 18:30 (turnos referenciales)" },
  MEC: { nombre: "Mecánica Automotriz",
    objetivo: "Diagnostica, repara y da mantenimiento a vehículos a gasolina y diésel, usando herramientas y normas de seguridad industrial. Puede tener su propio taller.",
    pregunta: "¿Te gusta entender cómo funcionan los motores y reparar cosas con tus manos?",
    horario: "Mañana: 08:00 - 12:00 | Tarde: 14:30 - 18:30 (turnos referenciales)" },
  SEC: { nombre: "Secretariado Ejecutivo",
    objetivo: "Maneja herramientas tecnológicas y de gestión documental, aplica protocolo y relaciones públicas, y planifica tareas empresariales. Trabaja en oficinas de empresas e instituciones.",
    pregunta: "¿Eres una persona organizada y con buena comunicación con los demás?",
    horario: "Mañana: 08:00 - 12:00 | Tarde: 14:30 - 18:30 (turnos referenciales)" },
  SIS: { nombre: "Sistemas Informáticos",
    objetivo: "Propone soluciones de bases de datos, redes de comunicación e inteligencia de negocios, integrando tecnologías de información. Es experto en hardware y software.",
    pregunta: "¿Te gusta programar, resolver problemas lógicos o trabajar con tecnología?",
    horario: "Mañana: 08:00 - 12:00 | Tarde: 14:30 - 18:30 (turnos referenciales)" },
  TOP: { nombre: "Topografía y Geodesia",
    objetivo: "Realiza levantamientos, mediciones y cubicaciones de terreno para proyectos mineros, agrícolas y de obras civiles, interpretando datos geográficos. Puede crear su propia empresa topográfica.",
    pregunta: "¿Te interesa trabajar al aire libre midiendo y mapeando terrenos?",
    horario: "Mañana: 08:00 - 12:00 | Tarde: 14:30 - 18:30 (turnos referenciales)" }
};

const orden = ["ADM","CIV","CON","GAS","INF","MEC","SEC","SIS","TOP"];

const banco = {
ADM:["Organizar y coordinar el trabajo de un equipo","Crear un plan para vender un producto o servicio","Tomar decisiones para que un negocio crezca","Elaborar un presupuesto para un proyecto","Negociar acuerdos con proveedores o clientes","Dirigir una reunión de trabajo y motivar al equipo","Crear un emprendimiento propio desde cero"],
CIV:["Diseñar los planos de una casa o edificio","Supervisar la construcción de una obra","Calcular los materiales necesarios para construir algo","Resolver problemas técnicos en una obra en construcción","Diseñar sistemas de agua potable o alcantarillado","Dibujar planos técnicos de una edificación","Verificar que una obra cumpla normas de seguridad"],
CON:["Llevar el control de los ingresos y gastos de una empresa","Elaborar los estados financieros de un negocio","Calcular impuestos que debe pagar una empresa","Revisar que las cuentas de una empresa estén correctas","Organizar la información contable de un negocio","Preparar declaraciones tributarias","Auditar las cuentas de una organización"],
GAS:["Preparar platos de comida creativos","Diseñar un menú para un restaurante","Aprender técnicas de cocina internacional","Decorar postres o platillos con detalle","Calcular el costo de los ingredientes de una receta","Crear nuevas recetas y combinaciones de sabores","Dirigir un equipo de cocineros"],
INF:["Programar sistemas para controlar máquinas","Diseñar soluciones tecnológicas para fábricas","Trabajar con robots o sistemas automatizados","Resolver fallas en sistemas industriales","Automatizar un proceso repetitivo de producción","Integrar software y hardware en un mismo sistema","Programar controladores lógicos (PLC)"],
MEC:["Reparar el motor de un vehículo","Diagnosticar por qué un auto no enciende","Dar mantenimiento preventivo a un vehículo","Trabajar con herramientas y piezas mecánicas","Detectar fallas en el sistema eléctrico de un auto","Aprender sobre motores a gasolina y diésel","Desarmar y volver a armar un motor"],
SEC:["Organizar la agenda y reuniones de una oficina","Redactar documentos formales para una empresa","Atender llamadas y coordinar comunicación interna","Organizar archivos y documentación importante","Aplicar buenos modales y protocolo en el trabajo","Usar herramientas de oficina como Word o Excel","Elaborar actas e informes de reuniones"],
SIS:["Programar una aplicación o página web","Diseñar una base de datos para una empresa","Resolver problemas lógicos con código","Configurar redes de computadoras","Detectar y corregir errores en un programa","Crear una app o videojuego","Diseñar la arquitectura de un sistema informático"],
TOP:["Medir y levantar planos de un terreno","Trabajar al aire libre con instrumentos de medición","Calcular el área y los límites de un terreno","Interpretar mapas y datos geográficos","Planificar la ubicación de una construcción en un terreno","Usar drones o equipos GPS para mediciones","Elaborar mapas cartográficos precisos"]
};

const RONDA1 = 5; // preguntas generales (cubren las 9 carreras)
const RONDA2 = 0; // sin ronda enfocada adicional
const TOTAL_PREGUNTAS = RONDA1 + RONDA2;

/* Títulos motivadores según el progreso */
function tituloParaPregunta(indice, total){
  const progreso = (indice) / total;
  if(indice === total - 1) return "🏁 ¡ÚLTIMA PREGUNTA! ELIGE Y DESCUBRE TU RESULTADO";
  if(progreso < 0.2) return "SELECCIONA LAS ACTIVIDADES QUE TE GUSTARÍA HACER";
  if(progreso < 0.45) return "¡VAS MUY BIEN! ELIGE LO QUE MÁS TE LLAME LA ATENCIÓN";
  if(progreso < 0.7) return "SIGUE ASÍ, ELIGE TUS ACTIVIDADES FAVORITAS";
  return "¡YA CASI TERMINAS! UN POCO MÁS Y VERÁS TU RESULTADO";
}

let indiceActual = 0;
let puntajes = {};
let top3 = [];
let preguntasRonda2 = [];
let resultadoFinal = [];
let seleccionActual = new Set();
let nombreUsuario = "";
let celularUsuario = "";

/* ---------- Elementos ---------- */
const opcionesWrap = document.getElementById('opcionesWrap');
const progresoRelleno = document.getElementById('progresoRelleno');
const progresoTexto = document.getElementById('progresoTexto');
const preguntaTitulo = document.getElementById('preguntaTitulo');
const preguntaImagen = document.getElementById('preguntaImagen');
const siguienteBtn = document.getElementById('siguienteBtn');
const resultadosWrap = document.getElementById('resultadosWrap');
const reiniciarBtn = document.getElementById('reiniciarBtn');
const inputNombre = document.getElementById('inputNombre');
const inputCelular = document.getElementById('inputCelular');
const empezarBtn = document.getElementById('empezarBtn');
const errorRegistro = document.getElementById('errorRegistro');

function mostrarPantalla(id){
  document.querySelectorAll('.pantalla').forEach(p=>p.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
  window.scrollTo(0,0);
}

/* ---------- Control del botón "atrás" del navegador ---------- */
/* Cada vez que el usuario presiona "atrás", lo regresamos a la pantalla principal
   en vez de dejar el sitio (por ejemplo, volver a la carpeta de GitHub). */
history.pushState({app:true}, '', location.href);
window.addEventListener('popstate', function(){
  mostrarPantalla('pantallaRegistro');
  history.pushState({app:true}, '', location.href);
});

/* ---------- Registro (primera pantalla) ---------- */
empezarBtn.onclick = ()=>{
  const nombre = inputNombre.value.trim();
  const celular = inputCelular.value.trim();

  if(!nombre || !celular){
    errorRegistro.textContent = "Por favor completa tu nombre y número de celular.";
    return;
  }
  if(celular.length < 7){
    errorRegistro.textContent = "Ingresa un número de celular válido.";
    return;
  }
  errorRegistro.textContent = "";
  nombreUsuario = nombre;
  celularUsuario = celular;
  iniciarTest();
};

function iniciarTest(){
  indiceActual = 0;
  puntajes = {};
  orden.forEach(k => puntajes[k] = 0);
  top3 = [];
  preguntasRonda2 = [];
  mostrarPantalla('pantallaTest');
  cargarPregunta();
}

function cargarPregunta(){
  seleccionActual = new Set();
  siguienteBtn.disabled = true;

  progresoTexto.textContent = "Pregunta " + (indiceActual+1) + " / " + TOTAL_PREGUNTAS;
  progresoRelleno.style.width = (indiceActual/TOTAL_PREGUNTAS*100) + "%";
  preguntaTitulo.textContent = tituloParaPregunta(indiceActual, TOTAL_PREGUNTAS);

  // Imagen decorativa de la pregunta (img/pregunta1.jpg, img/pregunta2.jpg, ...)
  preguntaImagen.style.display = 'block';
  preguntaImagen.src = 'img/pregunta' + (indiceActual+1) + '.png';
  preguntaImagen.onerror = function(){ preguntaImagen.style.display = 'none'; };

  let opciones;
  if(indiceActual < RONDA1){
    opciones = orden.map(key => ({ key, texto: banco[key][indiceActual] }));
  } else {
    const idxRonda2 = indiceActual - RONDA1;
    opciones = preguntasRonda2[idxRonda2];
  }

  opcionesWrap.innerHTML = '';
  opciones.forEach((op)=>{
    const btn = document.createElement('button');
    btn.className = 'opcion-btn';
    btn.innerHTML = '<span class="bullet"></span><span>'+op.texto+'</span>';
    btn.onclick = ()=> toggleOpcion(op.key, btn);
    opcionesWrap.appendChild(btn);
  });
}

function toggleOpcion(key, btn){
  if(seleccionActual.has(key)){
    seleccionActual.delete(key);
    btn.classList.remove('seleccionado');
  } else {
    seleccionActual.add(key);
    btn.classList.add('seleccionado');
  }
  siguienteBtn.disabled = seleccionActual.size === 0;
}

siguienteBtn.onclick = ()=>{
  seleccionActual.forEach(key => puntajes[key]++);
  indiceActual++;

  if(indiceActual === RONDA1){
    top3 = [...orden].sort((a,b)=> puntajes[b]-puntajes[a]).slice(0,3);
    for(let i=0; i<RONDA2; i++){
      const idxFrase = RONDA1 + i;
      preguntasRonda2.push(top3.map(key => ({ key, texto: (banco[key][idxFrase] || banco[key][banco[key].length-1]) })));
    }
  }

  if(indiceActual >= TOTAL_PREGUNTAS){
    calcularResultado();
    guardarRegistroYMostrar();
  } else {
    cargarPregunta();
  }
};

function calcularResultado(){
  const ranking = [...orden].sort((a,b)=> puntajes[b]-puntajes[a]);
  resultadoFinal = ranking.slice(0,2);
}

/* ---------- Guardar en Firebase y mostrar resultados ---------- */
function guardarRegistroYMostrar(){
  const registro = {
    nombre: nombreUsuario,
    celular: celularUsuario,
    carrera1: carreras[resultadoFinal[0]].nombre,
    carrera2: carreras[resultadoFinal[1]].nombre,
    fecha: new Date().toLocaleString('es-BO')
  };

  try{
    firebase.database().ref('registros').push(registro)
      .then(()=> mostrarResultados())
      .catch((err)=>{ console.error(err); mostrarResultados(); });
  }catch(e){
    console.error(e);
    mostrarResultados();
  }
}

function mostrarResultados(){
  resultadosWrap.innerHTML = '';
  resultadoFinal.forEach((key, i)=>{
    const c = carreras[key];
    const div = document.createElement('div');
    div.className = 'resultado-card';
    div.innerHTML = `
      <span class="puesto">${i===0 ? 'PRIMERA OPCIÓN' : 'SEGUNDA OPCIÓN'}</span>
      <h3>${c.nombre}</h3>
      <div class="resultado-botones">
        <button class="btn-info" data-key="${key}">Más información</button>
        <button class="btn-horario" data-key="${key}">Ver horarios</button>
      </div>
    `;
    resultadosWrap.appendChild(div);
  });

  document.querySelectorAll('.btn-info').forEach(b=>{
    b.onclick = ()=> abrirModalInfo(b.dataset.key);
  });
  document.querySelectorAll('.btn-horario').forEach(b=>{
    b.onclick = ()=> abrirModalHorario(b.dataset.key);
  });

  mostrarPantalla('pantallaResultado');
}

/* ---------- Modales ---------- */
const modalInfo = document.getElementById('modalInfo');
const modalHorario = document.getElementById('modalHorario');

function abrirModalInfo(key){
  const c = carreras[key];
  document.getElementById('modalInfoNombre').textContent = c.nombre;
  document.getElementById('modalInfoTexto').textContent = c.objetivo;
  document.getElementById('modalInfoPregunta').textContent = c.pregunta;
  modalInfo.classList.remove('hidden');
}
function abrirModalHorario(key){
  const c = carreras[key];
  document.getElementById('modalHorarioNombre').textContent = c.nombre;
  document.getElementById('modalHorarioTexto').textContent = c.horario;
  modalHorario.classList.remove('hidden');
}
document.querySelectorAll('.cerrar-modal').forEach(b=>{
  b.onclick = ()=>{
    modalInfo.classList.add('hidden');
    modalHorario.classList.add('hidden');
  };
});

reiniciarBtn.onclick = ()=>{
  inputNombre.value = "";
  inputCelular.value = "";
  mostrarPantalla('pantallaRegistro');
};
