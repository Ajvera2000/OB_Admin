// Hook de React para manejar estado interno
import { useState } from "react";

// Pantallas existentes de Configuración
import { IDCardConfigScreen } from "./features/settings/screens/IDCardConfigScreen";
import { NotificationsConfigScreen } from "./features/settings/screens/NotificationsConfigScreen";

// Nueva pantalla: Gestión de Usuarios (CRUD - Read)
import { UsersListScreen } from "./features/users/screens/UsersListScreen";

function App() {
  /**
   * Estado que controla qué pantalla se muestra.
   * Se evita usar Router para simplificar la navegación
   * y mantener un flujo tipo Admin Panel.
   */
  const [currentScreen, setCurrentScreen] = useState<
    "users" | "id-card" | "notifications"
  >("users"); // Arranca mostrando Gestión de Usuarios

  return (
    // Contenedor principal de la aplicación
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      
      {/* =======================
          BARRA DE NAVEGACIÓN
         ======================= */}
      <nav className="bg-white border-b border-neutral-200 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo y título */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg shadow-md">
                <span className="text-white text-xl font-bold">OB</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-neutral-900">
                  OpenBlind Admin
                </h1>
                <p className="text-xs text-neutral-500">
                  Panel de Administración
                </p>
              </div>
            </div>

            {/* =======================
                Tabs de navegación
               ======================= */}
            <div className="flex items-center gap-2 bg-neutral-100 p-1 rounded-lg">

              {/* Tab: Usuarios */}
              <button
                onClick={() => setCurrentScreen("users")}
                className={`
                  px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${
                    currentScreen === "users"
                      ? "bg-white text-primary-700 shadow-sm"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <span>👥</span>
                  <span>Usuarios</span>
                </span>
              </button>

              {/* Tab: Tarjeta de Identificación */}
              <button
                onClick={() => setCurrentScreen("id-card")}
                className={`
                  px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${
                    currentScreen === "id-card"
                      ? "bg-white text-primary-700 shadow-sm"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <span>🪪</span>
                  <span>Tarjeta ID</span>
                </span>
              </button>

              {/* Tab: Notificaciones */}
              <button
                onClick={() => setCurrentScreen("notifications")}
                className={`
                  px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${
                    currentScreen === "notifications"
                      ? "bg-white text-primary-700 shadow-sm"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <span>🔔</span>
                  <span>Notificaciones</span>
                </span>
              </button>
            </div>

            {/* Usuario logueado (mock visual) */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                RV
              </div>
              <span className="text-sm font-medium text-neutral-700">
                Ronny Villa
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* =======================
          Breadcrumb / Migas
         ======================= */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <span className="text-neutral-500">Inicio</span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-500">Administración</span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-900 font-medium">
              {/* Texto dinámico según pantalla */}
              {currentScreen === "users" && "Gestión de Usuarios"}
              {currentScreen === "id-card" && "Tarjeta de Identificación"}
              {currentScreen === "notifications" && "Notificaciones"}
            </span>
          </nav>
        </div>
      </div>

      {/* =======================
          CONTENIDO PRINCIPAL
         ======================= */}
      <main className="flex-1 animate-fade-in">
        {/* Render condicional de pantallas */}
        {currentScreen === "users" && <UsersListScreen />}
        {currentScreen === "id-card" && <IDCardConfigScreen />}
        {currentScreen === "notifications" && (
          <NotificationsConfigScreen />
        )}
      </main>

      {/* =======================
          FOOTER
         ======================= */}
      <footer className="bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-neutral-500">
          © 2024 OpenBlind — Panel Administrativo
        </div>
      </footer>
    </div>
  );
}

export default App;
