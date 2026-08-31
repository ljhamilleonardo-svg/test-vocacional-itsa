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

/* Banco de frases: índices 0-4 = ronda general, 5-8 = ronda enfocada */
const banco = {
ADM:["Organizar y coordinar el trabajo de un equipo","Crear un plan para vender un producto o servicio","Tomar decisiones para que un negocio crezca","Elaborar un presupuesto para un proyecto","Negociar acuerdos con proveedores o clientes","Dirigir una reunión de trabajo y motivar al equipo","Crear un emprendimiento propio desde cero","Gestionar los recursos humanos de una empresa","Buscar nuevas oportunidades de negocio"],
CIV:["Diseñar los planos de una casa o edificio","Supervisar la construcción de una obra","Calcular los materiales necesarios para construir algo","Resolver problemas técnicos en una obra en construcción","Diseñar sistemas de agua potable o alcantarillado","Dibujar planos técnicos de una edificación","Verificar que una obra cumpla normas de seguridad","Calcular el costo de un proyecto de infraestructura","Crear tu propia empresa constructora"],
CON:["Llevar el control de los ingresos y gastos de una empresa","Elaborar los estados financieros de un negocio","Calcular impuestos que debe pagar una empresa","Revisar que las cuentas de una empresa estén correctas","Organizar la información contable de un negocio","Preparar declaraciones tributarias","Auditar las cuentas de una organización","Analizar si un negocio es rentable o no","Ser responsable de la contabilidad de un negocio propio"],
GAS:["Preparar platos de comida creativos","Diseñar un menú para un restaurante","Aprender técnicas de cocina internacional","Decorar postres o platillos con detalle","Calcular el costo de los ingredientes de una receta","Crear nuevas recetas y combinaciones de sabores","Dirigir un equipo de cocineros","Aprender técnicas de repostería y pastelería","Abrir tu propio restaurante o negocio de comida"],
INF:["Programar sistemas para controlar máquinas","Diseñar soluciones tecnológicas para fábricas","Trabajar con robots o sistemas automatizados","Resolver fallas en sistemas industriales","Automatizar un proceso repetitivo de producción","Integrar software y hardware en un mismo sistema","Programar controladores lógicos (PLC)","Aplicar la robótica para resolver problemas reales","Emprender un negocio de automatización"],
MEC:["Reparar el motor de un vehículo","Diagnosticar por qué un auto no enciende","Dar mantenimiento preventivo a un vehículo","Trabajar con herramientas y piezas mecánicas","Detectar fallas en el sistema eléctrico de un auto","Aprender sobre motores a gasolina y diésel","Desarmar y volver a armar un motor","Dar servicio técnico a distintos tipos de vehículos","Emprender tu propio taller mecánico"],
SEC:["Organizar la agenda y reuniones de una oficina","Redactar documentos formales para una empresa","Atender llamadas y coordinar comunicación interna","Organizar archivos y documentación importante","Aplicar buenos modales y protocolo en el trabajo","Usar herramientas de oficina como Word o Excel","Elaborar actas e informes de reuniones","Ser una persona ordenada y detallista en el trabajo","Ser la mano derecha de un jefe o directivo"],
SIS:["Programar una aplicación o página web","Diseñar una base de datos para una empresa","Resolver problemas lógicos con código","Configurar redes de computadoras","Detectar y corregir errores en un programa","Crear una app o videojuego","Diseñar la arquitectura de un sistema informático","Aprender sobre inteligencia artificial y datos","Emprender tu propia empresa de tecnología"],
TOP:["Medir y levantar planos de un terreno","Trabajar al aire libre con instrumentos de medición","Calcular el área y los límites de un terreno","Interpretar mapas y datos geográficos","Planificar la ubicación de una construcción en un terreno","Usar drones o equipos GPS para mediciones","Elaborar mapas cartográficos precisos","Recorrer terrenos para hacer levantamientos topográficos","Crear tu propia empresa de servicios topográficos"]
};

const RONDA1 = 5; // preguntas generales (con las 9 carreras)
const RONDA2 = 4; // preguntas enfocadas (solo con las 3 carreras líderes)
const TOTAL_PREGUNTAS = RONDA1 + RONDA2;

let indiceActual = 0;
let puntajes = {};
let top3 = [];
let preguntasRonda2 = [];
let resultadoFinal = [];

/* ---------- Elementos ---------- */
const pantallaInicio = document.getElementById('pantallaInicio');
const empezarBtn = document.getElementById('empezarBtn');
const opcionesWrap = document.getElementById('opcionesWrap');
const progresoRelleno = document.getElementById('progresoRelleno');
const progresoTexto = document.getElementById('progresoTexto');
const resultadosWrap = document.getElementById('resultadosWrap');
const reiniciarBtn = document.getElementById('reiniciarBtn');
const inputNombre = document.getElementById('inputNombre');
const inputCelular = document.getElementById('inputCelular');
const registrarBtn = document.getElementById('registrarBtn');
const errorRegistro = document.getElementById('errorRegistro');

function mostrarPantalla(id){
  document.querySelectorAll('.pantalla').forEach(p=>p.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}

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
  progresoTexto.textContent = "Pregunta " + (indiceActual+1) + " / " + TOTAL_PREGUNTAS;
  progresoRelleno.style.width = (indiceActual/TOTAL_PREGUNTAS*100) + "%";

  let opciones;
  if(indiceActual < RONDA1){
    // Ronda general: todas las carreras, frase índice = indiceActual
    opciones = orden.map(key => ({ key, texto: banco[key][indiceActual] }));
  } else {
    // Ronda enfocada: solo las 3 carreras líderes
    const idxRonda2 = indiceActual - RONDA1;
    opciones = preguntasRonda2[idxRonda2];
  }

  opcionesWrap.innerHTML = '';
  const letras = ["A","B","C","D","E","F","G","H","I"];
  opciones.forEach((op, i)=>{
    const btn = document.createElement('button');
    btn.className = 'opcion-btn';
    btn.innerHTML = '<span class="letra">'+letras[i]+'</span><span>'+op.texto+'</span>';
    btn.onclick = ()=> responder(op.key);
    opcionesWrap.appendChild(btn);
  });
}

function responder(key){
  puntajes[key]++;
  indiceActual++;

  // Al terminar la ronda 1, calculamos las 3 carreras líderes para enfocar la ronda 2
  if(indiceActual === RONDA1){
    top3 = [...orden].sort((a,b)=> puntajes[b]-puntajes[a]).slice(0,3);
    for(let i=0; i<RONDA2; i++){
      const idxFrase = RONDA1 + i; // índices 5,6,7,8 del banco
      preguntasRonda2.push(top3.map(key => ({ key, texto: banco[key][idxFrase] })));
    }
  }

  if(indiceActual >= TOTAL_PREGUNTAS){
    calcularResultado();
    mostrarPantalla('pantallaRegistro');
  } else {
    cargarPregunta();
  }
}

function calcularResultado(){
  const ranking = [...orden].sort((a,b)=> puntajes[b]-puntajes[a]);
  resultadoFinal = ranking.slice(0,2);
}

/* ---------- Registro (Firebase) ---------- */
registrarBtn.onclick = ()=>{
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
  registrarBtn.disabled = true;
  registrarBtn.textContent = "Guardando...";

  const registro = {
    nombre: nombre,
    celular: celular,
    carrera1: carreras[resultadoFinal[0]].nombre,
    carrera2: carreras[resultadoFinal[1]].nombre,
    fecha: new Date().toLocaleString('es-BO')
  };

  try{
    firebase.database().ref('registros').push(registro)
      .then(()=>{
        mostrarResultados();
      })
      .catch((err)=>{
        console.error(err);
        errorRegistro.textContent = "No se pudo guardar en la base de datos, pero aquí tienes tu resultado igual.";
        setTimeout(mostrarResultados, 1200);
      })
      .finally(()=>{
        registrarBtn.disabled = false;
        registrarBtn.textContent = "Ver mis resultados";
      });
  }catch(e){
    console.error(e);
    mostrarResultados();
    registrarBtn.disabled = false;
    registrarBtn.textContent = "Ver mis resultados";
  }
};

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

empezarBtn.onclick = iniciarTest;
reiniciarBtn.onclick = ()=> mostrarPantalla('pantallaInicio');

/* ---------- Sonido del video de fondo ---------- */
const fondoVideo = document.getElementById('fondoVideo');
const sonidoBtn = document.getElementById('sonidoBtn');
let sonidoActivado = false;

sonidoBtn.onclick = ()=>{
  sonidoActivado = !sonidoActivado;
  fondoVideo.muted = !sonidoActivado;
  if(sonidoActivado){
    fondoVideo.volume = 0.35; // volumen moderado para no tapar la voz del expositor
    sonidoBtn.textContent = "🔊 Sonido activado";
  } else {
    sonidoBtn.textContent = "🔇 Activar sonido";
  }
};
