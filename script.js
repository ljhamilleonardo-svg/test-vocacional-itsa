/* =========================================================
   TEST VOCACIONAL - INSTITUTO TECNOLÓGICO SACABA
   Versión adaptativa para celular/QR.
   ========================================================= */

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

/* Banco ampliado: las primeras 5 preguntas son diferentes entre sí.
   Después de la primera pregunta, solo se muestran las carreras que
   el estudiante fue seleccionando. */
const banco = {
  ADM:[
    "Organizar y coordinar el trabajo de un equipo",
    "Crear un plan para vender un producto o servicio",
    "Tomar decisiones para que un negocio crezca",
    "Negociar con clientes, proveedores o socios",
    "Crear un emprendimiento propio desde cero",
    "Administrar el presupuesto de un proyecto",
    "Motivar a un equipo para alcanzar una meta"
  ],
  CIV:[
    "Diseñar los planos de una casa o edificio",
    "Supervisar la construcción de una obra",
    "Calcular los materiales necesarios para construir algo",
    "Resolver un problema técnico en una obra",
    "Planificar una construcción aprovechando bien el terreno",
    "Interpretar planos y especificaciones técnicas",
    "Verificar que una obra cumpla normas de seguridad"
  ],
  CON:[
    "Llevar el control de los ingresos y gastos de una empresa",
    "Elaborar los estados financieros de un negocio",
    "Calcular impuestos y obligaciones de una empresa",
    "Revisar que las cuentas estén correctas",
    "Analizar números para saber si un negocio está funcionando bien",
    "Preparar información para una declaración tributaria",
    "Detectar diferencias o errores en registros contables"
  ],
  GAS:[
    "Preparar platos de comida creativos",
    "Diseñar un menú para un restaurante",
    "Aprender técnicas de cocina internacional",
    "Crear y decorar postres con detalle",
    "Inventar una receta usando ingredientes disponibles",
    "Organizar una cocina para trabajar de forma eficiente",
    "Presentar un plato de manera atractiva"
  ],
  INF:[
    "Programar sistemas para controlar máquinas",
    "Diseñar soluciones tecnológicas para una fábrica",
    "Trabajar con robots o sistemas automatizados",
    "Resolver fallas en un proceso industrial automatizado",
    "Automatizar una tarea repetitiva de producción",
    "Integrar sensores, software y equipos electrónicos",
    "Programar un controlador para una máquina"
  ],
  MEC:[
    "Reparar el motor de un vehículo",
    "Diagnosticar por qué un auto no enciende",
    "Dar mantenimiento preventivo a un vehículo",
    "Trabajar con herramientas y piezas mecánicas",
    "Detectar una falla en el sistema eléctrico de un auto",
    "Aprender cómo funcionan los motores a gasolina y diésel",
    "Desarmar y volver a armar un motor"
  ],
  SEC:[
    "Organizar una agenda y coordinar reuniones",
    "Redactar documentos formales para una empresa",
    "Atender llamadas y coordinar la comunicación",
    "Organizar archivos y documentación importante",
    "Preparar una reunión y dejar todo listo",
    "Usar herramientas de oficina como Word o Excel",
    "Elaborar actas, informes y comunicaciones"
  ],
  SIS:[
    "Programar una aplicación o página web",
    "Diseñar una base de datos para una empresa",
    "Resolver problemas lógicos usando código",
    "Configurar una red de computadoras",
    "Detectar y corregir errores en un programa",
    "Crear una aplicación para solucionar una necesidad",
    "Diseñar la estructura de un sistema informático"
  ],
  TOP:[
    "Medir y levantar planos de un terreno",
    "Trabajar al aire libre con instrumentos de medición",
    "Calcular el área y los límites de un terreno",
    "Interpretar mapas y datos geográficos",
    "Planificar la ubicación de una construcción en un terreno",
    "Usar GPS, estación total o drones para medir",
    "Elaborar mapas precisos de una zona"
  ]
};

const TOTAL_PREGUNTAS = 5;
const MAX_SELECCIONES_INICIALES = 3;
const MAX_SELECCIONES_FOCAL = 2;

let indiceActual = 0;
let puntajes = {};
let candidatosIniciales = [];
let candidatosActuales = [];
let seleccionActual = new Set();
let resultadoFinal = [];
let nombreUsuario = "";
let celularUsuario = "";

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
const pantallaBienvenida = document.getElementById('pantallaBienvenida');
const entrarBtn = document.getElementById('entrarBtn');

function mostrarPantalla(id){
  document.querySelectorAll('.pantalla').forEach(p=>p.classList.remove('activa'));
  const pantalla = document.getElementById(id);
  if(pantalla) pantalla.classList.add('activa');
  window.scrollTo(0,0);
}

/* Sonidos suaves generados por el navegador: no hace falta descargar MP3. */
let audioCtx = null;
function sonido(tipo='seleccion'){
  try{
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if(!AudioContext) return;
    if(!audioCtx) audioCtx = new AudioContext();
    if(audioCtx.state === 'suspended') audioCtx.resume();

    const ahora = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);

    if(tipo === 'inicio'){
      osc.type='sine'; osc.frequency.setValueAtTime(523, ahora); osc.frequency.exponentialRampToValueAtTime(784, ahora+.22);
      gain.gain.setValueAtTime(.0001, ahora); gain.gain.exponentialRampToValueAtTime(.055, ahora+.025); gain.gain.exponentialRampToValueAtTime(.0001, ahora+.30);
      osc.start(ahora); osc.stop(ahora+.31);
    } else if(tipo === 'final'){
      osc.type='sine'; osc.frequency.setValueAtTime(523, ahora); osc.frequency.setValueAtTime(659, ahora+.12); osc.frequency.setValueAtTime(784, ahora+.24);
      gain.gain.setValueAtTime(.0001, ahora); gain.gain.exponentialRampToValueAtTime(.065, ahora+.03); gain.gain.exponentialRampToValueAtTime(.0001, ahora+.55);
      osc.start(ahora); osc.stop(ahora+.56);
    } else {
      osc.type='sine'; osc.frequency.setValueAtTime(520, ahora); osc.frequency.exponentialRampToValueAtTime(680, ahora+.08);
      gain.gain.setValueAtTime(.0001, ahora); gain.gain.exponentialRampToValueAtTime(.025, ahora+.015); gain.gain.exponentialRampToValueAtTime(.0001, ahora+.12);
      osc.start(ahora); osc.stop(ahora+.13);
    }
  }catch(e){ /* El sonido es opcional; nunca debe romper el test. */ }
}

/* Entrada inicial: logo + llamada a la acción. */
if(entrarBtn){
  entrarBtn.onclick = ()=>{
    sonido('inicio');
    mostrarPantalla('pantallaRegistro');
    setTimeout(()=>inputNombre && inputNombre.focus(), 350);
  };
}

/* Atrás del navegador: vuelve al inicio del test. */
history.pushState({app:true}, '', location.href);
window.addEventListener('popstate', function(){
  mostrarPantalla('pantallaBienvenida');
  history.pushState({app:true}, '', location.href);
});

empezarBtn.onclick = ()=>{
  const nombre = inputNombre.value.trim();
  const celular = inputCelular.value.trim();

  if(!nombre || !celular){
    errorRegistro.textContent = "Por favor completa tu nombre y número de celular.";
    return;
  }
  if(!/^\d{7,10}$/.test(celular.replace(/\s|-/g,''))){
    errorRegistro.textContent = "Ingresa un número de celular válido.";
    return;
  }
  errorRegistro.textContent = "";
  nombreUsuario = nombre;
  celularUsuario = celular.replace(/\s|-/g,'');
  iniciarTest();
};

function iniciarTest(){
  indiceActual = 0;
  puntajes = {};
  orden.forEach(k => puntajes[k] = 0);
  candidatosIniciales = [];
  candidatosActuales = [...orden];
  seleccionActual = new Set();
  resultadoFinal = [];
  mostrarPantalla('pantallaTest');
  cargarPregunta();
}

function tituloParaPregunta(){
  if(indiceActual === 0) return "¿QUÉ ACTIVIDADES TE LLAMAN MÁS LA ATENCIÓN?";
  if(candidatosActuales.length === 1) return `¡ENFOQUEMOS EL TEST EN ${carreras[candidatosActuales[0]].nombre.toUpperCase()}!`;
  if(indiceActual === TOTAL_PREGUNTAS - 1) return "🏁 ÚLTIMA PREGUNTA: ELIGE LO QUE MÁS TE REPRESENTA";
  return "AHORA VAMOS A CONOCER MEJOR TUS INTERESES";
}

function limiteSeleccion(){
  return indiceActual === 0 ? MAX_SELECCIONES_INICIALES : Math.min(MAX_SELECCIONES_FOCAL, candidatosActuales.length);
}

function cargarPregunta(){
  seleccionActual = new Set();
  siguienteBtn.disabled = true;

  progresoTexto.textContent = `Pregunta ${indiceActual+1} / ${TOTAL_PREGUNTAS}`;
  progresoRelleno.style.width = ((indiceActual+1)/TOTAL_PREGUNTAS*100) + '%';
  preguntaTitulo.textContent = tituloParaPregunta();

  preguntaImagen.style.display = 'block';
  const imagenNumero = Math.min(indiceActual+1,5);
  preguntaImagen.src = `img/pregunta${imagenNumero}.png`;
  preguntaImagen.onerror = function(){ preguntaImagen.style.display = 'none'; };

  const carrerasMostrar = indiceActual === 0 ? orden : candidatosActuales;
  opcionesWrap.innerHTML = '';

  carrerasMostrar.forEach((key, posicion)=>{
    const texto = banco[key][indiceActual] || banco[key][banco[key].length-1];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'opcion-btn';
    btn.innerHTML = `<span class="bullet"></span><span>${texto}</span>`;
    btn.setAttribute('aria-pressed','false');
    btn.onclick = ()=> toggleOpcion(key, btn);
    opcionesWrap.appendChild(btn);
  });

  const ayuda = document.querySelector('.pregunta-ayuda');
  if(ayuda){
    ayuda.innerHTML = `<span class="ayuda-icon">✓</span> Elige hasta ${limiteSeleccion()} opción${limiteSeleccion()>1?'es':''}`;
  }
}

function toggleOpcion(key, btn){
  if(seleccionActual.has(key)){
    seleccionActual.delete(key);
    btn.classList.remove('seleccionado');
    btn.setAttribute('aria-pressed','false');
    sonido('seleccion');
    siguienteBtn.disabled = seleccionActual.size === 0;
    return;
  }

  if(seleccionActual.size >= limiteSeleccion()){
    btn.animate([
      {transform:'translateX(0)'},{transform:'translateX(-4px)'},{transform:'translateX(4px)'},{transform:'translateX(0)'}
    ],{duration:180});
    return;
  }

  seleccionActual.add(key);
  btn.classList.add('seleccionado');
  btn.setAttribute('aria-pressed','true');
  sonido('seleccion');
  siguienteBtn.disabled = false;
}

siguienteBtn.onclick = ()=>{
  if(seleccionActual.size === 0) return;

  /* Cada elección suma un punto a la carrera correspondiente. */
  seleccionActual.forEach(key => puntajes[key]++);

  if(indiceActual === 0){
    /* La primera pregunta sirve como filtro: máximo 3 carreras. */
    candidatosIniciales = [...seleccionActual];
    candidatosActuales = [...seleccionActual];
  } else {
    /* Las preguntas siguientes solo muestran las carreras que quedaron. */
    const elegidas = [...seleccionActual];
    candidatosActuales = elegidas.length ? elegidas : candidatosActuales;
  }

  indiceActual++;

  if(indiceActual >= TOTAL_PREGUNTAS){
    calcularResultado();
    sonido('final');
    guardarRegistroYMostrar();
  } else {
    cargarPregunta();
  }
};

function calcularResultado(){
  const grupo = candidatosIniciales.length ? candidatosIniciales : orden;
  const ranking = [...grupo].sort((a,b)=>{
    const diferencia = puntajes[b] - puntajes[a];
    return diferencia !== 0 ? diferencia : grupo.indexOf(a) - grupo.indexOf(b);
  });

  /* Si el usuario terminó con una sola carrera, mostramos una segunda
     opción de las que eligió al principio. */
  resultadoFinal = ranking.slice(0,2);
  if(resultadoFinal.length === 1){
    const alternativa = orden.find(k => k !== resultadoFinal[0] && puntajes[k] > 0);
    if(alternativa) resultadoFinal.push(alternativa);
  }
}

function guardarRegistroYMostrar(){
  const registro = {
    nombre: nombreUsuario,
    celular: celularUsuario,
    carrera1: carreras[resultadoFinal[0]].nombre,
    carrera2: resultadoFinal[1] ? carreras[resultadoFinal[1]].nombre : "No definida",
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

function crearResumenCarrera(key, recomendada=false){
  const c = carreras[key];
  const item = document.createElement('article');
  item.className = 'carrera-mini' + (recomendada ? ' recomendada' : '');
  item.innerHTML = `
    <div class="carrera-mini-icon">${iconosCarrera[key] || '✦'}</div>
    <div class="carrera-mini-body">
      ${recomendada ? '<span class="carrera-mini-tag">RECOMENDADA PARA TI</span>' : ''}
      <h4>${c.nombre}</h4>
      <p>${c.objetivo}</p>
    </div>
    <button type="button" class="carrera-mini-info" data-key="${key}" aria-label="Ver información de ${c.nombre}">＋</button>
  `;
  item.querySelector('.carrera-mini-info').onclick = ()=> abrirModalInfo(key);
  return item;
}

const iconosCarrera = {
  ADM:'▦', CIV:'⌂', CON:'▤', GAS:'✦', INF:'◉', MEC:'⚙', SEC:'✎', SIS:'⌘', TOP:'⌖'
};

function mostrarTodasLasCarreras(){
  const wrap = document.getElementById('todasCarrerasWrap');
  if(!wrap) return;
  wrap.innerHTML = '';
  orden.forEach(key => wrap.appendChild(crearResumenCarrera(key, resultadoFinal.includes(key))));
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

  document.querySelectorAll('.btn-info').forEach(b=>b.onclick = ()=> abrirModalInfo(b.dataset.key));
  document.querySelectorAll('.btn-horario').forEach(b=>b.onclick = ()=> abrirModalHorario(b.dataset.key));
  mostrarPantalla('pantallaResultado');
}


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
document.querySelectorAll('.cerrar-modal').forEach(b=>b.onclick = ()=>{
  modalInfo.classList.add('hidden');
  modalHorario.classList.add('hidden');
});

reiniciarBtn.onclick = ()=>{
  inputNombre.value = "";
  inputCelular.value = "";
  errorRegistro.textContent = "";
  mostrarPantalla('pantallaBienvenida');
};
