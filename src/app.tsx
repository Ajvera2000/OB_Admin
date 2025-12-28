import { useState } from "react";

// Configuración
import { IDCardConfigScreen } from "./features/settings/screens/IDCardConfigScreen";
import { NotificationsConfigScreen } from "./features/settings/screens/NotificationsConfigScreen";

// Usuarios
import { UsersListScreen } from "./features/users/screens/UsersListScreen";
import { UserDetailScreen } from "./features/users/screens/UserDetailScreen";
import { UserFormScreen } from "./features/users/screens/UserFormScreen";
import type { User } from './features/users/types/user.types';

// Places
import { SafeZonesScreen } from './features/places/screens/SafeZonesScreen';
import { CriticalPointsScreen } from './features/places/screens/CriticalPointsScreen';
import { FavoritePlacesScreen } from './features/places/screens/FavoritePlacesScreen';
import type { SafeZone } from './features/places/types/place.types';

function App() {
  const [currentScreen, setCurrentScreen] = useState<
    "users" | "user-detail" | "user-form" | "id-card" | "notifications" | "safe-zones" | "critical-points" | "favorite-places"
  >("users");

  // Usuarios
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // SafeZones
  const [safeZones, setSafeZones] = useState<SafeZone[]>([]);
  const [selectedSafeZone, setSelectedSafeZone] = useState<SafeZone | null>(null);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* NAV */}
      <nav className="bg-white border-b border-neutral-200 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg shadow-md">
                <span className="text-white text-xl font-bold">OB</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-neutral-900">OpenBlind Admin</h1>
                <p className="text-xs text-neutral-500">Panel de Administración</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 bg-neutral-100 p-1 rounded-lg">
              <button onClick={() => setCurrentScreen("users")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${currentScreen === "users" ? "bg-white text-primary-700 shadow-sm" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"}`}>
                <span className="flex items-center gap-2">👥 Usuarios</span>
              </button>

              <button onClick={() => setCurrentScreen("safe-zones")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${currentScreen === "safe-zones" ? "bg-white text-primary-700 shadow-sm" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"}`}>
                <span className="flex items-center gap-2">🛡️ Zonas Seguras</span>
              </button>

              <button onClick={() => setCurrentScreen("critical-points")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${currentScreen === "critical-points" ? "bg-white text-primary-700 shadow-sm" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"}`}>
                <span className="flex items-center gap-2">⚠️ Puntos Críticos</span>
              </button>

              <button onClick={() => setCurrentScreen("favorite-places")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${currentScreen === "favorite-places" ? "bg-white text-primary-700 shadow-sm" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"}`}>
                <span className="flex items-center gap-2">⭐ Lugares Favoritos</span>
              </button>

              <button onClick={() => setCurrentScreen("id-card")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${currentScreen === "id-card" ? "bg-white text-primary-700 shadow-sm" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"}`}>
                <span className="flex items-center gap-2">🪪 Tarjeta ID</span>
              </button>

              <button onClick={() => setCurrentScreen("notifications")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${currentScreen === "notifications" ? "bg-white text-primary-700 shadow-sm" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"}`}>
                <span className="flex items-center gap-2">🔔 Notificaciones</span>
              </button>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                RV
              </div>
              <span className="text-sm font-medium text-neutral-700">Ronny Villa</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <span className="text-neutral-500">Inicio</span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-500">Administración</span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-900 font-medium">
              {currentScreen === "users" && "Gestión de Usuarios"}
              {currentScreen === "user-detail" && "Detalle de Usuario"}
              {currentScreen === "user-form" && (editingUser ? "Editar Usuario" : "Crear Usuario")}
              {currentScreen === "safe-zones" && "Zonas Seguras"}
              {currentScreen === "critical-points" && "Puntos Críticos"}
              {currentScreen === "favorite-places" && "Lugares Favoritos"}
              {currentScreen === "id-card" && "Tarjeta de Identificación"}
              {currentScreen === "notifications" && "Notificaciones"}
            </span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 animate-fade-in">
        {currentScreen === "users" && (
          <UsersListScreen
            onSelectUser={(user: User) => {
              setSelectedUser(user);
              setCurrentScreen("user-detail");
            }}
            onCreate={() => {
              setEditingUser(null);
              setCurrentScreen("user-form");
            }}
            onEdit={(user: User) => {
              setEditingUser(user);
              setCurrentScreen("user-form");
            }}
          />
        )}

        {currentScreen === "user-form" && (
          <UserFormScreen
            user={editingUser}
            onCancel={() => setCurrentScreen("users")}
            onSave={(user: User) => setCurrentScreen("users")}
          />
        )}

        {currentScreen === "user-detail" && selectedUser && (
          <UserDetailScreen
            user={selectedUser}
            onBack={() => setCurrentScreen("users")}
          />
        )}

        {currentScreen === "safe-zones" && <SafeZonesScreen />}
        {currentScreen === "critical-points" && <CriticalPointsScreen />}
        {currentScreen === "favorite-places" && <FavoritePlacesScreen />}
        {currentScreen === "id-card" && <IDCardConfigScreen />}
        {currentScreen === "notifications" && <NotificationsConfigScreen />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-neutral-500">
          © 2024 OpenBlind — Panel Administrativo
        </div>
      </footer>
    </div>
  );
}

export default App;
