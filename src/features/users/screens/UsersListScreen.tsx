// Hook que obtiene la lista de usuarios (mock o API)
import { useUsers } from '../hooks/useUsers';

// Componente que renderiza la tabla de usuarios
import { UsersTable } from '../components/UsersTable';



export const UsersListScreen = () => {
  // Obtenemos los usuarios y el estado de carga
  const { users, loading } = useUsers();

  // Mientras carga, mostramos un mensaje simple
  // (evitamos usar un componente que no existe)
  if (loading) {
    return (
      <div className="p-6">
        <p className="text-neutral-500">
          Cargando usuarios...
        </p>
      </div>
    );
  }

  // Render principal cuando ya hay datos
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">
        Gestión de Usuarios
      </h1>

      {/* Tabla de usuarios */}
      <UsersTable
        users={users}
        onView={(id) => console.log('Ver usuario', id)}
      />
    </div>
  );
};
