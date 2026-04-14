export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-8 px-6 text-center">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} El Trébol Rojo. Todos los derechos reservados.
      </p>
    </footer>
  )
}
