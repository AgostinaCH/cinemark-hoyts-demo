// Auth demo 100% front-end (sin backend). No es seguro: cualquiera puede ver
// estas credenciales inspeccionando el código. Solo simula un login.
const USUARIO_DEMO = "admin";
const PASSWORD_DEMO = "admin123";
const SESION_KEY = "mp2_sesion";

function login(nombre, password) {
    if (nombre === USUARIO_DEMO && password === PASSWORD_DEMO) {
        localStorage.setItem(SESION_KEY, nombre);
        return true;
    }
    return false;
}

function logout() {
    localStorage.removeItem(SESION_KEY);
}

function usuarioActual() {
    return localStorage.getItem(SESION_KEY);
}

function actualizarIconoUsuario() {
    const iconoUsuario = document.querySelector("a.user");
    if (!iconoUsuario) return;
    iconoUsuario.href = usuarioActual() ? "panel.html" : "login.html";
}

document.addEventListener("DOMContentLoaded", actualizarIconoUsuario);
